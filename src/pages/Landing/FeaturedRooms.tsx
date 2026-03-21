import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Bed,
  Bath,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Replace hotels with rooms
const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Ocean View Room",
    price: 450,
    beds: 2,
    bathrooms: 1,
    location: "Maldives",
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Mountain Room",
    price: 320,
    beds: 1,
    bathrooms: 1,
    location: "Swiss Alps",
    rating: 4.8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Balcony Suite",
    price: 580,
    beds: 3,
    bathrooms: 2,
    location: "Bali",
    rating: 5.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Luxury Suite",
    price: 280,
    beds: 1,
    bathrooms: 1,
    location: "New York",
    rating: 4.7,
  },
  {
    image:
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Desert Room",
    price: 410,
    beds: 2,
    bathrooms: 1,
    location: "Dubai",
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Lakeview Room",
    price: 350,
    beds: 2,
    bathrooms: 1,
    location: "Lake Como",
    rating: 4.8,
  },
];

export function FeaturedRooms() {
  const visible = 4;

  // Clone edges for infinite loop
  const extendedRooms = [
    ...rooms.slice(-visible),
    ...rooms,
    ...rooms.slice(0, visible),
  ];

  const [index, setIndex] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(true);

  const next = () => {
    setIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (index === rooms.length + visible) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(visible);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(rooms.length);
      }, 600);
    }
  }, [index]);

  return (
    <section id="rooms" className="py-32 px-6 bg-[#EAE8FF]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[12px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase mb-4 block">
              Available Rooms
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2D3142] tracking-tight">
              Book Your{" "}
              <span className="text-[#ADACB5] font-light italic">Room</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-5 rounded-full border border-[#ADACB5]/30 text-[#2D3142] hover:bg-[#2D3142] hover:text-[#EAE8FF] active:scale-90 transition-all duration-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="p-5 rounded-full bg-[#2D3142] text-[#EAE8FF] hover:bg-[#B0D7FF] hover:text-[#2D3142] active:scale-90 shadow-xl shadow-[#2D3142]/10 transition-all duration-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * 25}%` }}
            transition={
              isAnimating
                ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0 }
            }
            className="flex"
          >
            {extendedRooms.map((room, i) => (
              <div
                key={i}
                className="min-w-[25%] px-4 group relative cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6 shadow-sm">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5 backdrop-blur-md bg-white/80 px-3 py-1.5 rounded-2xl flex items-center gap-2 border border-white/20">
                    <Star className="w-3.5 h-3.5 text-[#2D3142] fill-current" />
                    <span className="text-[13px] font-bold text-[#2D3142]">
                      {room.rating}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="w-full flex justify-between items-center text-[#EAE8FF]">
                      <span className="text-2xl font-bold">
                        ${room.price}
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

                <div className="px-2">
                  <div className="flex items-center gap-1.5 text-[#ADACB5] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[12px] font-bold uppercase tracking-wider">
                      {room.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2D3142] mb-4 transition-colors group-hover:text-[#ADACB5]">
                    {room.name}
                  </h3>

                  <div className="flex items-center gap-6 text-[#2D3142]/60 pt-4 border-t border-[#ADACB5]/20">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-sm font-medium">
                        {room.beds} Beds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-sm font-medium">
                        {room.bathrooms} Baths
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
