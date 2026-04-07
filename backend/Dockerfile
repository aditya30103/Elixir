FROM python:3.11-slim

WORKDIR /app

# System deps for building native extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies first (layer cache friendly)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Pre-download the sentence-transformers model so first request isn't slow
RUN python -c "from sentence_transformers import SentenceTransformer; SentenceTransformer('all-MiniLM-L6-v2')"

# Copy application code and pre-seeded vector memory
COPY src/ src/
COPY store/ store/

# HF Spaces requires port 7860
EXPOSE 7860

CMD ["uvicorn", "src.elyxproject.api:app", "--host", "0.0.0.0", "--port", "7860"]
