---
title: Elyx RAG Backend
emoji: 🏥
colorFrom: blue
colorTo: indigo
sdk: docker
pinned: false
---

# Elyx RAG Backend

FastAPI backend powering the "Ask Why" RAG feature for the Elyx AI health journey platform.

## Endpoints

- `GET /` — Health check
- `POST /ask` — Query the RAG pipeline (`{ "question": "..." }`)

## Environment Variables (set as Space Secrets)

| Variable | Description |
|---|---|
| `OPENROUTER_API_KEY` | Your OpenRouter API key |
| `OPENROUTER_MODEL_PRO` | Model for heavy reasoning (default: qwen free) |
| `OPENROUTER_MODEL_FLASH` | Model for lighter tasks (default: qwen free) |
| `FRONTEND_URL` | Vercel frontend URL for CORS |
