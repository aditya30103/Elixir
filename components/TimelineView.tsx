// // "use client";

// // import { useState } from "react";
// // import { Chrono } from "react-chrono";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import journeyData from "@/data/journey.json";

// // export default function TimelineView() {
// //   const [selectedEpisode, setSelectedEpisode] = useState<any>(null);
// //   const [selectedEvent, setSelectedEvent] = useState<any>(null);
// //   const [showWhy, setShowWhy] = useState(false);

// //   // ✅ Episodes array for Chrono
// //   const items = journeyData.episodes.map((ep: any) => ({
// //     title: ep.title,
// //     cardTitle: ep.title,
// //     cardSubtitle: ep.dateRange,
// //     cardDetailedText: ep.summary,
// //   }));

// //   // 🔹 Default view (Timeline + episode cards)
// //   if (!selectedEpisode && !selectedEvent) {
// //     return (
// //       <div>
// //         <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight={150} />
// //         <div className="grid gap-4 mt-6 md:grid-cols-2">
// //           {journeyData.episodes.map((ep: any) => (
// //             <Card
// //               key={ep.episodeId}
// //               onClick={() => setSelectedEpisode(ep)}
// //               className="cursor-pointer hover:shadow-lg"
// //             >
// //               <CardContent className="p-4">
// //                 <h3 className="font-semibold">{ep.title}</h3>
// //                 <p className="text-sm text-gray-500">{ep.summary}</p>
// //                 <p className="text-xs text-gray-400">{ep.dateRange}</p>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }

// //   // 🔹 Episode detail view
// //   if (selectedEpisode && !selectedEvent) {
// //     return (
// //       <div>
// //         <Button variant="outline" onClick={() => setSelectedEpisode(null)}>
// //           ⬅ Back to Timeline
// //         </Button>
// //         <h2 className="text-2xl font-semibold mt-4">{selectedEpisode.title}</h2>
// //         <p className="text-gray-600 mb-4">{selectedEpisode.summary}</p>

// //         <h3 className="text-lg font-medium mt-4 mb-2">Friction Points</h3>
// //         <ul className="list-disc ml-6 mb-4 text-gray-700">
// //           {selectedEpisode.frictionPoints.map((fp: string, i: number) => (
// //             <li key={i}>{fp}</li>
// //           ))}
// //         </ul>

// //         <h3 className="text-lg font-medium mt-4 mb-2">Outcome</h3>
// //         <p className="text-gray-700 mb-4">{selectedEpisode.outcome}</p>

// //         <h3 className="text-lg font-medium mt-4 mb-2">Persona State</h3>
// //         <p className="text-sm text-gray-600">
// //           <strong>Before:</strong> {selectedEpisode.personaState.before}
// //         </p>
// //         <p className="text-sm text-gray-600 mb-4">
// //           <strong>After:</strong> {selectedEpisode.personaState.after}
// //         </p>

// //         <div className="grid gap-4 md:grid-cols-2">
// //           {selectedEpisode.granularEvents.map((event: any) => (
// //             <Card
// //               key={event.eventId}
// //               onClick={() => setSelectedEvent(event)}
// //               className="cursor-pointer hover:shadow-lg"
// //             >
// //               <CardContent className="p-4">
// //                 <h3 className="font-semibold">{event.title}</h3>
// //                 <p className="text-sm text-gray-500">
// //                   Week {event.week}: {event.description}
// //                 </p>
// //                 <Button
// //                   size="sm"
// //                   className="mt-2"
// //                   onClick={async (e) => {
// //                     e.stopPropagation(); // don’t trigger card click
// //                     setSelectedEvent(event);
// //                     setShowWhy(true);

// //                     // 🔹 Call API to get "why"
// //                     const res = await fetch("/api/why", {
// //                       method: "POST",
// //                       headers: { "Content-Type": "application/json" },
// //                       body: JSON.stringify({ eventId: event.eventId }),
// //                     });
// //                     const data = await res.json();

// //                     // Store the answer inside selectedEvent
// //                     setSelectedEvent({
// //                       ...event,
// //                       why: data.why,
// //                     });
// //                   }}
// //                 >
// //                   Why?
// //                 </Button>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }

// //   // 🔹 Event detail view
// //   if (selectedEvent) {
// //     return (
// //       <div>
// //         <Button
// //           variant="outline"
// //           onClick={() => {
// //             setShowWhy(false);
// //             setSelectedEvent(null);
// //           }}
// //         >
// //           ⬅ Back to Episode
// //         </Button>
// //         <h2 className="text-xl font-semibold mt-4">{selectedEvent.title}</h2>
// //         <p className="text-gray-600 mb-2">
// //           Week {selectedEvent.week}: {selectedEvent.description}
// //         </p>

