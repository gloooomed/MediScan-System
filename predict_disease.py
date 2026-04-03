import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.preprocessing import LabelEncoder
import json
import sys

# Load the trained model
model = tf.keras.models.load_model('model/ann_model.keras')  # Path to your model

# Load the dataset to access the column names
df = pd.read_csv('symbipredict_2022.csv')

# Load additional files
disease_description_df = pd.read_csv('disease_Description.csv')
disease_precaution_df = pd.read_csv('disease_precaution.csv')

# Prepare label encoder for diseases
label_encoder = LabelEncoder()
label_encoder.fit(df['Disease'])  # Fit the encoder on the disease column

# Create a mapping for symptoms
symptom_columns = df.columns[:-1].tolist()

# Function to predict diseases based on symptoms
def predict_disease(input_symptoms_list):
    # Initialize a feature vector of the appropriate size
    features = np.zeros(len(symptom_columns))

    # Set the feature vector based on the input symptoms
    for symptom in input_symptoms_list:
        if symptom in symptom_columns:
            features[symptom_columns.index(symptom)] = 1
        else:
            print(f"Warning: '{symptom}' is not a valid symptom.")

    # Reshape for model prediction
    features = features.reshape(1, -1)
    
    # Predict probabilities for each disease
    predictions = model.predict(features)

    raw_probabilities = predictions[0]

    softmax_probabilities = np.exp(raw_probabilities - np.max(raw_probabilities)) / np.sum(np.exp(raw_probabilities - np.max(raw_probabilities))) * 10
    
    # Get the top 5 predicted diseases
    top_indices = np.argsort(predictions[0])[-5:][::-1]
    top_diseases = label_encoder.inverse_transform(top_indices)
    top_probabilities = softmax_probabilities[top_indices]

    # Fetch descriptions and unique precautions for top 5 diseases
    descriptions = []
    unique_precautions = set()

    for disease in top_diseases[:2]:
        precautions = disease_precaution_df.loc[
        disease_precaution_df['Disease'] == disease, ['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']
        ].values
        if len(precautions) > 0:
            for precaution in precautions[0]:
                if isinstance(precaution, str):
                    unique_precautions.add(precaution)
    
    for disease in top_diseases:
        description = disease_description_df.loc[disease_description_df['Disease'] == disease, 'Description'].values
        descriptions.append(description[0] if len(description) > 0 else "Description not found")

    # Prepare response dictionary
    response = {
        "predictions": [
            {"disease": disease, "probability": float(probability)*100, "description": desc}
            for disease, probability, desc in zip(top_diseases, top_probabilities, descriptions)
        ],
        "precautions": list(unique_precautions)
    }
    
    return json.dumps(response)

# Main execution: Read symptoms from stdin
if __name__ == "__main__":
    input_data = sys.stdin.read()
    data = json.loads(input_data)
    input_symptoms = data.get("symptoms", [])
    input_symptoms_list = [symptom["value"].strip().replace(' ', '_').lower() for symptom in input_symptoms]
    print(predict_disease(input_symptoms_list))
