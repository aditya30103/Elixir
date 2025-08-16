// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
//       <p className="text-gray-600">
//         Ops metrics, persona analysis, and adherence charts will go here.
//       </p>
//     </div>
//   );
// }


"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import journeyData from "@/data/journey.json";

export default function DashboardPage() {
  const member = journeyData.member;
  const metrics = journeyData.metrics;

  const opsData = [
    { role: "Doctor", hours: metrics.doctorHours },
    { role: "Nutrition", hours: metrics.nutritionHours },
    { role: "PT", hours: metrics.ptHours },
    { role: "Concierge", hours: metrics.conciergeHours },
  ];

  const apoBTrend = [
    { quarter: "Q1", value: 105 },
    { quarter: "Q2", value: 98 },
    { quarter: "Q3", value: 90 },
    { quarter: "Q4", value: 92 }
  ];

  const adherenceData = [
    { name: "Adherence", value: metrics.adherence },
    { name: "Missed", value: 100 - metrics.adherence }
  ];
  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Profile */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Member Profile</h2>
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Age:</strong> {member.age}</p>
          <p><strong>Location:</strong> {member.location}</p>
          <p><strong>Occupation:</strong> {member.occupation}</p>
          <p><strong>Travel:</strong> {member.travelFrequency}</p>
          <p><strong>Wearables:</strong> {member.wearables.join(", ")}</p>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card><CardContent className="p-4 text-center"><h3 className="text-lg font-bold">{metrics.adherence}%</h3><p className="text-sm text-gray-500">Adherence</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><h3 className="text-lg font-bold">{metrics.labTests}</h3><p className="text-sm text-gray-500">Lab Tests</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><h3 className="text-lg font-bold">{metrics.travelWeeks}</h3><p className="text-sm text-gray-500">Travel Weeks</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><h3 className="text-lg font-bold">{metrics.doctorHours + metrics.nutritionHours + metrics.ptHours + metrics.conciergeHours}</h3><p className="text-sm text-gray-500">Total Hours</p></CardContent></Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Ops Hours Bar Chart */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Ops Hours by Role</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={opsData}>
                <XAxis dataKey="role" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ApoB Line Chart */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">ApoB Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={apoBTrend}>
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Adherence Pie Chart */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Adherence Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={adherenceData} cx="50%" cy="50%" label outerRadius={80} fill="#8884d8" dataKey="value">
                  {adherenceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

