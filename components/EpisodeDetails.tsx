// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import EventDetails from "./EventDetails";

// export default function EpisodeDetails({ episode, onBack }: any) {
//   const [selectedEvent, setSelectedEvent] = useState<any>(null);

//   if (selectedEvent) {
//     return (
//       <EventDetails event={selectedEvent} onBack={() => setSelectedEvent(null)} />
//     );
//   }

//   return (
//     <div>
//       <Button variant="outline" onClick={onBack}>
//         ⬅ Back
//       </Button>
//       <h2 className="text-2xl font-semibold mt-4">{episode.title}</h2>
//       <p className="text-gray-600 mb-4">{episode.summary}</p>

//       <div className="grid gap-4 md:grid-cols-2">
//         {episode.events.map((event: any) => (
//           <Card
//             key={event.id}
//             onClick={() => setSelectedEvent(event)}
//             className="cursor-pointer hover:shadow-lg"
//           >
//             <CardContent className="p-4">
//               <h3 className="font-semibold">{event.title}</h3>
//               <p className="text-sm text-gray-500">{event.details}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { Episode } from "@/types/journey";

export default function EpisodeDetails({ episode }: { episode: Episode }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">{episode.title}</h2>
      <p className="text-gray-600 mb-4">{episode.summary}</p>

      <h3 className="text-lg font-medium mt-4 mb-2">Friction Points</h3>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        {episode.frictionPoints.map((fp, i) => (
          <li key={i}>{fp}</li>
        ))}
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Outcome</h3>
      <p className="text-gray-700 mb-4">{episode.outcome}</p>

      <h3 className="text-lg font-medium mt-4 mb-2">Persona State</h3>
      <p className="text-sm text-gray-600">
        <strong>Before:</strong> {episode.personaState.before}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>After:</strong> {episode.personaState.after}
      </p>
    </div>
  );
}
