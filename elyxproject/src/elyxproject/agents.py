from crewai import Agent
from langchain_community.chat_models.litellm import ChatLiteLLM
import yaml

with open('src/elyxproject/config/agents.yaml', 'r') as f:
    agents_config = yaml.safe_load(f)

llm = ChatLiteLLM(model="gemini/gemini-2.5-flash")

class NarrativeAgents():
    def strategic_narrative_architect(self):
        return Agent(config=agents_config['strategic_narrative_architect'], llm=llm, verbose=True)

    def routing_agent(self):
        return Agent(config=agents_config['routing_agent'], llm=llm)

    def rohan_patel_agent(self):
        return Agent(config=agents_config['rohan_patel_agent'], llm=llm, verbose=False)

    def sarah_tan_agent(self):
        return Agent(config=agents_config['sarah_tan_agent'], llm=llm, verbose=False)

    def ruby_concierge_agent(self):
        return Agent(config=agents_config['ruby_concierge_agent'], llm=llm, verbose=False)
    
    def dr_warren_agent(self):
        return Agent(config=agents_config['dr_warren_agent'], llm=llm, verbose=False)

    def advik_scientist_agent(self):
        return Agent(config=agents_config['advik_scientist_agent'], llm=llm, verbose=False)

    def carla_nutritionist_agent(self):
        return Agent(config=agents_config['carla_nutritionist_agent'], llm=llm, verbose=False)

    def rachel_pt_agent(self):
        return Agent(config=agents_config['rachel_pt_agent'], llm=llm, verbose=False)

    def neel_lead_agent(self):
        return Agent(config=agents_config['neel_lead_agent'], llm=llm, verbose=False)
    
    def summary_agent(self):
        return Agent(config=agents_config['summary_agent'], llm=llm)