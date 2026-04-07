"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const sleepQ = [
  { quarter: "Q1", hours: 6.2 },
  { quarter: "Q2", hours: 7.0 },
  { quarter: "Q3", hours: 6.8 },
  { quarter: "Q4", hours: 7.5 },
];

const hrvQ = [
  { quarter: "Q1", ms: 42 },
  { quarter: "Q2", ms: 48 },
  { quarter: "Q3", ms: 52 },
  { quarter: "Q4", ms: 58 },
];

const nutritionQ = [
  { quarter: "Q1", percent: 72 },
  { quarter: "Q2", percent: 80 },
  { quarter: "Q3", percent: 85 },
  { quarter: "Q4", percent: 90 },
];

const bpQ = [
  { quarter: "Q1", systolic: 135, diastolic: 88 },
  { quarter: "Q2", systolic: 132, diastolic: 85 },
  { quarter: "Q3", systolic: 128, diastolic: 82 },
  { quarter: "Q4", systolic: 125, diastolic: 80 },
];

function average(arr: number[]) {
  if (!arr.length) return null;
  return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
}

export default function MemberDashboard() {
  const avgSleep = average(sleepQ.map((d) => d.hours));
  const avgHRV = average(hrvQ.map((d) => d.ms));
  const avgNutrition = average(nutritionQ.map((d) => d.percent));
  const avgSystolic = average(bpQ.map((d) => d.systolic));
  const avgDiastolic = average(bpQ.map((d) => d.diastolic));

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <Card className="bg-indigo-50 border border-indigo-100">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">👤 Member Profile</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <p><span className="font-semibold">Name:</span> Rohan Patel</p>
            <p><span className="font-semibold">Age:</span> 46</p>
            <p><span className="font-semibold">Location:</span> Singapore</p>
            <p><span className="font-semibold">Profession:</span> Regional Head of Sales, FinTech</p>
            <p className="sm:col-span-2">
              <span className="font-semibold">Lifestyle:</span> Demanding work hours, frequent travel, irregular routines, stress-induced eating habits.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border border-blue-200">
          <CardContent className="p-4">
            <p className="text-xs text-blue-600">Avg Sleep</p>
            <p className="text-xl font-bold text-blue-900">{avgSleep} h</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border border-green-200">
          <CardContent className="p-4">
            <p className="text-xs text-green-600">Avg HRV</p>
            <p className="text-xl font-bold text-green-900">{avgHRV} ms</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border border-yellow-200">
          <CardContent className="p-4">
            <p className="text-xs text-yellow-600">Avg Nutrition</p>
            <p className="text-xl font-bold text-yellow-900">{avgNutrition} %</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border border-red-200">
          <CardContent className="p-4">
            <p className="text-xs text-red-600">Avg BP</p>
            <p className="text-xl font-bold text-red-900">{avgSystolic}/{avgDiastolic} mmHg</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Sleep Hours (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sleepQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">HRV (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={hrvQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ms" stroke="#16a34a" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Nutrition Adherence (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={nutritionQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <Tooltip />
                <Line type="monotone" dataKey="percent" stroke="#f59e0b" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Blood Pressure (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={bpQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#dc2626" name="Systolic" />
                <Line type="monotone" dataKey="diastolic" stroke="#2563eb" name="Diastolic" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
