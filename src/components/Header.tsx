
import { User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-5 px-8 border-b border-gray-200 bg-white mb-6">
      <div className="text-lg font-semibold tracking-wide">Clinical Dashboard</div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-gray-500 text-sm">Logged in as: <span className="font-medium text-primary">Dr. Jane Smith</span> (Physician)</span>
        <div className="bg-primary/10 rounded-full p-2">
          <User className="w-6 h-6 text-primary" />
        </div>
      </div>
    </header>
  );
}
