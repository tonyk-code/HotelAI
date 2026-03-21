import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="py-32 px-6 bg-[#EAE8FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header: Hierarchy & Essentialism */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B0D7FF]/20 border border-[#B0D7FF]/30 text-[#2D3142] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              Global Discovery
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2D3142] tracking-tighter mb-6">
            Explore{" "}
            <span className="text-[#ADACB5] font-light italic">
              World-Class
            </span>{" "}
            Estates
          </h2>
        </div>

        {/* Filter Navigation: Guidance & Consistency */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex p-1.5 bg-[#D8D5DB]/30 backdrop-blur-md rounded-[20px] border border-[#ADACB5]/20">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-8 py-3 text-sm font-bold transition-all duration-500 rounded-[14px] ${
                  activeFilter === filter
                    ? "text-[#EAE8FF]"
                    : "text-[#2D3142]/60 hover:text-[#2D3142]"
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[#2D3142] rounded-[14px] shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid: Rhythmic Layout & Novelty */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* Image Wrap: Aesthetics */}
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#2D3142] fill-current" />
                    <span className="text-[13px] font-bold text-[#2D3142]">
                      {property.rating}
                    </span>
                  </div>
                </div>

                {/* Content: Optical Balance */}
                <div className="px-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D3142] mb-1 group-hover:text-[#ADACB5] transition-colors uppercase tracking-tight">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[#ADACB5]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold tracking-widest uppercase">
                          {property.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-[#ADACB5]/20">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#ADACB5] uppercase tracking-tighter leading-none mb-1">
                        Price / Night
                      </span>
                      <span className="text-3xl font-bold text-[#2D3142]">
                        ${property.price}
                      </span>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-[#2D3142] flex items-center justify-center transition-all duration-500 group-hover:bg-[#2D3142] group-hover:text-[#EAE8FF]">
                      <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
