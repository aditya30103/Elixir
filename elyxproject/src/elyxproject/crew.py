# If you want to run a snippet of code before or after the crew starts,
# you can use the @before_kickoff and @after_kickoff decorators
# https://docs.crewai.com/concepts/crews#example-crew-class-with-decorators

# Learn more about YAML configuration files here:
# Agents: https://docs.crewai.com/concepts/agents#yaml-configuration-recommended
# Tasks: https://docs.crewai.com/concepts/tasks#yaml-configuration-recommended
    
# If you would like to add tools to your agents, you can learn more about it here:
# https://docs.crewai.com/concepts/agents#agent-tools

# To learn more about structured task outputs,
# task dependencies, and task callbacks, check out the documentation:
# https://docs.crewai.com/concepts/tasks#overview-of-a-task

# To learn how to add knowledge sources to your crew, check out the documentation:
# https://docs.crewai.com/concepts/knowledge#what-is-knowledge

# process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/


        
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai.agents.agent_builder.base_agent import BaseAgent
from typing import List
from pydantic import BaseModel, Field


# --- Pydantic Models for Structured Output ---
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
        
@CrewBase
class Elyxproject():
    """Elyxproject crew"""

    agents_config = "config/agents.yaml"
    tasks_config = "config/tasks.yaml"

    @agent
    def narrative_architect(self) -> Agent:
        return Agent(
            config=self.agents_config['narrative_architect'],
            verbose=True
        )
        
    @task
    def planning_task(self) -> Task:
        config=self.tasks_config['planning_task']
        return Task(
            description=config['description'],
            agent=self.narrative_architect(),  
            expected_output=config['expected_output'],
            output_pydantic=StoryPlan,
            output_file="narrative_plan.json"
        )
        
    @crew
    def crew(self) -> Crew:
        """Creates the Elyxproject crew"""

        return Crew(
            agents=self.agents, # Automatically created by the @agent decorator
            tasks=self.tasks, # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
        )
