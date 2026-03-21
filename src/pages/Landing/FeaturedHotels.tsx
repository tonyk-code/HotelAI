import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Bed,
  Bath,
  ArrowUpRight
} from "lucide-react";
import { motion , AnimatePresence } from "framer-motion";

const hotels = [
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Azure Bay Resort",
    price: 450,
    rooms: 3,
    bathrooms: 2,
    location: "Maldives",
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Mountain View Lodge",
    price: 320,
    rooms: 2,
    bathrooms: 2,
    location: "Swiss Alps",
    rating: 4.8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Coastal Paradise Villa",
    price: 580,
    rooms: 4,
    bathrooms: 3,
    location: "Bali",
    rating: 5.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Urban Luxury Suite",
    price: 280,
    rooms: 1,
    bathrooms: 1,
    location: "New York",
    rating: 4.7,
  },
  {
    image:
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Desert Oasis Resort",
    price: 410,
    rooms: 3,
    bathrooms: 2,
    location: "Dubai",
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Lakeside Retreat",
    price: 350,
    rooms: 2,
    bathrooms: 2,
    location: "Lake Como",
    rating: 4.8,
  },
];

export function FeaturedHotels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= hotels.length - (itemsPerPage - 1) ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, hotels.length - itemsPerPage) : prev - 1,
    );
  };

  return (
    <section className="py-32 px-6 bg-[#EAE8FF]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header: Hierarchy & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[12px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2D3142] tracking-tight">
              Premium{" "}
              <span className="text-[#ADACB5] font-light italic">Hotels</span>
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-5 rounded-full border border-[#ADACB5]/30 text-[#2D3142] hover:bg-[#2D3142] hover:text-[#EAE8FF] transition-all duration-500 group"
            >
              <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
            </button>
            <button
              onClick={next}
              className="p-5 rounded-full bg-[#2D3142] text-[#EAE8FF] hover:bg-[#B0D7FF] hover:text-[#2D3142] shadow-xl shadow-[#2D3142]/10 transition-all duration-500 group"
            >
              <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Hotel Grid: Rhythmic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {hotels
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((hotel, index) => (
                <motion.div
                  key={hotel.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="group relative cursor-pointer"
                >
                  {/* Image Section: Aesthetics & Novelty */}
                  <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6 shadow-sm">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Floating AI Rating: Essentialism */}
                    <div className="absolute top-5 left-5 backdrop-blur-md bg-white/80 px-3 py-1.5 rounded-2xl flex items-center gap-2 border border-white/20">
                      <Star className="w-3.5 h-3.5 text-[#2D3142] fill-current" />
                      <span className="text-[13px] font-bold text-[#2D3142]">
                        {hotel.rating}
                      </span>
                    </div>

                    {/* Price Hover Label: Guidance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="w-full flex justify-between items-center text-[#EAE8FF]">
                        <span className="text-2xl font-bold">
                          ${hotel.price}
                          <small className="text-sm font-normal opacity-70">
                            /nt
                          </small>
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#B0D7FF] flex items-center justify-center text-[#2D3142]">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Section: Optical Balance */}
                  <div className="px-2">
                    <div className="flex items-center gap-1.5 text-[#ADACB5] mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-[12px] font-bold uppercase tracking-wider">
                        {hotel.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2D3142] mb-4 transition-colors group-hover:text-[#ADACB5]">
                      {hotel.name}
                    </h3>

                    {/* Detailed Specs: Consistency */}
                    <div className="flex items-center gap-6 text-[#2D3142]/60 pt-4 border-t border-[#ADACB5]/20">
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" strokeWidth={1.5} />
                        <span className="text-sm font-medium">
                          {hotel.rooms} Beds
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4" strokeWidth={1.5} />
                        <span className="text-sm font-medium">
                          {hotel.bathrooms} Baths
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
