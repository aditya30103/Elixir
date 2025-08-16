import { NextResponse } from "next/server";
import journeyData from "@/data/journey.json";
import { JourneyData, Episode, Event } from "@/types/journey";

// Cast JSON as JourneyData
const data: JourneyData = journeyData as JourneyData;

export async function POST(req: Request) {
  try {
    const { eventId } = await req.json();

    let foundEvent: Event | null = null;
    let parentEpisode: Episode | null = null;

    // Search for event inside episodes
    for (const ep of data.episodes) {
      const match = ep.granularEvents.find((ev) => ev.eventId === eventId);
      if (match) {
        foundEvent = match;
        parentEpisode = ep;
        break;
      }
    }

    if (!foundEvent) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    // For now: return sourceCommunication as the "why"
    return NextResponse.json({
      eventId,
      why: foundEvent.sourceCommunication,
      source: {
        episodeTitle: parentEpisode?.title,
        eventTitle: foundEvent.title,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
