import { useTimeFilter } from "../../hooks/useTimeFilter";
import {
  Hotel,
  Calendar,
  ListTodo,
  DollarSign,
  Star,
  Sparkles,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  type LucideIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = {
  Today: [
    { time: "00:00", revenue: 2400 },
    { time: "06:00", revenue: 1398 },
    { time: "12:00", revenue: 9800 },
    { time: "18:00", revenue: 3908 },
    { time: "23:59", revenue: 4800 },
  ],
  Weekly: [
    { time: "Mon", revenue: 12400 },
    { time: "Tue", revenue: 15398 },
    { time: "Wed", revenue: 19800 },
    { time: "Thu", revenue: 13908 },
    { time: "Fri", revenue: 24800 },
    { time: "Sat", revenue: 28900 },
    { time: "Sun", revenue: 22300 },
  ],
  Monthly: [
    { time: "Week 1", revenue: 42400 },
    { time: "Week 2", revenue: 55398 },
    { time: "Week 3", revenue: 69800 },
    { time: "Week 4", revenue: 73908 },
  ],
};

const tasks = [
  {
    id: 1,
    name: "Fix AC in Room 305",
    staff: "John Doe",
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    name: "Restock minibar Room 102",
    staff: "Sarah Smith",
    priority: "medium",
    status: "in-progress",
  },
  {
    id: 3,
    name: "Clean pool area",
    staff: "Mike Johnson",
    priority: "low",
    status: "done",
  },
  {
    id: 4,
    name: "Replace towels Floor 3",
    staff: "Emma Davis",
    priority: "medium",
    status: "done",
  },
];

const feedback = [
  {
    id: 1,
    guest: "Alice Johnson",
    comment: "Amazing service! The staff was very friendly.",
    sentiment: "positive",
  },
  {
    id: 2,
    guest: "Bob Williams",
    comment: "Room was clean but WiFi was slow.",
    sentiment: "neutral",
  },
  {
    id: 3,
    guest: "Charlie Brown",
    comment: "Terrible experience. AC didn't work.",
    sentiment: "negative",
  },
];

export function Dashboard() {
  const { timeRange } = useTimeFilter();

  const metrics = {
    Today: {
      occupancy: 68,
      bookings: 42,
      tasks: 12,
      revenue: 18500,
      satisfaction: 4.2,
    },
    Weekly: {
      occupancy: 75,
      bookings: 234,
      tasks: 87,
      revenue: 125400,
      satisfaction: 4.5,
    },
    Monthly: {
      occupancy: 72,
      bookings: 892,
      tasks: 340,
      revenue: 485600,
      satisfaction: 4.4,
    },
  };

  const current = metrics[timeRange];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          icon={Hotel}
          label="Room Occupancy"
          value={`${current.occupancy}%`}
          trend={5.2}
          positive
        />
        <MetricCard
          icon={Calendar}
          label="Total Bookings"
          value={current.bookings}
          trend={12.5}
          positive
        />
        <MetricCard
          icon={ListTodo}
          label="Active Tasks"
          value={current.tasks}
          trend={-3.1}
          positive={false}
        />
        <MetricCard
          icon={DollarSign}
          label="Revenue"
          value={`$${current.revenue.toLocaleString()}`}
          trend={8.7}
          positive
        />
        <MetricCard
          icon={Star}
          label="Satisfaction"
          value={current.satisfaction.toFixed(1)}
          trend={2.3}
          positive
        />
      </div>

      {/* AI Summary */}
      <div className="relative overflow-hidden bg-white rounded-2xl p-6 border border-slate-200 shadow-sm ring-1 ring-amber-100/50">
        <div className="absolute top-0 right-0 p-4">
          <Sparkles className="text-amber-400 opacity-20" size={48} />
        </div>
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0 p-3 bg-amber-50 rounded-2xl border border-amber-100">
            <Sparkles className="text-amber-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-1">
              AI Intelligence Report
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              Occupancy is{" "}
              <span className="font-semibold text-slate-900">75%</span> this
              week. Note: 3 urgent maintenance tasks in the North Wing and
              inventory shortages in{" "}
              <span className="underline decoration-amber-200">
                bottled water
              </span>
              .
            </p>
            <button className="mt-4 text-sm font-bold text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
              View Full Analysis →
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2D3142]">
              Tasks Overview
            </h3>
            <button className="text-sm text-[#B0D7FF] hover:text-[#9AC7EF] font-medium">
              View All Tasks
            </button>
          </div>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 bg-[#EAE8FF]/30 rounded-xl hover:bg-[#EAE8FF]/50 transition-colors"
              >
                <div
                  className={`p-2 rounded-lg ${
                    task.status === "done"
                      ? "bg-green-100"
                      : task.status === "in-progress"
                        ? "bg-yellow-100"
                        : "bg-red-100"
                  }`}
                >
                  {task.status === "done" ? (
                    <CheckCircle size={16} className="text-green-600" />
                  ) : task.status === "in-progress" ? (
                    <Clock size={16} className="text-yellow-600" />
                  ) : (
                    <AlertCircle size={16} className="text-red-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#2D3142] text-sm truncate">
                    {task.name}
                  </p>
                  <p className="text-xs text-[#ADACB5]">{task.staff}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    task.priority === "high"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Feedback Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2D3142]">
              Guest Feedback
            </h3>
            <button className="text-sm text-[#B0D7FF] hover:text-[#9AC7EF] font-medium">
              View All Feedback
            </button>
          </div>
          <div className="space-y-3">
            {feedback.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-900">
                    {item.guest}
                  </span>
                  <div
                    className={`h-2 w-2 rounded-full ${
                      item.sentiment === "positive"
                        ? "bg-emerald-500"
                        : item.sentiment === "negative"
                          ? "bg-rose-500"
                          : "bg-slate-300"
                    }`}
                  />
                </div>
                <p className="text-sm text-slate-500 leading-snug italic">
                  "{item.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2D3142] mb-4">
          Revenue Overview
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData[timeRange]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#D8D5DB" />
              <XAxis dataKey="time" stroke="#ADACB5" />
              <YAxis stroke="#ADACB5" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#B0D7FF"
                strokeWidth={3}
                dot={{ fill: "#B0D7FF", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 p-3 bg-[#B0D7FF]/10 rounded-xl">
          <p className="text-sm text-[#2D3142]">
            <span className="font-semibold">AI Insight:</span> High demand
            expected this weekend — consider increasing prices.
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  positive,
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend: number;
  positive: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 bg-slate-50 text-slate-600 rounded-xl group-hover:bg-blue-50 group-hover:text-[#1E3A8A] transition-colors">
          <Icon size={20} />
        </div>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-bold ${
            positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-rose-50 text-rose-600"
          }`}
        >
          {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trend}%
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <p className="text-2xl font-bold text-[#111827] tracking-tight">
          {value}
        </p>
      </div>
    </div>
  );
}
