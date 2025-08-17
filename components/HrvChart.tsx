// components/HrvChart.tsx
"use client";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function HrvChart({ series }: { series: { date: string; value: number }[] }) {
  if (!series || !series.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="text-sm font-medium text-slate-800 mb-2">HRV Trend</div>
        <div className="text-sm text-slate-400">No HRV time-series available.</div>
      </div>
    );
  }

  // ensure sorted by date
  const sorted = [...series].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="text-sm font-medium text-slate-800 mb-2">HRV Trend</div>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <LineChart data={sorted}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(d) =>
                new Date(d).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis domain={[0, "dataMax + 10"]} />
            <Tooltip labelFormatter={(d) => new Date(d).toLocaleString()} formatter={(v) => `${v} ms`} />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
