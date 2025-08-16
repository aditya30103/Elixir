"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EventDetails from "./EventDetails";

export default function EpisodeDetails({ episode, onBack }: any) {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  if (selectedEvent) {
    return (
      <EventDetails event={selectedEvent} onBack={() => setSelectedEvent(null)} />
    );
  }

  return (
    <div>
      <Button variant="outline" onClick={onBack}>
        ⬅ Back
      </Button>
      <h2 className="text-2xl font-semibold mt-4">{episode.title}</h2>
      <p className="text-gray-600 mb-4">{episode.summary}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {episode.events.map((event: any) => (
          <Card
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer hover:shadow-lg"
          >
            <CardContent className="p-4">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
