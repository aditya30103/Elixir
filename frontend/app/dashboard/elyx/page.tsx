"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function ElyxDashboard() {
  // --- Hardcoded metrics for now ---
  const summary = {
    avgResponseTime: "2.5 min",
    loggingHours: "34 hrs/week",
    taskCompletion: "88%",
    resolutionRate: "93%",
  };

  // Response time trend (weeks)
  const responseTrend = [
    { week: "W1", time: 3.2 },
    { week: "W2", time: 2.8 },
    { week: "W3", time: 2.6 },
    { week: "W4", time: 2.4 },
  ];

  // Workload distribution (per worker)
  const workload = [
    { worker: "Ruby", hours: 12 },
    { worker: "Advik", hours: 8 },
    { worker: "Carla", hours: 7 },
    { worker: "Sarah", hours: 7 },
  ];

  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">
        Elyx Dashboard
      </h1>

      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-sm text-slate-500">Avg Response Time</h2>
            <p className="text-2xl font-bold">{summary.avgResponseTime}</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-sm text-slate-500">Logging Hours</h2>
            <p className="text-2xl font-bold">{summary.loggingHours}</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-sm text-slate-500">Task Completion</h2>
            <p className="text-2xl font-bold">{summary.taskCompletion}</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-sm text-slate-500">Resolution Rate</h2>
            <p className="text-2xl font-bold">{summary.resolutionRate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Response Time Trend (min)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={responseTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#4f46e5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Workload Distribution (hours)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={workload}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="worker" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
