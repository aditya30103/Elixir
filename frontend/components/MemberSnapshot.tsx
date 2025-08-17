"use client";

import { Member } from "@/types/journey";

export default function MemberSnapshot({ member }: { member: Member | undefined }) {
  const m = member ?? {
    name: "Rohan Patel",
    age: 46,
    location: "Singapore",
    occupation: "FinTech Sales Lead",
    travelFrequency: "1 week out of every 4",
    wearables: ["Garmin", "Whoop"],
    notes: "Focus: Cardiovascular resilience, stress management, peak performance",
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
        {m.name ? m.name.split(" ").map(s => s[0]).slice(0,2).join("") : "RP"}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{m.name}</h1>
        <p className="text-gray-600">{m.age ? `${m.age} yrs · ` : ""}{m.occupation} · {m.location}</p>
        <p className="text-sm text-gray-500 italic">{m.notes}</p>
        <p className="text-xs text-gray-400 mt-1">Wearables: {m.wearables?.join(", ")}</p>
      </div>
    </div>
  );
}
