import { Outlet, NavLink } from "react-router";
import { TimeFilterProvider } from "../../context/TimeFilterProvider";
import { useTimeFilter } from "../../hooks/useTimeFilter";
import {
  LayoutDashboard,
  ListTodo,
  Calendar,
  Package,
  DollarSign,
  MessageSquare,
  FileText,
  Bell,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", path: "/manager", icon: LayoutDashboard },
  { name: "Tasks", path: "/manager/tasks", icon: ListTodo },
  { name: "Bookings", path: "/manager/bookings", icon: Calendar },
  { name: "Inventory", path: "/manager/inventory", icon: Package },
  { name: "Revenue", path: "/manager/revenue", icon: DollarSign },
  { name: "Feedback", path: "/manager/feedback", icon: MessageSquare },
  { name: "Reports", path: "/manager/reports", icon: FileText },
];

export function ManagerLayoutContent() {
  const { timeRange, setTimeRange } = useTimeFilter();

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-[#111827]">
      <aside className="w-64 bg-[#1E3A8A] flex flex-col shadow-xl">
        <div className="p-8">
          <h1 className="text-white text-xl font-bold tracking-tight">
            AI Hospitality
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === ""}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm ring-1 ring-white/20"
                      : "text-blue-100/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as any)}
                className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 pr-10 text-sm font-semibold text-[#111827] cursor-pointer hover:bg-white hover:border-[#3B82F6] transition-all outline-none"
              >
                <option>Today</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-[#3B82F6]"
                size={14}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:text-[#1E3A8A] hover:bg-slate-50 rounded-full transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#111827]">John Doe</p>
                <p className="text-xs text-slate-500 font-medium">Manager</p>
              </div>
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-inner">
                JD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-10 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function ManagerLayout() {
  return (
    <TimeFilterProvider>
      <ManagerLayoutContent />
    </TimeFilterProvider>
  );
}
