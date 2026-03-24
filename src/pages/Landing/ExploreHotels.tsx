import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const filters = ["All", "Hotels", "Villas", "Resorts", "Cottages"];

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1728049006339-1cc328a28ab0?auto=format&fit=crop&q=80&w=800",
    name: "Tropical Paradise Villa",
    price: 520,
    location: "Phuket, Thailand",
    rating: 4.9,
    type: "Villas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728049006343-9ee0187643d5?auto=format&fit=crop&q=80&w=800",
    name: "Garden View Resort",
    price: 390,
    location: "Nosara, Costa Rica",
    rating: 4.7,
    type: "Resorts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728049006562-236e5b0dddea?auto=format&fit=crop&q=80&w=800",
    name: "Forest Retreat Cottage",
    price: 280,
    location: "Banff, Canada",
    rating: 4.8,
    type: "Cottages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612320743558-020669ff20e8?auto=format&fit=crop&q=80&w=800",
    name: "Grand Metropolitan Hotel",
    price: 340,
    location: "Mayfair, London",
    rating: 4.6,
    type: "Hotels",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728049006363-f8e583040180?auto=format&fit=crop&q=80&w=800",
    name: "Sunset Villa Estate",
    price: 680,
    location: "Oia, Santorini",
    rating: 5.0,
    type: "Villas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728048756779-ed7f123d371f?auto=format&fit=crop&q=80&w=800",
    name: "Eco Resort Paradise",
    price: 450,
    location: "Uluwatu, Bali",
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
    <section id="explore" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[#1E3A8A] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold tracking-wider uppercase">
              Curated Discovery
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-semibold text-[#111827] tracking-tight mb-6">
            Find your{" "}
            <span className="text-slate-400 font-light italic text-5xl md:text-7xl">
              perfect getaway
            </span>
          </h2>
          <p className="max-w-2xl text-slate-500 text-lg font-light leading-relaxed">
            A handpicked selection of global sanctuaries, from metropolitan
            heights to hidden coastal retreats.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <div className="flex p-1.5 bg-slate-50 border border-slate-100 rounded-4xl gap-1 overflow-x-auto no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-8 py-3 text-sm font-semibold rounded-full transition-all duration-500 whitespace-nowrap ${
                  activeFilter === filter
                    ? "text-[#1E3A8A]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white shadow-sm border border-slate-100 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                layout
                key={property.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 overflow-hidden mb-6 rounded-[2.5rem] shadow-sm">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-[#111827]">
                      {property.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">
                      {property.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#111827] mb-6 group-hover:text-[#3B82F6] transition-colors">
                    {property.name}
                  </h3>

                  <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Starting from
                      </span>
                      <span className="text-2xl font-bold text-[#1E3A8A]">
                        ${property.price}
                        <span className="text-sm font-light text-slate-400">
                          /nt
                        </span>
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-[#1E3A8A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
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
