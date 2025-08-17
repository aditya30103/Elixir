// "use client";

// import { Button } from "@/components/ui/button";

// export default function EventDetails({ event, onBack }: any) {
//   return (
//     <div>
//       <Button variant="outline" onClick={onBack}>
//         ⬅ Back to Episode
//       </Button>
//       <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
//       <p className="text-gray-600">{event.details}</p>

//       {/* Later: add chats + dataRefs + Recharts */}
//     </div>
//   );
// }


"use client";

import { Event } from "@/types/journey";

export default function EventDetails({ event }: { event: Event }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-600 mb-2">
        Week {event.week}: {event.description}
      </p>

      <h3 className="text-lg font-medium mt-4 mb-1">Source Communication</h3>
      <p className="text-sm italic text-gray-700">{event.sourceCommunication}</p>

      {event.why && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium mb-1">Why was this done?</h3>
          <p className="text-sm italic text-gray-700">{event.why}</p>
        </div>
      )}
    </div>
  );
}
