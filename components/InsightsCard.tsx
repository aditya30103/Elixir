"use client";

export default function InsightsCard({ insights }: { insights: string[] }) {
  if (!insights || insights.length === 0) return null;
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="font-semibold mb-2">Insights</h3>
      <ul className="list-disc ml-6 text-sm text-gray-700">
        {insights.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
