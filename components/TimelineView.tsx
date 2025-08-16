// // "use client";

// // import { useState } from "react";
// // import { Chrono } from "react-chrono";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import journeyData from "@/data/journey.json";

// // export default function TimelineView() {
// //   const [selectedEpisode, setSelectedEpisode] = useState<any>(null);
// //   const [selectedEvent, setSelectedEvent] = useState<any>(null);

// //   const items = journeyData.map((ep: any) => ({
// //     title: ep.title,
// //     cardTitle: ep.title,
// //     cardSubtitle: `${ep.dateRange}: ${ep.summary}`,
// //   }));

// //   return (
// //     <div>
// //       {!selectedEpisode && (
// //         <Chrono
// //           items={items}
// //           mode="VERTICAL_ALTERNATING"
// //           cardHeight={150}
// //           onItemSelected={(item) => {
// //             const ep = journeyData.find((e: any) => e.title === item.title);
// //             setSelectedEpisode(ep);
// //           }}
// //         />
// //       )}

// //       {selectedEpisode && !selectedEvent && (
// //         <div>
// //           <Button variant="outline" onClick={() => setSelectedEpisode(null)}>⬅ Back</Button>
// //           <h2 className="text-2xl font-semibold mt-4">{selectedEpisode.title}</h2>
// //           <p className="text-gray-600 mb-4">{selectedEpisode.summary}</p>

// //           <h3 className="text-lg font-medium mt-4 mb-2">Friction Points</h3>
// //           <ul className="list-disc ml-6 mb-4 text-gray-700">
// //             {selectedEpisode.frictionPoints.map((fp: string, i: number) => (
// //               <li key={i}>{fp}</li>
// //             ))}
// //           </ul>

// //           <h3 className="text-lg font-medium mt-4 mb-2">Outcome</h3>
// //           <p className="text-gray-700 mb-4">{selectedEpisode.outcome}</p>

// //           <h3 className="text-lg font-medium mt-4 mb-2">Persona State</h3>
// //           <p className="text-sm text-gray-600"><strong>Before:</strong> {selectedEpisode.personaState.before}</p>
// //           <p className="text-sm text-gray-600 mb-4"><strong>After:</strong> {selectedEpisode.personaState.after}</p>

// //           <div className="grid gap-4 md:grid-cols-2">
// //             {selectedEpisode.granularEvents.map((event: any) => (
// //               <Card key={event.eventId} onClick={() => setSelectedEvent(event)} className="cursor-pointer hover:shadow-lg">
// //                 <CardContent className="p-4">
// //                   <h3 className="font-semibold">{event.title}</h3>
// //                   <p className="text-sm text-gray-500">Week {event.week}: {event.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {selectedEvent && (
// //         <div>
// //           <Button variant="outline" onClick={() => setSelectedEvent(null)}>⬅ Back to Episode</Button>
// //           <h2 className="text-xl font-semibold mt-4">{selectedEvent.title}</h2>
// //           <p className="text-gray-600 mb-2">Week {selectedEvent.week}: {selectedEvent.description}</p>
// //           <h3 className="font-medium mt-4 mb-1">Source Communication</h3>
// //           <p className="text-sm italic text-gray-700">{selectedEvent.sourceCommunication}</p>
// //           {selectedEvent.dataRefs && (
// //             <div className="mt-4">
// //               <h3 className="font-medium mb-1">Linked Data</h3>
// //               <pre className="bg-gray-100 p-2 rounded text-sm">
// //                 {JSON.stringify(selectedEvent.dataRefs, null, 2)}
// //               </pre>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import { Chrono } from "react-chrono";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import journeyData from "@/data/journey.json";

// export default function TimelineView() {
//   const [selectedEpisode, setSelectedEpisode] = useState<any>(null);
//   const [selectedEvent, setSelectedEvent] = useState<any>(null);

//   // prepare timeline items
//   const items = journeyData.map((ep: any) => ({
//     title: ep.title,
//     cardTitle: ep.title,
//     cardSubtitle: ep.dateRange,
//     cardDetailedText: ep.summary,
//   }));

//   // 🔹 Default view → Timeline of episodes
//   if (!selectedEpisode && !selectedEvent) {
//     return (
//       <div>
//         <Chrono
//           items={items}
//           mode="VERTICAL_ALTERNATING"
//           cardHeight={150}
//           // 🚫 disable auto-select behavior
//           onItemSelected={() => {}}
//         />
//         <div className="grid gap-4 mt-6 md:grid-cols-2">
//           {journeyData.map((ep: any) => (
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

//   // 🔹 Episode detail view
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
//           {selectedEpisode.frictionPoints.map((fp: string, i: number) => (
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
//           {selectedEpisode.granularEvents.map((event: any) => (
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
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // 🔹 Event detail view
//   if (selectedEvent) {
//     return (
//       <div>
//         <Button variant="outline" onClick={() => setSelectedEvent(null)}>
//           ⬅ Back to Episode
//         </Button>
//         <h2 className="text-xl font-semibold mt-4">{selectedEvent.title}</h2>
//         <p className="text-gray-600 mb-2">
//           Week {selectedEvent.week}: {selectedEvent.description}
//         </p>
//         <h3 className="font-medium mt-4 mb-1">Source Communication</h3>
//         <p className="text-sm italic text-gray-700">
//           {selectedEvent.sourceCommunication}
//         </p>
//         {selectedEvent.dataRefs && (
//           <div className="mt-4">
//             <h3 className="font-medium mb-1">Linked Data</h3>
//             <pre className="bg-gray-100 p-2 rounded text-sm">
//               {JSON.stringify(selectedEvent.dataRefs, null, 2)}
//             </pre>
//           </div>
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

export default function TimelineView() {
  const [selectedEpisode, setSelectedEpisode] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // ✅ use journeyData.episodes (not journeyData directly)
  const items = journeyData.episodes.map((ep: any) => ({
    title: ep.title,
    cardTitle: ep.title,
    cardSubtitle: ep.dateRange,
    cardDetailedText: ep.summary,
  }));

  // 🔹 Default view → Timeline + episode cards
  if (!selectedEpisode && !selectedEvent) {
    return (
      <div>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          cardHeight={150}
          onItemSelected={() => {}} // disable auto-open
        />
        <div className="grid gap-4 mt-6 md:grid-cols-2">
          {journeyData.episodes.map((ep: any) => (
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

  // 🔹 Episode detail view
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
          {selectedEpisode.frictionPoints.map((fp: string, i: number) => (
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
          {selectedEpisode.granularEvents.map((event: any) => (
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // 🔹 Event detail view
  if (selectedEvent) {
    return (
      <div>
        <Button variant="outline" onClick={() => setSelectedEvent(null)}>
          ⬅ Back to Episode
        </Button>
        <h2 className="text-xl font-semibold mt-4">{selectedEvent.title}</h2>
        <p className="text-gray-600 mb-2">
          Week {selectedEvent.week}: {selectedEvent.description}
        </p>
        <h3 className="font-medium mt-4 mb-1">Source Communication</h3>
        <p className="text-sm italic text-gray-700">
          {selectedEvent.sourceCommunication}
        </p>
        {selectedEvent.dataRefs && (
          <div className="mt-4">
            <h3 className="font-medium mb-1">Linked Data</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {JSON.stringify(selectedEvent.dataRefs, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }

  return null;
}

