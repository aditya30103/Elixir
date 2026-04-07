import ElyxDashboard from "@/components/ElyxDashboard";
import MemberDashboard from "@/components/MemberDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <main className="flex-1 bg-gray-50 p-6 md:p-8">
      <Tabs defaultValue="member" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="member">Member View</TabsTrigger>
          <TabsTrigger value="elyx">Elyx View</TabsTrigger>
        </TabsList>
        <TabsContent value="member">
          <MemberDashboard />
        </TabsContent>
        <TabsContent value="elyx">
          <ElyxDashboard />
        </TabsContent>
      </Tabs>
    </main>
  );
}
