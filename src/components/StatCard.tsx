
import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  changeType?: "up" | "down";
}

export default function StatCard({ label, value, icon, change, changeType }: StatCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border p-5 w-full max-w-xs min-w-[180px] animate-fade-in">
      <div className="flex items-center justify-between w-full mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        {icon && <span className="text-primary">{icon}</span>}
      </div>
      <div className="text-2xl font-semibold text-gray-800">{value}</div>
      {change && (
        <span className={`mt-1 text-xs flex items-center gap-1 ${changeType === "up" ? "text-green-600" : "text-red-500"}`}>
          {changeType === "up" ? "▲" : "▼"} {change}
        </span>
      )}
    </div>
  );
}
