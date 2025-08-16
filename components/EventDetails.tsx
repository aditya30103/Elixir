"use client";

import { Button } from "@/components/ui/button";

export default function EventDetails({ event, onBack }: any) {
  return (
    <div>
      <Button variant="outline" onClick={onBack}>
        ⬅ Back to Episode
      </Button>
      <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
      <p className="text-gray-600">{event.details}</p>

      {/* Later: add chats + dataRefs + Recharts */}
    </div>
  );
}
