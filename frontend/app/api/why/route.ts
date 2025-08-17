// import { NextResponse } from "next/server";
// import journeyData from "@/data/journey.json";
// import { JourneyData, Episode, Event } from "@/types/journey";
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const { question } = await req.json();
//     console.log("✅ [Next.js API] Received question:", question);

//     const backendUrl = 'http://127.0.0.1:8000/ask';
//     console.log("✅ [Next.js API] Forwarding to backend:", backendUrl);

//     const response = await fetch(backendUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question }),
//     });

//     console.log("✅ [Next.js API] Backend response status:", response.status);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ [Next.js API] Backend error:", errorText);
//       throw new Error(`Backend request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("✅ [Next.js API] Received data from backend:", data);
//     return NextResponse.json(data);

//   } catch (error) {
//     console.error("❌ [Next.js API] Error in /api/why:", error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

// // Cast JSON as JourneyData
// const data: JourneyData = journeyData as JourneyData;

// export async function POST(req: Request) {
//   try {
//     const { eventId } = await req.json();

//     let foundEvent: Event | null = null;
//     let parentEpisode: Episode | null = null;

//     // Search for event inside episodes
//     for (const ep of data.episodes) {
//       const match = ep.granularEvents.find((ev) => ev.eventId === eventId);
//       if (match) {
//         foundEvent = match;
//         parentEpisode = ep;
//         break;
//       }
//     }

//     if (!foundEvent) {
//       return NextResponse.json(
//         { error: "Event not found" },
//         { status: 404 }
//       );
//     }

//     // For now: return sourceCommunication as the "why"
//     return NextResponse.json({
//       eventId,
//       why: foundEvent.sourceCommunication,
//       source: {
//         episodeTitle: parentEpisode?.title,
//         eventTitle: foundEvent.title,
//       },
//     });
//   } catch (err) {
//     if (err instanceof Error) {
//       return NextResponse.json({ error: err.message }, { status: 500 });
//     }
//     return NextResponse.json({ error: "Unknown error" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import journeyData from "@/data/journey.json";
import { JourneyData, Episode, Event } from "@/types/journey";

// Cast JSON as JourneyData
const data: JourneyData = journeyData as JourneyData;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // --- Logic for the RAG Chatbot ---
    if (body.question) {
      console.log("✅ [Next.js API] Received question:", body.question);

      const backendUrl = 'http://127.0.0.1:8000/ask';
      console.log("✅ [Next.js API] Forwarding to backend:", backendUrl);

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: body.question }),
      });

      console.log("✅ [Next.js API] Backend response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ [Next.js API] Backend error:", errorText);
        throw new Error(`Backend request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ [Next.js API] Received data from backend:", data);
      return NextResponse.json(data);
    }

    // --- Original Logic for finding an Event ---
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

    // If the request body has neither 'question' nor 'eventId'
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  } catch (err) {
    console.error("❌ [Next.js API] Error in /api/why:", err);
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}