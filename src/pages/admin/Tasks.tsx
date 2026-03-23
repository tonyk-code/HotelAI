import { useState } from "react";
import {
  ChevronDown,
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Task Management</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Manage daily hospitality operations and staff assignments.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1E3A8A] text-white rounded-xl font-semibold shadow-md shadow-blue-900/10 hover:bg-[#3B82F6] hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
          <Plus size={18} strokeWidth={2.5} />
          New Task
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 py-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase">
          Filter by
        </span>
        <div className="flex gap-2">
          <div className="relative">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-9 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-300 transition-colors focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <ChevronDown
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={12}
            />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-9 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-300 transition-colors focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Completed</option>
            </select>
            <ChevronDown
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={12}
            />
          </div>
        </div>
      </div>

      {/* TASKS TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Task Detail
                </th>
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-[11px] font-semibold text-slate-500 uppercase">
                  Assignee
                </th>
                <th className="px-6 py-4 text-right text-[11px] font-semibold text-slate-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  className="group hover:bg-blue-50/30 transition-all duration-150"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-1 h-8 rounded-full shrink-0 ${
                          task.priority === "high"
                            ? "bg-rose-500"
                            : task.priority === "medium"
                              ? "bg-amber-400"
                              : "bg-emerald-400"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {task.title}
                        </p>
                        <p className="text-[10px] font-medium text-slate-400 capitalize">
                          {task.priority} Priority
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200/50">
                      {task.room}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-[9px] font-bold">
                        {task.staff
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-sm text-slate-600 font-medium">
                        {task.staff}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                        task.status === "done"
                          ? "bg-emerald-50 text-emerald-700"
                          : task.status === "in-progress"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          task.status === "done"
                            ? "bg-emerald-500"
                            : task.status === "in-progress"
                              ? "bg-blue-500"
                              : "bg-slate-400"
                        }`}
                      />
                      <span className="capitalize">{task.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
