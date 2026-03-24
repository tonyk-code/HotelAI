import { Star, MapPin, Bed, Bath, ArrowRight } from "lucide-react";

const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
    name: "Ocean View Villa",
    price: 450,
    beds: 2,
    bathrooms: 1,
    location: "Maldives",
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
    name: "Alpine Peak Suite",
    price: 320,
    beds: 1,
    bathrooms: 1,
    location: "Swiss Alps",
    rating: 4.8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    name: "Tropical Sanctuary",
    price: 580,
    beds: 3,
    bathrooms: 2,
    location: "Bali",
    rating: 5.0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?auto=format&fit=crop&q=80&w=800",
    name: "The Manhattan Loft",
    price: 280,
    beds: 1,
    bathrooms: 1,
    location: "New York",
    rating: 4.7,
  },
];

export function FeaturedRooms() {
  return (
    <section id="rooms" className="py-24 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-wider text-[#3B82F6] uppercase">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111827] tracking-tight mt-3">
              Book Your{" "}
              <span className="text-slate-400 font-light italic">
                Sanctuary
              </span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#1E3A8A] font-bold text-sm group">
            VIEW ALL ROOMS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-full snap-start group cursor-pointer"
            >
              <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-5 right-5 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/30 shadow-sm">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-[#111827]">
                    {room.rating}
                  </span>
                </div>

                <div className="absolute bottom-5 right-5 bg-[#111827] text-white px-4 py-2 rounded-2xl">
                  <span className="text-sm font-semibold">${room.price}</span>
                  <span className="text-[10px] opacity-60 ml-1">/ night</span>
                </div>
              </div>

              <div className="px-2 space-y-3">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[11px] font-bold uppercase tracking-wide">
                    {room.location}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#3B82F6] transition-colors">
                  {room.name}
                </h3>

                <div className="flex items-center gap-6 text-sm text-slate-500 font-light">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-slate-300" /> {room.beds} Beds
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-slate-300" /> {room.bathrooms}{" "}
                    Baths
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
