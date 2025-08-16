export interface Event {
  eventId: string;
  week: number;
  title: string;
  description: string;
  sourceCommunication: string;
  why?: string; // optional, populated by API
}

export interface PersonaState {
  before: string;
  after: string;
}

export interface Episode {
  episodeId: string;
  title: string;
  dateRange: string;
  summary: string;
  frictionPoints: string[];
  outcome: string;
  personaState: PersonaState;
  granularEvents: Event[];
}

export interface JourneyData {
  episodes: Episode[];
}
