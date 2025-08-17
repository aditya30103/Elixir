from pydantic import BaseModel, Field
from typing import List, Union

# --- Pydantic Models for Phase 1 Output ---
class Event(BaseModel):
    event_type: str = Field(..., description="Type of event (e.g., 'Diagnostic', 'Travel', 'FrictionPoint', 'ExerciseUpdate', 'QBR').")
    details: str = Field(..., description="A detailed description of the event.")

class WeeklyPlan(BaseModel):
    week_number: int = Field(..., description="The week number, from 1 to 32.")
    month: int = Field(..., description="The corresponding month number.")
    theme: str = Field(..., description="A high-level theme for the week (e.g., 'Baseline Data Collection', 'First Intervention Friction').")
    events: List[Event] = Field(..., description="A list of key scheduled events or narrative points for the week.")
    conversation_goals: List[str] = Field(..., description="Key topics the conversation should cover this week.")
    data_generation_prompts: List[str] = Field(..., description="Prompts for generating specific data points (e.g., 'Generate Whoop data showing high stress levels').")

class StoryPlan(BaseModel):
    """The complete 32-week narrative plan for the member's health journey."""
    weekly_plans: List[WeeklyPlan]


# --- Pydantic Models for Phase 2 Output ---
class ChatMessage(BaseModel):
    timestamp: str = Field(..., description="The simulated timestamp of the message in '[M/D/YY, H:MM AM/PM]' format.")
    speaker: str = Field(..., description="The role of the agent speaking (e.g., 'Rohan Patel', 'Dr. Warren').")
    message: str = Field(..., description="The content of the message.")

class DataLog(BaseModel):
    data_type: str = Field(..., description="The type of data being logged (e.g., 'Biometric', 'Subjective').")
    source: str = Field(..., description="The source of the data (e.g., 'Whoop', 'Rohan's Log').")
    details: dict = Field(..., description="A dictionary containing the structured data (e.g., {'hrv': 45, 'rhr': 58}).")

# This model is no longer used by the orchestrator but can be kept for reference
class AgentOutput(BaseModel):
    """The structured output from each agent's turn, which can be a message, data, or both."""
    outputs: List[Union[ChatMessage, DataLog]]