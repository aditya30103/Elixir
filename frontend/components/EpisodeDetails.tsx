// // "use client";

// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { useState } from "react";
// // import EventDetails from "./EventDetails";

// // export default function EpisodeDetails({ episode, onBack }: any) {
// //   const [selectedEvent, setSelectedEvent] = useState<any>(null);

// //   if (selectedEvent) {
// //     return (
// //       <EventDetails event={selectedEvent} onBack={() => setSelectedEvent(null)} />
// //     );
// //   }

// //   return (
// //     <div>
// //       <Button variant="outline" onClick={onBack}>
// //         ⬅ Back
// //       </Button>
// //       <h2 className="text-2xl font-semibold mt-4">{episode.title}</h2>
// //       <p className="text-gray-600 mb-4">{episode.summary}</p>

// //       <div className="grid gap-4 md:grid-cols-2">
// //         {episode.events.map((event: any) => (
// //           <Card
// //             key={event.id}
// //             onClick={() => setSelectedEvent(event)}
// //             className="cursor-pointer hover:shadow-lg"
// //           >
// //             <CardContent className="p-4">
// //               <h3 className="font-semibold">{event.title}</h3>
// //               <p className="text-sm text-gray-500">{event.details}</p>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import { Episode } from "@/types/journey";

// export default function EpisodeDetails({ episode }: { episode: Episode }) {
//   return (
//     <div className="mt-6">
//       <h2 className="text-2xl font-semibold">{episode.title}</h2>
//       <p className="text-gray-600 mb-4">{episode.summary}</p>

//       <h3 className="text-lg font-medium mt-4 mb-2">Friction Points</h3>
//       <ul className="list-disc ml-6 mb-4 text-gray-700">
//         {episode.frictionPoints.map((fp, i) => (
//           <li key={i}>{fp}</li>
//         ))}
//       </ul>

//       <h3 className="text-lg font-medium mt-4 mb-2">Outcome</h3>
//       <p className="text-gray-700 mb-4">{episode.outcome}</p>

//       <h3 className="text-lg font-medium mt-4 mb-2">Persona State</h3>
//       <p className="text-sm text-gray-600">
//         <strong>Before:</strong> {episode.personaState.before}
//       </p>
//       <p className="text-sm text-gray-600 mb-4">
//         <strong>After:</strong> {episode.personaState.after}
//       </p>
//     </div>
//   );
// }



"use client";

import fullStory from "@/data/fullStory.json";
import { Episode } from "@/types/journey";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

export default function EpisodeDetails({ episode }: { episode: Episode }) {
  // find related logs by week numbers present in granularEvents (simple heuristic)
  const weeks = (episode.granularEvents || []).map((g) => g.week).filter(Boolean) as number[];

  // fallback: also search for episode title words in chat messages
  const related = (fullStory as any[]).filter((it) => {
    if (it.data_type) {
      // structured data: check if details.week_ending or details.week_number match
      const wk = it.details?.week_number || it.details?.week_ending;
      if (wk && weeks.includes(Number(wk))) return true;
    }
    // plain chat messages: check timestamp or message text for episode title keywords
    if (it.message && typeof it.message === "string") {
      const titleTokens = (episode.title || "").toLowerCase().split(" ").slice(0, 4);
      return titleTokens.some((t) => it.message.toLowerCase().includes(t));
    }
    return false;
  });

  const metrics = episode.metrics || {};

  return (
    <div className="space-y-4">
      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">{episode.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{episode.dateRange}</p>
          <div className="prose max-w-none">
            <p>{episode.summary}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(metrics).length === 0 && <div className="col-span-2 text-sm text-gray-500">No structured metrics.</div>}
              {Object.entries(metrics).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b py-1">
                  <div className="text-gray-600 capitalize">{k.replace(/_/g, " ")}</div>
                  <div className="font-medium">{String(v)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">Persona State</h3>
            <p className="text-sm"><strong>Before:</strong> {episode.personaState?.before}</p>
            <p className="text-sm mt-2"><strong>After:</strong> {episode.personaState?.after}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent>
          <h3 className="font-semibold mb-2">Granular Events</h3>
          <div className="space-y-2">
            {(episode.granularEvents || []).map((ev) => (
              <div key={(ev as any).eventId} className="p-3 border rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{(ev as any).title}</div>
                    <div className="text-xs text-gray-500">Week {(ev as any).week || "?"}</div>
                    <div className="text-sm text-gray-700 mt-1">{(ev as any).description || ""}</div>
                  </div>
                </div>
              </div>
            ))}
            {(!episode.granularEvents || episode.granularEvents.length === 0) && (
              <div className="text-sm text-gray-500">No granular events listed for this episode.</div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold mb-2">Related Logs & Messages</h3>
          {related.length === 0 ? (
            <div className="text-sm text-gray-500">No related logs found in full story for this episode (try adding week numbers to logs).</div>
          ) : (
            related.map((r, i) => (
              <div key={i} className="border rounded p-3 mb-2">
                {r.timestamp && <div className="text-xs text-gray-400">{r.timestamp}</div>}
                {r.speaker && <div className="text-sm font-medium">{r.speaker}</div>}
                {r.message && <div className="text-sm mt-1">{r.message}</div>}
                {r.data_type && (
                  <pre className="text-xs mt-2 bg-gray-50 p-2 rounded">{JSON.stringify(r.details, null, 2)}</pre>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
