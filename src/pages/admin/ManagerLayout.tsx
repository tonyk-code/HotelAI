import { Outlet, NavLink } from "react-router";
import { TimeFilterProvider } from "../../context/TimeFilterProvider";
import { useTimeFilter } from "../../hooks/customhooks/useTimeFilter";
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
  MessageSquareOff,
} from "lucide-react";
import { useAuth } from "../../hooks/customhooks/useAuth";
import { getInitials } from "../../utils/getInitials";

const navigation = [
  { name: "Dashboard", path: "/manager", icon: LayoutDashboard },
  { name: "Tasks", path: "/manager/tasks", icon: ListTodo },
  { name: "Bookings", path: "/manager/bookings", icon: Calendar },
  { name: "Inventory", path: "/manager/inventory", icon: Package },
  { name: "Revenue", path: "/manager/revenue", icon: DollarSign },
  { name: "Feedback", path: "/manager/feedback", icon: MessageSquare },
  { name: "Reports", path: "/manager/reports", icon: FileText },
  { name: "AI Requests", path: "/manager/ai-requests", icon: MessageSquareOff },
];

export function ManagerLayoutContent() {
  const { timeRange, setTimeRange } = useTimeFilter();
  const { logout, user } = useAuth();
  const abbreviation = getInitials(user!.name);

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-[#111827]">
      <aside className="w-64 bg-[#1E3A8A] flex flex-col shadow-xl relative">
        <div className="p-8">
          <h1 className="text-white text-xl font-bold tracking-tight">
            AI Hospitality
          </h1>
        </div>

        <nav className="flex flex-col gap-2 px-4 py-6">
          {" "}
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} end>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm ring-1 ring-white/20 backdrop-blur-sm"
                      : "text-blue-100/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon
                    size={18}
                    className={`${isActive ? "text-blue-400" : "text-blue-100/40 group-hover:text-blue-100"}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {item.name}

                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={logout}
          className="absolute bottom-5 left-[50%] -translate-x-[50%] px-6 py-2 w-40 bg-red-50 text-red-600 text-xs font-bold rounded-full border-2 border-red-100 hover:bg-red-600 hover:text-white transition-all"
        >
          Logout
        </button>
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
                <p className="text-sm font-bold text-[#111827] capitalize">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500 font-medium capitalize">
                  {user?.role}
                </p>
              </div>
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-inner">
                {abbreviation}
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
