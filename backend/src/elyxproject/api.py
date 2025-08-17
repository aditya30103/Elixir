from fastapi import FastAPI
from pydantic import BaseModel
from .rag_pipeline import RAGPipeline  # Correctly import the RAGPipeline class
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app
app = FastAPI()

# --- This is the key change ---
# Create a single, reusable instance of the RAGPipeline when the server starts.
# This is much more efficient than creating a new one for every request.
rag_system = RAGPipeline()
# -----------------------------

# Configure CORS
origins = [
    "http://localhost:3000",
]

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