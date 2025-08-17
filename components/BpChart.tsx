// components/BpChart.tsx
"use client";
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

export default function BpChart({ readings }: { readings: { label: string; systolic: number; diastolic: number }[] }) {
  if (!readings || !readings.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="text-sm font-medium text-slate-800 mb-2">Blood Pressure</div>
        <div className="text-sm text-slate-400">No BP readings available.</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="text-sm font-medium text-slate-800 mb-2">Blood Pressure Readings</div>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={readings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip formatter={(v) => `${v}`} />
            <Legend />
            <Bar dataKey="diastolic" name="diastolic" stackId="a" fill="#FBBF24" />
            <Bar dataKey="systolic" name="systolic" stackId="a" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
