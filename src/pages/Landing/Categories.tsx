import { Home, Building2, Palmtree, Mountain } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Private Villas",
    count: "124",
    description: "Exclusive secluded stays",
  },
  {
    icon: Building2,
    title: "Urban Hotels",
    count: "86",
    description: "Central business luxury",
  },
  {
    icon: Palmtree,
    title: "Beach Resorts",
    count: "52",
    description: "Oceanfront paradise",
  },
  {
    icon: Mountain,
    title: "Mountain Cottages",
    count: "31",
    description: "Quiet alpine retreats",
  },
];

export function Categories() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F9F8FF]">
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3142]">
          Browse by{" "}
          <span className="text-[#ADACB5] font-light italic">Category</span>
        </h2>
        <p className="text-[#2D3142]/70 mt-2 max-w-md mx-auto text-sm sm:text-base px-4">
          Find the perfect stay from our curated hotel, villa, and resort
          collections.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 py-2 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-left hover:-translate-y-1"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#2D3142] text-[#B0D7FF] flex items-center justify-center mb-3 sm:mb-4">
              <category.icon
                className="w-5 h-5 sm:w-6 sm:h-6"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#2D3142] mb-1">
              {category.title}
            </h3>
            <span className="text-[10px] sm:text-xs font-mono text-[#2D3142]/70 mb-2 block">
              {category.count} UNITS
            </span>
            <p className="text-[#2D3142]/60 text-xs sm:text-sm">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
