"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import fullStory from "@/data/fullStory.json";
import { format } from "date-fns";

// Extract HRV data
const hrvTrend = fullStory
  .filter((log) => log.data_type === "biometrics" || log.metric === "HRV")
  .map((log) => {
    const date =
      log.details?.date ||
      log.details?.date_utc ||
      log.timestamp?.replace(/\[|\].*/g, "") || // fallback: extract date from timestamp
      new Date().toISOString();

    return {
      date: format(new Date(date), "MMM d"),
      hrv: log.details?.hrv_morning_ms || log.details?.value || null,
    };
  })
  .filter((d) => d.hrv !== null);

// Calculate Avg HRV
const avgHRV = hrvTrend.length
  ? Math.round(hrvTrend.reduce((a, b) => a + b.hrv, 0) / hrvTrend.length)
  : "--";

// Extract BP readings
const bpReadings = fullStory
  .filter((log) => log.data_type === "biometrics" || log.data_type === "daily_check_in")
  .map((log) => {
    const date =
      log.details?.date ||
      log.details?.date_utc ||
      log.timestamp?.replace(/\[|\].*/g, "") ||
      new Date().toISOString();

    return {
      date: format(new Date(date), "MMM d"),
      systolic:
        log.details?.blood_pressure_systolic ||
        log.details?.blood_pressure?.systolic ||
        parseInt(log.details?.blood_pressure?.split("/")[0]) ||
        null,
      diastolic:
        log.details?.blood_pressure_diastolic ||
        log.details?.blood_pressure?.diastolic ||
        parseInt(log.details?.blood_pressure?.split("/")[1]) ||
        null,
    };
  })
  .filter((d) => d.systolic && d.diastolic);

// Latest BP
const latestBP =
  bpReadings.length > 0
    ? `${bpReadings[bpReadings.length - 1].systolic}/${bpReadings[bpReadings.length - 1].diastolic}`
    : "--";

// Extract Nutrition adherence
const nutritionAdherence =
  fullStory.find((log) => log.data_type === "nutrition_adherence")?.details
    ?.adherence_percentage ||
  fullStory.find((log) => log.data_type === "adherence_log")?.details
    ?.compliance_percentage ||
  "--";

// Extract Workout adherence
const workoutAdherence =
  fullStory.find((log) => log.data_type === "adherence_report")?.details
    ?.adherence_percentage || "--";

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
          RP
        </div>
        <div>
          <h1 className="text-2xl font-bold">Rohan Patel</h1>
          <p className="text-gray-600">
            42 yrs · Global Tech Executive · Frequent Traveler · Under Elyx Health Program
          </p>
          <p className="text-sm text-gray-500 italic">
            Focus: Cardiovascular resilience, stress management, peak performance
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Avg HRV</p>
            <p className="text-2xl font-bold text-blue-600">
              {avgHRV} {avgHRV !== "--" ? "ms" : ""}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Latest BP</p>
            <p className="text-2xl font-bold text-red-600">
              {latestBP} {latestBP !== "--" ? "mmHg" : ""}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Nutrition Adherence</p>
            <p className="text-2xl font-bold text-green-600">
              {nutritionAdherence !== "--" ? `${nutritionAdherence}%` : "--"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Workout Adherence</p>
            <p className="text-2xl font-bold text-purple-600">
              {workoutAdherence !== "--" ? `${workoutAdherence}%` : "--"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* HRV Trend */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">HRV Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hrvTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hrv" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* BP Readings */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Blood Pressure Readings</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={bpReadings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="systolic" fill="#ef4444" />
                <Bar dataKey="diastolic" fill="#facc15" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
