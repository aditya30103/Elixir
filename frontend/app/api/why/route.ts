import { NextRequest, NextResponse } from "next/server";
import journeyData from "@/data/journey.json";

type Event = { eventId: string; title?: string; sourceCommunication?: string; };
type Episode = { title?: string; granularEvents: Event[]; };
type JourneyData = { episodes: Episode[] };

const data: JourneyData = journeyData as unknown as JourneyData;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // --- RAG Chatbot: forward question to the Python backend ---
    if (body.question) {
      const backendUrl = process.env.BACKEND_URL
        ? `${process.env.BACKEND_URL}/ask`
        : 'http://127.0.0.1:8000/ask';

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: body.question }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Backend request failed (${response.status}): ${errorText}`);
      }

      const result = await response.json();
      return NextResponse.json(result);
    }

    // --- Journey event lookup by eventId ---
    if (body.eventId) {
      let foundEvent: Event | null = null;
      let parentEpisode: Episode | null = null;

      for (const ep of data.episodes) {
        const match = ep.granularEvents.find((ev) => ev.eventId === body.eventId);
        if (match) {
          foundEvent = match;
          parentEpisode = ep;
          break;
        }
      }

      if (!foundEvent) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
      }

      return NextResponse.json({
        eventId: body.eventId,
        why: foundEvent.sourceCommunication,
        source: {
          episodeTitle: parentEpisode?.title,
          eventTitle: foundEvent.title,
        },
      });
    }

    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  } catch (err) {
    console.error("[/api/why] Error:", err);
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
