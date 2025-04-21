
import Header from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

const patients = [
  { id: 1, name: "John Doe", condition: "ACL Rehab", compliance: "80%", status: "In Progress", lastUpdate: "2025-04-18" },
  { id: 2, name: "Mary Chen", condition: "Shoulder Surgery", compliance: "68%", status: "At Risk", lastUpdate: "2025-04-17" },
  { id: 3, name: "Ahmed Saleh", condition: "Stroke Recovery", compliance: "90%", status: "Recovered", lastUpdate: "2025-04-11" },
  { id: 4, name: "Olivia Smith", condition: "Knee Replacement", compliance: "75%", status: "In Progress", lastUpdate: "2025-04-18" },
];

export default function Patients() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <Header />
          <main className="px-8 pb-8 w-full max-w-[1000px] mx-auto">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">All Patients</h2>
            </div>
            <div className="bg-white border rounded-xl shadow-sm overflow-auto max-w-full">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium">Name</th>
                    <th className="text-left px-4 py-3 text-sm font-medium">Condition</th>
                    <th className="text-left px-4 py-3 text-sm font-medium">Compliance</th>
                    <th className="text-left px-4 py-3 text-sm font-medium">Status</th>
                    <th className="text-left px-4 py-3 text-sm font-medium">Last Update</th>
                    <th className="text-left px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-t">
                      <td className="px-4 py-3 font-medium">{patient.name}</td>
                      <td className="px-4 py-3">{patient.condition}</td>
                      <td className="px-4 py-3">{patient.compliance}</td>
                      <td className={`px-4 py-3 ${patient.status === "At Risk" ? "text-red-600" : patient.status === "Recovered" ? "text-green-700" : "text-blue-600"}`}>{patient.status}</td>
                      <td className="px-4 py-3 text-gray-500">{patient.lastUpdate}</td>
                      <td className="px-4 py-3">
                        <Link
                          className="text-primary underline hover:opacity-80 transition"
                          to={`/patients/${patient.id}`}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
