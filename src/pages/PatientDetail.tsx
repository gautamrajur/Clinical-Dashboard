
import Header from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

// Dummy single-patient data
const patientDB = [
  {
    id: "1",
    name: "John Doe",
    condition: "ACL Rehab",
    compliance: "80%",
    timeline: [
      { date: "2025-04-12", progress: 40 },
      { date: "2025-04-14", progress: 50 },
      { date: "2025-04-16", progress: 70 },
      { date: "2025-04-18", progress: 80 },
    ],
  },
  {
    id: "2",
    name: "Mary Chen",
    condition: "Shoulder Surgery",
    compliance: "68%",
    timeline: [
      { date: "2025-04-10", progress: 56 },
      { date: "2025-04-13", progress: 62 },
      { date: "2025-04-17", progress: 68 },
    ],
  },
];

export default function PatientDetail() {
  const { "*": id } = useParams();

  const patient = patientDB.find((p) => p.id === id) || patientDB[0];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <Header />
          <main className="px-8 pb-8 w-full max-w-[700px] mx-auto">
            <Link to="/patients" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 mb-6 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back to All Patients
            </Link>
            <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-4 mb-2">
                <User className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-xl font-bold">{patient.name}</div>
                  <div className="text-gray-500 text-sm">{patient.condition}</div>
                </div>
              </div>
              <div>
                <span className="font-medium text-gray-700">Current Compliance:</span> {patient.compliance}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="mb-2 font-semibold">Progress Timeline</div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={patient.timeline}>
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Line type="monotone" dataKey="progress" stroke="#9b87f5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex justify-end mt-4">
                <a
                  className="inline-flex items-center bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium shadow hover:bg-primary/80 transition"
                  href="#"
                  download
                >
                  Download Patient Report
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
