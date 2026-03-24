import { useTimeFilter } from "../../hooks/customhooks/useTimeFilter";
import {
  DollarSign,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueDataDetailed = {
  Today: [
    { time: "00:00", income: 2400, expenses: 800, profit: 1600 },
    { time: "06:00", income: 1398, expenses: 500, profit: 898 },
    { time: "12:00", income: 9800, expenses: 2200, profit: 7600 },
    { time: "18:00", income: 3908, expenses: 1100, profit: 2808 },
    { time: "23:59", income: 4800, expenses: 1500, profit: 3300 },
  ],
  Weekly: [
    { time: "Mon", income: 12400, expenses: 4200, profit: 8200 },
    { time: "Tue", income: 15398, expenses: 5100, profit: 10298 },
    { time: "Wed", income: 19800, expenses: 6300, profit: 13500 },
    { time: "Thu", income: 13908, expenses: 4800, profit: 9108 },
    { time: "Fri", income: 24800, expenses: 7200, profit: 17600 },
    { time: "Sat", income: 28900, expenses: 8100, profit: 20800 },
    { time: "Sun", income: 22300, expenses: 6900, profit: 15400 },
  ],
  Monthly: [
    { time: "Week 1", income: 42400, expenses: 14200, profit: 28200 },
    { time: "Week 2", income: 55398, expenses: 18100, profit: 37298 },
    { time: "Week 3", income: 69800, expenses: 21300, profit: 48500 },
    { time: "Week 4", income: 73908, expenses: 22800, profit: 51108 },
  ],
};

export default function Revenue() {
  const { timeRange } = useTimeFilter();
  const data = revenueDataDetailed[timeRange];

  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Revenue Analytics
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Financial performance overview for {timeRange}.
          </p>
        </div>
        <div className="flex gap-2">
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <DollarSign size={20} />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={12} />
              12.5%
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-tight">
              Total Income
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              ${totalIncome.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
              <DollarSign size={20} />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={12} />
              5.2%
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-tight">
              Total Expenses
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              ${totalExpenses.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-[#1E3A8A] rounded-2xl p-6 shadow-lg shadow-blue-900/20 group">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-white/10 text-white rounded-xl">
              <TrendingUp size={20} />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-white/10 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={12} />
              15.8%
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-blue-200 uppercase tracking-tight">
              Net Profit
            </p>
            <p className="text-2xl font-bold text-white mt-1">
              ${totalProfit.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
            Revenue Breakdown
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-slate-500">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <span className="text-xs font-medium text-slate-500">
                Expenses
              </span>
            </div>
          </div>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                vertical={false}
                stroke="#F1F5F9"
                strokeDasharray="0"
              />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94A3B8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94A3B8", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "#F8FAFC" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="income"
                fill="#10B981"
                radius={[4, 4, 0, 0]}
                barSize={24}
              />
              <Bar
                dataKey="expenses"
                fill="#FB7185"
                radius={[4, 4, 0, 0]}
                barSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white rounded-2xl p-6 border border-blue-100 shadow-sm group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Sparkles size={120} className="text-blue-600" />
        </div>
        <div className="relative flex items-start gap-4">
          <div className="p-2 bg-blue-600 text-white rounded-lg">
            <Sparkles size={18} />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold text-slate-900">
              Smart Recommendation
            </h3>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              Revenue increased 15% compared to last week. Peak earnings occur
              on weekends.
              <span className="text-blue-600 font-semibold italic">
                {" "}
                Consider implementing dynamic pricing
              </span>{" "}
              for Friday-Sunday to maximize your revenue potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
