
import Header from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { FileText, ArrowDown } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

const reports = [
  { id: 1, name: "Outcome Report Apr 2025", date: "2025-04-18" },
  { id: 2, name: "Therapy Compliance Trends Q1", date: "2025-03-31" },
  { id: 3, name: "Population Analytics 2024", date: "2025-01-22" },
];

export default function Reports() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <Header />
          <main className="px-8 pb-8 w-full max-w-[750px] mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Outcome Reports</h2>
              <a
                className="inline-flex items-center bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium shadow hover:bg-primary/80 transition"
                href="#"
              >
                <ArrowDown className="w-4 h-4 mr-2" />
                Download All
              </a>
            </div>
            <div className="bg-white border rounded-xl shadow-sm overflow-auto max-w-full">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium">Report Name</th>
                    <th className="text-left px-4 py-3 text-sm font-medium">Date</th>
                    <th className="text-left px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-t">
                      <td className="px-4 py-3 font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted" />
                        {report.name}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{report.date}</td>
                      <td className="px-4 py-3">
                        <a className="text-primary underline hover:opacity-80 transition" href="#" download>
                          Download
                        </a>
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
