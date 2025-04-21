
import { Bar, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, LineChart } from "recharts";

// Dummy data for population trends
const data = [
  { month: "Jan", Compliance: 60, "Recovery Rate": 20 },
  { month: "Feb", Compliance: 65, "Recovery Rate": 25 },
  { month: "Mar", Compliance: 70, "Recovery Rate": 35 },
  { month: "Apr", Compliance: 68, "Recovery Rate": 40 },
  { month: "May", Compliance: 73, "Recovery Rate": 48 },
  { month: "Jun", Compliance: 75, "Recovery Rate": 54 },
];

export default function ProgressChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 w-full h-96 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Population Progress Trends</div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="Compliance" stroke="#9b87f5" strokeWidth={2} />
          <Line type="monotone" dataKey="Recovery Rate" stroke="#1EAEDB" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-400 mt-2">Sample Data — Charts for demo only</div>
    </div>
  );
}
