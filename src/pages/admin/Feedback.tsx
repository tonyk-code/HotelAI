import { useState } from "react";
import {
  Star,
  ThumbsUp,
  Meh,
  ThumbsDown,
  MessageSquare,
} from "lucide-react";

const feedbackData = [
  {
    id: 1,
    guest: "Alice Johnson",
    comment:
      "Amazing service! The staff was incredibly friendly and helpful throughout our stay.",
    sentiment: "positive",
    rating: 5,
    date: "2026-03-18",
  },
  {
    id: 2,
    guest: "Bob Williams",
    comment: "Room was clean but WiFi was slow. Otherwise good experience.",
    sentiment: "neutral",
    rating: 3,
    date: "2026-03-19",
  },
  {
    id: 3,
    guest: "Charlie Brown",
    comment: "Terrible experience. AC didn't work and no one came to fix it.",
    sentiment: "negative",
    rating: 1,
    date: "2026-03-19",
  },
  {
    id: 4,
    guest: "Diana Prince",
    comment: "Beautiful hotel with great amenities. Pool area was fantastic!",
    sentiment: "positive",
    rating: 5,
    date: "2026-03-17",
  },
  {
    id: 5,
    guest: "Ethan Hunt",
    comment: "Good location and comfortable beds. Breakfast could be better.",
    sentiment: "neutral",
    rating: 4,
    date: "2026-03-20",
  },
  {
    id: 6,
    guest: "Fiona Green",
    comment:
      "Outstanding! Will definitely come back. Best hotel experience ever.",
    sentiment: "positive",
    rating: 5,
    date: "2026-03-20",
  },
  {
    id: 7,
    guest: "George Miller",
    comment:
      "Room service was extremely slow. Waited over an hour for breakfast.",
    sentiment: "negative",
    rating: 2,
    date: "2026-03-18",
  },
  {
    id: 8,
    guest: "Hannah Lee",
    comment: "Nice place, friendly staff, clean rooms. No complaints.",
    sentiment: "positive",
    rating: 4,
    date: "2026-03-16",
  },
];

export default function Feedback() {
  const [filter, setFilter] = useState<string>("all");

  const filteredFeedback = feedbackData.filter((item) => {
    if (filter === "all") return true;
    return item.sentiment === filter;
  });

  const stats = {
    positive: feedbackData.filter((f) => f.sentiment === "positive").length,
    neutral: feedbackData.filter((f) => f.sentiment === "neutral").length,
    negative: feedbackData.filter((f) => f.sentiment === "negative").length,
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Guest Experience
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Real-time sentiment analysis and feedback monitoring.
          </p>
        </div>
        <div className="flex items-center bg-slate-100 p-1 rounded-xl">
          {["all", "positive", "neutral", "negative"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                filter === type
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* SUMMARY STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Positive",
            count: stats.positive,
            icon: ThumbsUp,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            label: "Neutral",
            count: stats.neutral,
            icon: Meh,
            color: "text-amber-600",
            bg: "bg-amber-50",
          },
          {
            label: "Negative",
            count: stats.negative,
            icon: ThumbsDown,
            color: "text-rose-600",
            bg: "bg-rose-50",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-xl`}>
                <stat.icon size={20} />
              </div>
              <span className="text-2xl font-bold text-slate-900">
                {stat.count}
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase mt-4">
              {stat.label} Reviews
            </p>
          </div>
        ))}
      </div>

      {/* FEEDBACK LIST */}
      <div className="grid gap-4">
        {filteredFeedback.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-blue-200 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                  {item.guest
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-slate-900">{item.guest}</h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                        item.sentiment === "positive"
                          ? "bg-emerald-50 text-emerald-700"
                          : item.sentiment === "neutral"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {item.sentiment}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {item.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < item.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 pl-14">
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{item.comment}"
              </p>
              <div className="mt-4 flex gap-3">
                <button className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1">
                  <MessageSquare size={12} />
                  Reply to Guest
                </button>
                <button className="text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors">
                  Flag for Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
