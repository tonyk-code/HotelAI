import {
  FileText,
  Download,
  TrendingDown,
  Sparkles,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Reports & Analytics
        </h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Export operational data and review AI-generated insights.
        </p>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative group">
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <Sparkles size={160} />
        </div>
        <div className="relative flex items-start gap-4">
          <div className="p-2.5 bg-white/10 rounded-xl text-blue-300">
            <TrendingDown size={22} />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Executive Summary
            </h3>
            <p className="mt-2 text-slate-200 leading-relaxed">
              Occupancy dropped{" "}
              <span className="text-rose-400 font-bold">10%</span> this month,
              but revenue remains stable due to a{" "}
              <span className="text-emerald-400 font-bold">12% increase</span>{" "}
              in average booking value. Recommendation: Launch mid-week
              "Workation" packages to bridge the gap.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReportCard
          title="Daily Summary"
          period="24h"
          icon={<Clock size={20} />}
          desc="Snapshot of check-ins, tasks, and immediate revenue."
        />
        <ReportCard
          title="Weekly Trends"
          period="7d"
          icon={<Calendar size={20} />}
          desc="Comparative analysis of staff performance and guest sentiment."
        />
        <ReportCard
          title="Monthly Review"
          period="30d"
          icon={<FileText size={20} />}
          desc="Deep dive into financial health, P&L, and inventory forecasts."
          primary
        />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
            Recent Archives
          </h3>
          <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
            View All
          </button>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            {
              name: "Monthly Report - February 2026",
              date: "Mar 01",
              size: "2.4 MB",
              type: "PDF",
            },
            {
              name: "Weekly Report - Week 11",
              date: "Mar 17",
              size: "856 KB",
              type: "XLS",
            },
            {
              name: "Daily Report - March 19",
              date: "Mar 19",
              size: "342 KB",
              type: "PDF",
            },
            {
              name: "Weekly Report - Week 10",
              date: "Mar 10",
              size: "921 KB",
              type: "PDF",
            },
          ].map((report, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 hover:bg-slate-50/80 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    {report.name}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {report.date} • {report.size} • {report.type}
                  </p>
                </div>
              </div>
              <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-white rounded-lg shadow-none hover:shadow-sm border border-transparent hover:border-slate-200 transition-all">
                <Download size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportCard({ title, period, icon, desc, primary }: any) {
  return (
    <div
      className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        primary
          ? "bg-blue-50 border-blue-100 ring-4 ring-blue-50/50"
          : "bg-white border-slate-100 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2.5 rounded-xl ${primary ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}
        >
          {icon}
        </div>
        <span
          className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${primary ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"}`}
        >
          {period}
        </span>
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-500 mt-2 leading-relaxed min-h-8">
        {desc}
      </p>
      <button
        className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
          primary
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        Generate <ChevronRight size={14} />
      </button>
    </div>
  );
}