// //         {showWhy ? (
// //           <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
// //             <h3 className="font-medium mb-1">Why was this done?</h3>
// //             <p className="text-sm italic text-gray-700">
// //               {selectedEvent.why || selectedEvent.sourceCommunication}
// //             </p>
// //           </div>
// //         ) : (
// //           <>
// //             <h3 className="font-medium mt-4 mb-1">Source Communication</h3>
// //             <p className="text-sm italic text-gray-700">
// //               {selectedEvent.sourceCommunication}
// //             </p>
// //           </>
// //         )}
// //       </div>
// //     );
// //   }

// //   return null;
// // }



// "use client";

// import { useState } from "react";
// import { Chrono } from "react-chrono";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import journeyData from "@/data/journey.json";
// import { Episode, Event, JourneyData } from "@/types/journey";

// const data: JourneyData = journeyData as JourneyData;

// export default function TimelineView() {
//   const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//   const [showWhy, setShowWhy] = useState(false);

//   // Episodes array for Chrono
//   const items = data.episodes.map((ep) => ({
//     title: ep.title,
//     cardTitle: ep.title,
//     cardSubtitle: ep.dateRange,
//     cardDetailedText: ep.summary,
//   }));

//   // Default view (timeline + episode cards)
//   if (!selectedEpisode && !selectedEvent) {
//     return (
//       <div>
//         <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight={150} />
//         <div className="grid gap-4 mt-6 md:grid-cols-2">
//           {data.episodes.map((ep) => (
//             <Card
//               key={ep.episodeId}
//               onClick={() => setSelectedEpisode(ep)}
//               className="cursor-pointer hover:shadow-lg"
//             >
//               <CardContent className="p-4">
//                 <h3 className="font-semibold">{ep.title}</h3>
//                 <p className="text-sm text-gray-500">{ep.summary}</p>
//                 <p className="text-xs text-gray-400">{ep.dateRange}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Episode detail view
//   if (selectedEpisode && !selectedEvent) {
//     return (
//       <div>
//         <Button variant="outline" onClick={() => setSelectedEpisode(null)}>
//           ⬅ Back to Timeline
//         </Button>
//         <h2 className="text-2xl font-semibold mt-4">{selectedEpisode.title}</h2>
//         <p className="text-gray-600 mb-4">{selectedEpisode.summary}</p>

//         <h3 className="text-lg font-medium mt-4 mb-2">Friction Points</h3>
//         <ul className="list-disc ml-6 mb-4 text-gray-700">
//           {selectedEpisode.frictionPoints.map((fp, i) => (
//             <li key={i}>{fp}</li>
//           ))}
//         </ul>

//         <h3 className="text-lg font-medium mt-4 mb-2">Outcome</h3>
//         <p className="text-gray-700 mb-4">{selectedEpisode.outcome}</p>

//         <h3 className="text-lg font-medium mt-4 mb-2">Persona State</h3>
//         <p className="text-sm text-gray-600">
//           <strong>Before:</strong> {selectedEpisode.personaState.before}
//         </p>
//         <p className="text-sm text-gray-600 mb-4">
//           <strong>After:</strong> {selectedEpisode.personaState.after}
//         </p>

//         <div className="grid gap-4 md:grid-cols-2">
//           {selectedEpisode.granularEvents.map((event) => (
//             <Card
//               key={event.eventId}
//               onClick={() => setSelectedEvent(event)}
//               className="cursor-pointer hover:shadow-lg"
//             >
//               <CardContent className="p-4">
//                 <h3 className="font-semibold">{event.title}</h3>
//                 <p className="text-sm text-gray-500">
//                   Week {event.week}: {event.description}
//                 </p>
//                 <Button
//                   size="sm"
//                   className="mt-2"
//                   onClick={async (e) => {
//                     e.stopPropagation();
//                     setSelectedEvent(event);
//                     setShowWhy(true);

//                     const res = await fetch("/api/why", {
//                       method: "POST",
//                       headers: { "Content-Type": "application/json" },
//                       body: JSON.stringify({ eventId: event.eventId }),
//                     });
//                     const data = await res.json();

