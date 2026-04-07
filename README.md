# Elyx AI — Personalized Health Journey Platform

Elyx AI is a multi-agent simulation and visualization platform for long-term personalized health journeys. It generates a realistic 8-month health narrative for a member, stores it in a vector database, and exposes it through an interactive frontend with an AI-powered "Ask Why" feature.

**Live Demo:** [elixir-sepia.vercel.app](https://elixir-sepia.vercel.app/)

---

## Problem Statement

Two core challenges drove the design:

1. **Generate realistic, long-term health conversations** — simulate an 8-month WhatsApp-style dialogue between a member and a diverse health team, respecting complex constraints (medical history, travel, non-adherence, diagnostics).
2. **Visualize the member's journey and explain every decision** — build a web app that surfaces not just what happened, but *why* — tracing any health decision back to its source in the conversation.

---

## Solution: Three-Phase AI Pipeline

```
Phase 1: Plan        →   Phase 2: Generate      →   Phase 3: Analyze & Query
─────────────────────    ────────────────────────    ──────────────────────────
Narrative Architect      Multi-agent crew            RAG pipeline
creates 32-week          generates full 8-month      answers natural-language
JSON story plan          conversation + data logs    questions about the journey
```

### Phase 1 — Strategic Blueprint
A `Narrative Architect` agent creates a 32-week plan in JSON, weaving together the member's persona, goals, and all constraints into a coherent arc before any conversation is generated.

### Phase 2 — Conversation Engine
A multi-agent crew (Rohan the member, Ruby the concierge, Dr. Warren, nutritionist, PT, data scientist, and others) generates week-by-week conversations. A `Router` agent decides who speaks next. Structured data logs (biometrics, test results) are emitted alongside the dialogue.

### Phase 3 — Insight Layer
- **Episodic Summarizer** condenses 8 months of logs into a navigable monthly narrative.
- **RAG Pipeline** embeds all conversation turns into ChromaDB; an `Analyst` agent retrieves relevant context and synthesizes evidence-backed answers to free-form queries.

---

## Architecture

```
┌─────────────────────────────────┐     ┌──────────────────────────────────┐
│  Frontend (Vercel)              │     │  Backend (Hugging Face Spaces)   │
│  Next.js 15 · TypeScript        │────▶│  FastAPI · CrewAI · ChromaDB     │
│  Recharts · Tailwind CSS        │     │  sentence-transformers · LiteLLM │
└─────────────────────────────────┘     └──────────────────────────────────┘
         │                                         │
         │  /api/why  (Next.js API route)          │  POST /ask  (RAG query)
         └─────────────────────────────────────────┘
```

**Frontend routes:**
| Route | Description |
|---|---|
| `/` | Landing page |
| `/dashboard/member` | Rohan's biometric metrics & progress |
| `/dashboard/elyx` | Internal team view |
| `/journey` | Episodic timeline (month-by-month) |
| `/journey/[id]` | Single episode detail |
| `/fullstory` | Complete 8-month conversation transcript |

**Backend modules:**
| Module | Role |
|---|---|
| `agents.py` | Agent personas & LLM bindings |
| `orchestrator.py` | Week-by-week conversation generation |
| `rag_pipeline.py` | RAG query: retrieve → synthesize → answer |
| `memory.py` | ChromaDB vector store + embeddings |
| `crew.py` | CrewAI task/crew definitions |
| `api.py` | FastAPI app (`GET /`, `POST /ask`) |
| `run_phase1/2/3.py` | Phase runners |

---

## Local Setup

### Prerequisites
- Python 3.11+
- Node.js 18+
- An [OpenRouter](https://openrouter.ai) API key

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env   # fill in OPENROUTER_API_KEY
```

Run the generation pipeline (one-time, outputs go to `store/`):

```bash
python -m src.elyxproject.run_phase1   # narrative plan
python -m src.elyxproject.run_phase2   # 8-month conversation
python -m src.elyxproject.run_phase3   # episodic summary
```

Start the RAG API:

```bash
uvicorn src.elyxproject.api:app --reload
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local   # set BACKEND_URL=http://127.0.0.1:8000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> After running the backend pipeline, copy `backend/store/` outputs into `frontend/data/` if you want to update the data the frontend reads.

---

## Deployment

| Service | Platform | Config |
|---|---|---|
| Frontend | [Vercel](https://vercel.com) | Root directory: `frontend`; set `BACKEND_URL` env var |
| Backend | [Hugging Face Spaces](https://huggingface.co/spaces) (Docker) | Set `OPENROUTER_API_KEY`, `FRONTEND_URL` as Secrets |

---

## Environment Variables

### Backend (`backend/.env`)
| Variable | Description | Default |
|---|---|---|
| `OPENROUTER_API_KEY` | OpenRouter API key | — |
| `OPENROUTER_MODEL_PRO` | Model for agents & RAG analysis | `openrouter/openai/gpt-oss-120b:free` |
| `OPENROUTER_MODEL_FLASH` | Model for routing & summaries | `openrouter/openai/gpt-oss-20b:free` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` |

### Frontend (`frontend/.env.local`)
| Variable | Description | Default |
|---|---|---|
| `BACKEND_URL` | Backend URL for RAG queries | `http://127.0.0.1:8000` |

---

## Key Design Choices

**Why pre-seeded vector DB?**
The ChromaDB store (`backend/store/vector_memory/`) is committed to the repo so the deployed backend can answer RAG queries immediately without re-running the full generation pipeline.

**Why OpenRouter?**
Single API key to access dozens of models (free and paid). Model IDs for flash and pro are configurable via env vars — swap to any OpenRouter model without code changes.

**Why Hugging Face Spaces for backend?**
Vercel serverless has a 250MB limit; the full Python stack (CrewAI, sentence-transformers, ChromaDB) exceeds that. HF Spaces Docker containers have no such constraint.

---

## Prompts

All agent prompts are centralized in `prompts.yaml` at the repo root, and agent/task configs live in `backend/src/elyxproject/config/`. This makes the system fully configurable without touching Python code.
