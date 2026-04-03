import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';

const app = express();

const corsOriginEnv = process.env.CORS_ORIGIN;
const corsOptions = corsOriginEnv
    ? { origin: corsOriginEnv.split(',').map((origin) => origin.trim()) }
    : { origin: true };

app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON requests

app.post('/predict-disease', (req, res) => {

    // Set the response header to prevent caching
    res.set('Cache-Control', 'no-store');
    
    // Extract symptoms from the request body
    const symptoms = req.body.symptoms;
    console.log(req.body)

    if (!Array.isArray(symptoms) || symptoms.length === 0) {
        return res.status(400).json({ error: "Invalid symptoms input" });
    }

    // Prepare data to send to Python script
    const dataToSend = JSON.stringify({ symptoms });

    // Setting UTF-8 encoding for the Python process
    const pythonProcess = spawn('python', ['predict_disease.py'], {
        env: { ...process.env, PYTHONIOENCODING: 'utf-8' }
    });

    // Send JSON data through stdin to the Python process
    pythonProcess.stdin.write(dataToSend);
    pythonProcess.stdin.end();

    // Capture Python output and handle response
    let pythonOutput = '';
    pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.error(`Python process exited with code ${code}`);
            return res.status(500).json({ error: "Error in disease prediction" });
        }

        try {
            // Filter out lines that don’t look like JSON
            const result = JSON.parse(pythonOutput.split('\n').find(line => {
                try {
                    JSON.parse(line); // Try parsing each line as JSON
                    return true;
                } catch {
                    return false;
                }
            }));

            res.json(result);
        } catch (error) {
            console.error("Error parsing Python output:", error);
            res.status(500).json({ error: "Error parsing prediction results" });
        }
    });

    pythonProcess.on('error', (error) => {
        console.error(`Error starting Python process: ${error.message}`);
        res.status(500).json({ error: "Failed to run prediction script" });
    });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
