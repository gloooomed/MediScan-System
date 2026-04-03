<p align="center">
   <img src="src/assets/health.png" alt="MediScan Logo" width="96" height="96" style="border-radius: 12px;" />
</p>

<h1 align="center">MediScan System</h1>

<p align="center">
   AI-powered symptom analysis. Get disease probability insights and practical precautions in seconds.
</p>

<p align="center">
   <a href="https://github.com/gloooomed/MediScan-System/issues/new?labels=bug">Report Bug</a>
   ·
   <a href="https://github.com/gloooomed/MediScan-System/issues/new?labels=enhancement">Request Feature</a>
</p>

<p align="center">
   <a href="https://github.com/gloooomed/MediScan-System/stargazers">
      <img src="https://img.shields.io/github/stars/gloooomed/MediScan-System?style=for-the-badge&labelColor=1a1a2e&color=4f8ef7&label=STARS" alt="Stars" />
   </a>
   <a href="https://github.com/gloooomed/MediScan-System/forks">
      <img src="https://img.shields.io/github/forks/gloooomed/MediScan-System?style=for-the-badge&labelColor=1a1a2e&color=4f8ef7&label=FORKS" alt="Forks" />
   </a>
   <a href="https://img.shields.io/badge/LICENSE-Not%20specified-lightgrey?style=for-the-badge&labelColor=1a1a2e">
      <img src="https://img.shields.io/badge/LICENSE-Not%20specified-lightgrey?style=for-the-badge&labelColor=1a1a2e" alt="License" />
   </a>
   <a href="https://your-vercel-app.vercel.app">
      <img src="https://img.shields.io/badge/LIVE-PAGE-blueviolet?style=for-the-badge&labelColor=1a1a2e" alt="Live Page" />
   </a>
</p>

---

## What it does

- **Disease Prediction** - Select symptoms and receive top probable diseases with confidence percentages.
- **Precaution Suggestions** - Returns actionable precaution items for likely conditions.
- **Modern Clinical UI** - Fast, responsive React interface with smooth animation and clean reporting.

---

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | [![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev) |
| Build | [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev) |
| Styling | [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com) |
| Frontend Animation | [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion) |
| API Layer | [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org) [![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com) |
| ML Runtime | [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org) [![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://tensorflow.org) |
| Deployment | [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com) [![Hugging%20Face%20Spaces](https://img.shields.io/badge/Hugging_Face_Spaces-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/spaces) |

---

## Getting Started

```bash
git clone https://github.com/gloooomed/MediScan-System.git
cd MediScan-System
npm install
```

Set up Python dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file (optional for production-style frontend API routing):

```env
VITE_API_BASE_URL=https://gloooomed-mediscan-api.hf.space
```

Run local development (frontend + backend):

```bash
npm run dev
```

---

## Project Structure

```text
MediScan System/
|-- app.js
|-- predict_disease.py
|-- requirements.txt
|-- disease_Description.csv
|-- disease_precaution.csv
|-- symbipredict_2022.csv
|-- model/
|   `-- ann_model.keras
|-- hf-space/
|   |-- app.py
|   |-- Dockerfile
|   |-- requirements.txt
|   |-- README.md
|   `-- .gitattributes
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|   |-- symptoms.json
|   |-- assets/
|   `-- components/
|       |-- Header/
|       |-- Home/
|       |-- Predict/
|       |-- Report/
|       |-- About/
|       `-- Footer/
`-- package.json
```

---

## Contributing

### Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| [Node.js](https://nodejs.org/) | v18+ | LTS recommended |
| [Python](https://python.org/) | v3.10+ | Required for model execution |
| [Git](https://git-scm.com/) | Any recent | For version control |

### Steps

1. **Fork** the repository
2. **Create a branch** for your change:
    ```bash
    git checkout -b feat/your-feature-name
    ```
3. **Commit** with a clear message:
    ```bash
    git commit -m "feat: add your feature"
    ```
4. **Push** to your fork:
    ```bash
    git push origin feat/your-feature-name
    ```
5. **Open a Pull Request** against `main`.

---

## Disclaimer

MediScan System is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.

---

<p align="center">
   <em>Built to make early symptom insights faster and more accessible.</em>
</p>
