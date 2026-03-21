import { useState } from "react";
import { Star, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const filters = ["All", "Hotels", "Villas", "Resorts", "Cottages"];

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1728049006339-1cc328a28ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Tropical Paradise Villa",
    price: 520,
    location: "Thailand",
    rating: 4.9,
    type: "Villas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728049006343-9ee0187643d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Garden View Resort",
    price: 390,
    location: "Costa Rica",
    rating: 4.7,
    type: "Resorts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728049006562-236e5b0dddea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Forest Retreat Cottage",
    price: 280,
    location: "Canada",
    rating: 4.8,
    type: "Cottages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612320743558-020669ff20e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Grand Metropolitan Hotel",
    price: 340,
    location: "London",
    rating: 4.6,
    type: "Hotels",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728049006363-f8e583040180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Sunset Villa Estate",
    price: 680,
    location: "Santorini",
    rating: 5.0,
    type: "Villas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728048756779-ed7f123d371f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Eco Resort Paradise",
    price: 450,
    location: "Bali",
    rating: 4.9,
    type: "Resorts",
  },
];

export function ExploreHotels() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.type === activeFilter);

  return (
    <section className="py-24 px-6 bg-[#F9F8FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B0D7FF]/20 border border-[#B0D7FF]/30 text-[#2D3142] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              Featured Rooms
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] mb-2">
            Curated stays for your{" "}
            <span className="text-[#ADACB5] font-light italic">
              perfect getaway
            </span>
          </h2>
          <p className="max-w-2xl text-[#2D3142]/70 text-base md:text-lg">
            Explore our handpicked selection of rooms, villas, and suites for
            comfort and style.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#EAE8FF]/50 rounded-full p-1 border border-[#ADACB5]/20">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-[#2D3142] text-white shadow-md"
                    : "text-[#2D3142]/70 hover:text-[#2D3142]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((property) => (
            <div
              key={property.name}
              className="group cursor-pointer rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-[32px]">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#2D3142] fill-current" />
                  <span className="text-[13px] font-bold text-[#2D3142]">
                    {property.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-bold text-[#2D3142] mb-1 uppercase tracking-tight">
                  {property.name}
                </h3>
                <div className="flex items-center gap-1.5 text-[#ADACB5] mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    {property.location}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#ADACB5]/20">
                  <span className="text-3xl font-bold text-[#2D3142]">
                    ${property.price}
                  </span>
                  <div className="w-14 h-14 rounded-full border border-[#2D3142] flex items-center justify-center transition-all duration-300 group-hover:bg-[#2D3142] group-hover:text-[#EAE8FF]">
                    <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
