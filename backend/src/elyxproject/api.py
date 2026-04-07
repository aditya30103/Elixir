import os
from fastapi import FastAPI
from pydantic import BaseModel
from .rag_pipeline import RAGPipeline
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

rag_system = RAGPipeline()

# FRONTEND_URL can be set to the deployed Vercel URL in production.
# Falls back to localhost for local development.
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:3000")
origins = [frontend_url, "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str

@app.post("/ask")
async def ask_rag(query: Query):
    """
    This endpoint receives a question, passes it to the RAG pipeline's
    answer method, and returns the generated answer.
    """
    print(f"Received question: {query.question}")
    # Use the rag_system instance to answer the question
    answer = rag_system.answer(query.question)
    print(f"Generated answer: {answer}")
    return {"answer": answer}

@app.get("/")
def read_root():
    return {"message": "Elyx RAG API is running"}