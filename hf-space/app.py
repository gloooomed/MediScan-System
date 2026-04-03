import json
import os

import numpy as np
import pandas as pd
import tensorflow as tf
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder

MODEL_PATH = os.getenv("MODEL_PATH", "model/ann_model.keras")
TRAINING_CSV_PATH = os.getenv("TRAINING_CSV_PATH", "symbipredict_2022.csv")
DESCRIPTION_CSV_PATH = os.getenv("DESCRIPTION_CSV_PATH", "disease_Description.csv")
PRECAUTION_CSV_PATH = os.getenv("PRECAUTION_CSV_PATH", "disease_precaution.csv")

app = Flask(__name__)
CORS(app)


# Load model and metadata once at startup.
model = tf.keras.models.load_model(MODEL_PATH)
df = pd.read_csv(TRAINING_CSV_PATH)
disease_description_df = pd.read_csv(DESCRIPTION_CSV_PATH)
disease_precaution_df = pd.read_csv(PRECAUTION_CSV_PATH)

label_encoder = LabelEncoder()
label_encoder.fit(df["Disease"])
symptom_columns = df.columns[:-1].tolist()


def normalize_symptoms(symptoms_payload):
    normalized = []
    for symptom in symptoms_payload:
        if isinstance(symptom, dict):
            value = symptom.get("value", "")
        else:
            value = str(symptom)

        cleaned = value.strip().replace(" ", "_").lower()
        if cleaned:
            normalized.append(cleaned)

    return normalized


def predict_from_symptoms(input_symptoms_list):
    features = np.zeros(len(symptom_columns))

    for symptom in input_symptoms_list:
        if symptom in symptom_columns:
            features[symptom_columns.index(symptom)] = 1

    features = features.reshape(1, -1)
    predictions = model.predict(features, verbose=0)

    raw_probabilities = predictions[0]
    softmax_probabilities = (
        np.exp(raw_probabilities - np.max(raw_probabilities))
        / np.sum(np.exp(raw_probabilities - np.max(raw_probabilities)))
        * 10
    )

    top_indices = np.argsort(predictions[0])[-5:][::-1]
    top_diseases = label_encoder.inverse_transform(top_indices)
    top_probabilities = softmax_probabilities[top_indices]

    descriptions = []
    unique_precautions = set()

    for disease in top_diseases[:2]:
        precautions = disease_precaution_df.loc[
            disease_precaution_df["Disease"] == disease,
            ["Precaution_1", "Precaution_2", "Precaution_3", "Precaution_4"],
        ].values

        if len(precautions) > 0:
            for precaution in precautions[0]:
                if isinstance(precaution, str):
                    unique_precautions.add(precaution)

    for disease in top_diseases:
        description = disease_description_df.loc[
            disease_description_df["Disease"] == disease, "Description"
        ].values
        descriptions.append(description[0] if len(description) > 0 else "Description not found")

    response = {
        "predictions": [
            {
                "disease": disease,
                "probability": float(probability) * 100,
                "description": desc,
            }
            for disease, probability, desc in zip(top_diseases, top_probabilities, descriptions)
        ],
        "precautions": list(unique_precautions),
    }

    return response


@app.get("/")
def root():
    return jsonify({"status": "ok", "message": "MediScan API is running"})


@app.get("/health")
def health():
    return jsonify({"status": "healthy"})


@app.post("/predict-disease")
def predict_disease():
    payload = request.get_json(silent=True) or {}
    symptoms = payload.get("symptoms", [])

    if not isinstance(symptoms, list) or len(symptoms) == 0:
        return jsonify({"error": "Invalid symptoms input"}), 400

    normalized_symptoms = normalize_symptoms(symptoms)
    result = predict_from_symptoms(normalized_symptoms)
    return jsonify(result)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=7860)
