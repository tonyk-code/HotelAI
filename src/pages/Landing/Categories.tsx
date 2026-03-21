import { Home, Building2, Palmtree, Mountain } from "lucide-react";

const categories = [
  { icon: Home, title: "Private Villas", count: "124", description: "Exclusive secluded stays" },
  { icon: Building2, title: "Urban Hotels", count: "86", description: "Central business luxury" },
  { icon: Palmtree, title: "Beach Resorts", count: "52", description: "Oceanfront paradise" },
  { icon: Mountain, title: "Mountain Cottages", count: "31", description: "Quiet alpine retreats" },
];

export function Categories() {
  return (
    <section className="py-16 px-6 bg-[#F9F8FF]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142]">
          Browse by <span className="text-[#ADACB5] font-light italic">Category</span>
        </h2>
        <p className="text-[#2D3142]/70 mt-2 max-w-md mx-auto text-sm md:text-base">
          Find the perfect stay from our curated hotel, villa, and resort collections.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-2 py-2 justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="shrink-0 w-60 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2D3142] text-[#B0D7FF] flex items-center justify-center mb-4">
              <category.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#2D3142] mb-1">{category.title}</h3>
            <span className="text-xs font-mono text-[#2D3142]/70 mb-2 block">{category.count} UNITS</span>
            <p className="text-[#2D3142]/60 text-sm">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}