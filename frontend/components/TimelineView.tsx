"use client";

import { useState } from "react";
// @ts-expect-error - react-chrono has no type declarations
import { Chrono } from "react-chrono";
import journeyData from "@/data/journey.json";
import EpisodeDetails from "@/components/EpisodeDetails";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Episode } from "@/types/journey";

const data = journeyData as unknown as { episodes: Episode[] };

export default function TimelineView() {
  const [selected, setSelected] = useState<Episode | null>(null);

  const items = data.episodes.map((ep) => ({
    title: ep.title,
    cardTitle: ep.title,
    cardSubtitle: ep.dateRange,
    cardDetailedText: ep.summary?.slice(0, 160) || "",
  }));

  if (!selected) {
    return (
      <div>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight={140} />
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {data.episodes.map((ep) => (
            <Card key={ep.episodeId} className="cursor-pointer" onClick={() => setSelected(ep)}>
              <CardContent>
                <h3 className="font-semibold">{ep.title}</h3>
                <p className="text-sm text-gray-600">{ep.summary?.slice(0, 220)}</p>
                <p className="text-xs text-gray-400 mt-2">{ep.dateRange}</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" onClick={(e) => { e.stopPropagation(); setSelected(ep); }}>Open</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Button variant="outline" onClick={() => setSelected(null)}>⬅ Back to Timeline</Button>
      <div className="mt-4">
        <EpisodeDetails episode={selected} />
      </div>
    </div>
  );
}
