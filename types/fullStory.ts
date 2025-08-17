export interface ChatMessage {
  timestamp?: string;
  speaker?: string;
  message?: string;
}

export interface DataEntry {
  data_type: string;
  source?: string;
  details: Record<string, any>;
}

export type FullStoryItem = ChatMessage | DataEntry;
