
import Header from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import StatCard from "@/components/StatCard";
import ProgressChart from "@/components/ProgressChart";
import { Users, Clock, ArrowUp, ArrowDown, FileText } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

const stats = [
  {
    label: "Active Patients",
    value: 124,
    icon: <Users className="w-5 h-5" />,
    change: "5% this month",
    changeType: "up" as "up",
  },
  {
    label: "Avg. Compliance Rate",
    value: "72%",
    icon: <Clock className="w-5 h-5" />,
    change: "2% this month",
    changeType: "up" as "up",
  },
  {
    label: "Therapy Stagnation",
    value: "18%",
    icon: <ArrowDown className="w-5 h-5" />,
    change: "1% this month",
    changeType: "down" as "down",
  },
  {
    label: "New Outcome Reports",
    value: 11,
    icon: <FileText className="w-5 h-5" />,
    change: "+2 this week",
    changeType: "up" as "up",
  },
];

export default function Index() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <Header />
          <main className="px-8 pb-8 flex flex-col gap-8 w-full max-w-[1200px] mx-auto">
            <div className="flex flex-wrap gap-6 mb-4">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
            <div className="w-full">
              <ProgressChart />
            </div>
            <div className="flex items-center mt-6">
              <a
                className="ml-auto inline-flex items-center bg-primary text-white rounded-lg px-5 py-2 text-sm font-medium shadow hover:bg-primary/80 transition"
                href="/reports"
              >
                <FileText className="w-4 h-4 mr-2" />
                Export Reports
              </a>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