//                     setSelectedEvent({
//                       ...event,
//                       why: data.why,
//                     });
//                   }}
//                 >
//                   Why?
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Event detail view
//   if (selectedEvent) {
//     return (
//       <div>
//         <Button
//           variant="outline"
//           onClick={() => {
//             setShowWhy(false);
//             setSelectedEvent(null);
//           }}
//         >
//           ⬅ Back to Episode
//         </Button>
//         <h2 className="text-xl font-semibold mt-4">{selectedEvent.title}</h2>
//         <p className="text-gray-600 mb-2">
//           Week {selectedEvent.week}: {selectedEvent.description}
//         </p>

//         {showWhy ? (
//           <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//             <h3 className="font-medium mb-1">Why was this done?</h3>
//             <p className="text-sm italic text-gray-700">
//               {selectedEvent.why || selectedEvent.sourceCommunication}
//             </p>
//           </div>
//         ) : (
//           <>
//             <h3 className="font-medium mt-4 mb-1">Source Communication</h3>
//             <p className="text-sm italic text-gray-700">
//               {selectedEvent.sourceCommunication}
//             </p>
//           </>
//         )}
//       </div>
//     );
//   }

//   return null;
// }


"use client";

import { useState } from "react";
import { Chrono } from "react-chrono";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import journeyData from "@/data/journey.json";
import { Episode, Event, JourneyData } from "@/types/journey";

// ✅ Cast imported JSON to JourneyData
const data: JourneyData = journeyData as JourneyData;

export default function TimelineView() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showWhy, setShowWhy] = useState(false);

  // Episodes array for Chrono
  const items = data.episodes.map((ep) => ({
    title: ep.title,
    cardTitle: ep.title,
    cardSubtitle: ep.dateRange,
    cardDetailedText: ep.summary,
  }));

  // Default view
  if (!selectedEpisode && !selectedEvent) {
    return (
      <div>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight={150} />
        <div className="grid gap-4 mt-6 md:grid-cols-2">
          {data.episodes.map((ep) => (
            <Card
              key={ep.episodeId}
              onClick={() => setSelectedEpisode(ep)}
              className="cursor-pointer hover:shadow-lg"
            >
              <CardContent className="p-4">
                <h3 className="font-semibold">{ep.title}</h3>
                <p className="text-sm text-gray-500">{ep.summary}</p>
                <p className="text-xs text-gray-400">{ep.dateRange}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Episode detail view
  if (selectedEpisode && !selectedEvent) {
    return (
      <div>
        <Button variant="outline" onClick={() => setSelectedEpisode(null)}>
          ⬅ Back to Timeline
        </Button>
        <h2 className="text-2xl font-semibold mt-4">{selectedEpisode.title}</h2>
        <p className="text-gray-600 mb-4">{selectedEpisode.summary}</p>

        <h3 className="text-lg font-medium mt-4 mb-2">Friction Points</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          {selectedEpisode.frictionPoints.map((fp, i) => (
            <li key={i}>{fp}</li>
          ))}
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Outcome</h3>
        <p className="text-gray-700 mb-4">{selectedEpisode.outcome}</p>

        <h3 className="text-lg font-medium mt-4 mb-2">Persona State</h3>
        <p className="text-sm text-gray-600">
          <strong>Before:</strong> {selectedEpisode.personaState.before}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>After:</strong> {selectedEpisode.personaState.after}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {selectedEpisode.granularEvents.map((event) => (
            <Card
              key={event.eventId}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer hover:shadow-lg"
            >
              <CardContent className="p-4">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">
                  Week {event.week}: {event.description}
                </p>
                <Button
                  size="sm"
                  className="mt-2"
                  onClick={async (e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                    setShowWhy(true);

                    const res = await fetch("/api/why", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ eventId: event.eventId }),
                    });
                    const result = await res.json();

                    setSelectedEvent({
                      ...event,
                      why: result.why,
                    });
                  }}
                >
                  Why?
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Event detail view
  if (selectedEvent) {
    return (
      <div>
        <Button
          variant="outline"
          onClick={() => {
            setShowWhy(false);
            setSelectedEvent(null);
          }}
        >
          ⬅ Back to Episode
        </Button>
        <h2 className="text-xl font-semibold mt-4">{selectedEvent.title}</h2>
        <p className="text-gray-600 mb-2">
          Week {selectedEvent.week}: {selectedEvent.description}
        </p>

        {showWhy ? (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium mb-1">Why was this done?</h3>
            <p className="text-sm italic text-gray-700">
              {selectedEvent.why || selectedEvent.sourceCommunication}
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-medium mt-4 mb-1">Source Communication</h3>
            <p className="text-sm italic text-gray-700">
              {selectedEvent.sourceCommunication}
            </p>
          </>
        )}
      </div>
    );
  }

  return null;
}
