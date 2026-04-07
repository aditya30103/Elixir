"use client";

import storyData from "@/data/fullStory.json";
import { Card, CardContent } from "@/components/ui/card";

interface ChatMessage {
  timestamp: string;
  speaker: string;
  message: string;
}

interface DataEntry {
  data_type: string;
  source: string;
  details: Record<string, unknown>;
}

type StoryItem = ChatMessage | DataEntry;

function renderDetails(details: Record<string, unknown>) {
  return (
    <div className="mt-2 text-sm">
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="flex justify-between border-b last:border-none py-1">
          <span className="font-medium capitalize">{key.replace(/_/g, " ")}</span>
          <span className="text-gray-700">
            {typeof value === "object" ? JSON.stringify(value) : String(value)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function FullStoryPage() {
  const items: StoryItem[] = storyData as StoryItem[];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
      <div className="space-y-6">
        {items.map((item, idx) => {
          if ("message" in item) {
            const isUser = item.speaker.includes("Rohan") || item.speaker.includes("Sarah");
            return (
              <div key={idx} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-lg p-4 rounded-2xl shadow-md text-left ${
                    isUser ? "bg-green-100 rounded-br-none" : "bg-blue-100 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">{item.speaker}: </span>
                    {item.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
                </div>
              </div>
            );
          } else {
            return (
              <Card key={idx} className="max-w-lg mx-auto bg-white border shadow-lg">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold capitalize">
                      {item.data_type.replace(/_/g, " ")}
                    </h3>
                    <span className="text-xs text-gray-500">Source: {item.source}</span>
                  </div>
                  {renderDetails(item.details)}
                </CardContent>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
