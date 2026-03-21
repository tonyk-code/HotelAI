import { Star, MapPin, Bed, Bath, ArrowUpRight } from "lucide-react";

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
];

export function FeaturedRooms() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EAE8FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#ADACB5] uppercase">
            Available Rooms
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3142] mt-2">
            Book Your <span className="text-[#ADACB5] font-light italic">Room</span>
          </h2>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-none -ms-overflow-style-none scrollbar-width-none">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="shrink-0 w-72 sm:w-80 md:w-96 snap-start bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-xl flex items-center gap-1 border border-white/30">
                  <Star className="w-3 h-3 text-[#2D3142] fill-current" />
                  <span className="text-xs font-bold text-[#2D3142]">{room.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-[#ADACB5] mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[11px] font-bold uppercase">{room.location}</span>
                </div>

                <h3 className="text-lg font-bold text-[#2D3142] mb-2">{room.name}</h3>

                <div className="flex items-center justify-between text-sm text-[#2D3142]/70 mb-3">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4" /> {room.beds} Beds
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4" /> {room.bathrooms} Baths
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#2D3142]">${room.price}/nt</span>
                  <div className="w-8 h-8 rounded-full bg-[#B0D7FF] flex items-center justify-center text-[#2D3142]">
                    <ArrowUpRight className="w-4 h-4" />
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