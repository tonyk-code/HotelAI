import { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Clock,
  Plus,
} from "lucide-react";

const tasksData = [
  {
    id: 1,
    title: "Fix AC in Room 305",
    room: "305",
    staff: "John Doe",
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    title: "Restock minibar",
    room: "102",
    staff: "Sarah Smith",
    priority: "medium",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Clean pool area",
    room: "-",
    staff: "Mike Johnson",
    priority: "low",
    status: "done",
  },
  {
    id: 4,
    title: "Replace towels",
    room: "Floor 3",
    staff: "Emma Davis",
    priority: "medium",
    status: "done",
  },
  {
    id: 5,
    title: "Repair elevator",
    room: "Building A",
    staff: "Robert Lee",
    priority: "high",
    status: "in-progress",
  },
  {
    id: 6,
    title: "Check fire alarms",
    room: "All floors",
    staff: "Lisa Wang",
    priority: "high",
    status: "pending",
  },
  {
    id: 7,
    title: "Deep clean lobby",
    room: "Lobby",
    staff: "Tom Brown",
    priority: "low",
    status: "done",
  },
  {
    id: 8,
    title: "Inspect plumbing Room 201",
    room: "201",
    staff: "Anna White",
    priority: "medium",
    status: "pending",
  },
];

export default function Tasks() {
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredTasks = tasksData.filter((task) => {
    if (priorityFilter !== "all" && task.priority !== priorityFilter)
      return false;
    if (statusFilter !== "all" && task.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-[#111827] tracking-tight">
            Task Management
          </h1>
          <p className="text-slate-500 mt-1 font-medium">
            Monitor and assign hospitality operations.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-[#3B82F6] transition-all active:scale-95">
          <Plus size={20} strokeWidth={3} />
          Assign New Task
        </button>
      </div>

      {/* FILTER BAR - Premium Refinement */}
      <div className="flex flex-wrap items-center gap-3 py-2">
        <span className="text-xs font-semibold text-slate-400 uppercase  mr-2">
          Filter By:
        </span>
        <div className="relative">
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="all">Priority: All</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={14}
          />
        </div>

        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 transition-colors focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="all">Status: All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Completed</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={14}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="px-8 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Task Detail
              </th>
              <th className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Location
              </th>
              <th className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Assignee
              </th>
              <th className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredTasks.map((task) => (
              <tr
                key={task.id}
                className="group hover:bg-slate-50/80 transition-all cursor-pointer"
              >
                {/* Task Title with Priority Indicator */}
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-1.5 h-10 rounded-full ${
                        task.priority === "high"
                          ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                          : task.priority === "medium"
                            ? "bg-amber-400"
                            : "bg-emerald-400"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-bold text-[#111827] group-hover:text-[#1E3A8A] transition-colors">
                        {task.title}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                        {task.priority} Priority
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                    {task.room}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full flex items-center justify-center text-[10px] font-bold">
                      {task.staff
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-sm font-medium text-slate-600">
                      {task.staff}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                      task.status === "done"
                        ? "bg-emerald-50 text-emerald-700"
                        : task.status === "in-progress"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    {task.status === "done" ? (
                      <CheckCircle size={14} />
                    ) : task.status === "in-progress" ? (
                      <Clock size={14} />
                    ) : (
                      <AlertCircle size={14} />
                    )}
                    <span className="text-xs font-bold capitalize">
                      {task.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
