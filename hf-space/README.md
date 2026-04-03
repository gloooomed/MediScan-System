---
title: Mediscan API
sdk: docker
app_port: 7860
---

This Space hosts the MediScan disease prediction API.

Endpoints:
- GET /health
- POST /predict-disease

POST body format:
{
  "symptoms": [
    { "value": "itching" },
    { "value": "skin rash" }
  ]
}
