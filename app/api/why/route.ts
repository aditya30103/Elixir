import { NextResponse } from "next/server";
import journeyData from "@/data/journey.json";

// This API will return the reasoning ("why") for a given eventId
export async function POST(req: Request) {
  try {
    const { eventId } = await req.json();

    // Search all episodes & events for this eventId
    let foundEvent = null;
    for (const ep of journeyData.episodes) {
      const match = ep.granularEvents.find((ev: any) => ev.eventId === eventId);
      if (match) {
        foundEvent = match;
        break;
      }
    }

    if (!foundEvent) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    // For now: return the sourceCommunication as the "why"
    // Later: replace this with a vector DB lookup + LLM call
    return NextResponse.json({
      eventId,
      why: foundEvent.sourceCommunication,
      source: {
        episodeTitle: journeyData.episodes.find((ep: any) =>
          ep.granularEvents.some((ev: any) => ev.eventId === eventId)
        )?.title,
        eventTitle: foundEvent.title,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
