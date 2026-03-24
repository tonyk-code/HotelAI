import { Home, Building2, Palmtree, Mountain, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Private Villas",
    count: "124",
    description: "Exclusive secluded stays",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Building2,
    title: "Urban Hotels",
    count: "86",
    description: "Central business luxury",
    color: "bg-slate-50 text-slate-600",
  },
  {
    icon: Palmtree,
    title: "Beach Resorts",
    count: "52",
    description: "Oceanfront paradise",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Mountain,
    title: "Mountain Cottages",
    count: "31",
    description: "Quiet alpine retreats",
    color: "bg-amber-50 text-amber-600",
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111827] tracking-tight">
            Browse by{" "}
            <span className="text-[#3B82F6] font-light italic">Category</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-light leading-relaxed">
            Curated collections for every travel persona, from urban explorers
            to paradise seekers.
          </p>
        </div>
        <button className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm group">
          VIEW ALL COLLECTIONS
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative w-full bg-white border border-slate-100 rounded-4xl p-8 hover:border-[#3B82F6]/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <div
              className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${category.color}`}
            />

            <div
              className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
            >
              <category.icon className="w-7 h-7" strokeWidth={1.5} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#111827]">
                {category.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                {category.count} PROPERTIES
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <ArrowRight className="w-4 h-4 text-[#1E3A8A]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
