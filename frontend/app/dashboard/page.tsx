import { promises as fs } from 'fs';
import path from 'path';
import ElyxDashboard from "@/components/ElyxDashboard";
import MemberDashboard from "@/components/MemberDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { unstable_noStore as noStore } from 'next/cache';

// This is our new, dedicated data-loading function.
// It will always run on the server and will not be cached.
async function loadDashboardData() {
  noStore(); // Explicitly prevent caching of this function's output

  const elyxDataPath = path.join(process.cwd(), 'frontend/data/elyx_data_cleaned.json');
  const memberDataPath = path.join(process.cwd(), 'frontend/data/cleaned_member.json');

  try {
    const elyxFile = await fs.readFile(elyxDataPath, 'utf8');
    const memberFile = await fs.readFile(memberDataPath, 'utf8');

    const elyxData = JSON.parse(elyxFile);
    const memberData = JSON.parse(memberFile);

    return { elyxData, memberData };
  } catch (error) {
    console.error("Failed to load dashboard data:", error);
    // Return empty objects or handle the error as needed
    return { elyxData: {}, memberData: {} };
  }
}

export default async function Dashboard() {
  // Call our new function to get the fresh data on every request
  const { elyxData, memberData } = await loadDashboardData();

  return (
    <main className="flex-1 bg-gray-50 p-6 md:p-8">
      <Tabs defaultValue="member" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="member">Member View</TabsTrigger>
          <TabsTrigger value="elyx">Elyx View</TabsTrigger>
        </TabsList>
        <TabsContent value="member">
          <MemberDashboard data={memberData} />
        </TabsContent>
        <TabsContent value="elyx">
          <ElyxDashboard data={elyxData} />
        </TabsContent>
      </Tabs>
    </main>
  );
}