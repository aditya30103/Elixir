# This file will hold the single, shared instance of our SemanticMemory.
from .memory import SemanticMemory

# Create the one and only instance of the Semantic Memory here.
# All other parts of the application will import this exact object.
memory_instance = SemanticMemory()