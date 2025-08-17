"use client";

import { useState } from "react";

export default function ExperimentCard({
  exp,
  onWhy,
}: {
  exp: { id: string; title: string; week?: number; summary?: string; sourceCommunication?: string };
  onWhy?: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{exp.title}</h3>
          <p className="text-xs text-gray-500">{exp.week ? `Week ${exp.week}` : ""}</p>
          <p className="text-sm text-gray-700 mt-2">{exp.summary}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="text-sm px-3 py-1 border rounded-md bg-white hover:bg-gray-50"
            onClick={() => { setOpen(!open); onWhy?.(exp.id); }}
          >
            Why?
          </button>
        </div>
      </div>

      {open && exp.sourceCommunication && (
        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm italic text-gray-800">{exp.sourceCommunication}</p>
        </div>
      )}
    </div>
  );
}
