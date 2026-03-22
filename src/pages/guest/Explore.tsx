import { useState } from "react";
import { useNavigate } from "react-router";
import { rooms } from "../../data/mockData";
import { Star, SlidersHorizontal, Search } from "lucide-react";
import Card from "../../components/ui/Card";

const FilterChip = ({ label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 border ${
      active 
        ? "bg-[#1E3A8A] border-[#1E3A8A] text-white" 
        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
    }`}
  >
    {label}
  </button>
);

export function Explore() {
  const navigate = useNavigate();
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredRooms = rooms.filter((room) => {
    if (priceFilter !== "all") {
      if (priceFilter === "low" && room.price > 250) return false;
      if (priceFilter === "high" && room.price <= 250) return false;
    }
    if (typeFilter !== "all" && room.type.toLowerCase() !== typeFilter.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="min-h-screen  pb-20">
      {/* Refined Header */}
      <div className="px-6 md:px-12 py-16 max-w-(screen-2xl) mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] tracking-tight">
              Find your <span className="text-slate-400 font-normal">perfect stay</span>
            </h1>
            <p className="text-slate-500 text-lg">Browse our curated collection of boutique suites.</p>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <SlidersHorizontal className="w-4 h-4" />
            <span>{filteredRooms.length} rooms available</span>
          </div>
        </div>

        {/* Filter Section - Natural Spacing */}
        <div className="mt-12 flex flex-col gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tight w-20">Category</span>
            <div className="flex flex-wrap gap-2">
              {["all", "suite", "deluxe", "studio"].map((t) => (
                <FilterChip 
                  key={t} 
                  label={t.charAt(0).toUpperCase() + t.slice(1)} 
                  active={typeFilter === t} 
                  onClick={() => setTypeFilter(t)} 
                />
              ))}
            </div>
          </div>
          
          <div className="h-px bg-slate-50 w-full" />

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tight w-20">Budget</span>
            <div className="flex flex-wrap gap-2">
              <FilterChip label="Any Price" active={priceFilter === "all"} onClick={() => setPriceFilter("all")} />
              <FilterChip label="Under $250" active={priceFilter === "low"} onClick={() => setPriceFilter("low")} />
              <FilterChip label="Premium $250+" active={priceFilter === "high"} onClick={() => setPriceFilter("high")} />
            </div>
          </div>
        </div>
      </div>

      {/* Grid - Solid & Readable */}
      <div className="max-w-(screen-2xl) mx-auto px-6 md:px-12">
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            {filteredRooms.map((room) => (
              <Card
                key={room.id}
                className="group flex flex-col overflow-hidden border-none shadow-md hover:shadow-2xl"
                onClick={() => navigate(`/app/explore/${room.id}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      <span className="text-xs font-bold text-[#1E3A8A]">{room.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#1E3A8A] leading-tight group-hover:text-[#3B82F6] transition-colors">
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#1E3A8A]">${room.price}</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase">per night</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {room.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-[#1E3A8A] text-white text-sm font-semibold rounded-2xl transition-all hover:bg-[#3B82F6] active:scale-95">
                    View Room
                  </button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-slate-100 rounded-[3rem]">
            <Search className="w-10 h-10 text-slate-200 mb-4" />
            <h3 className="text-xl font-semibold text-slate-400">No rooms found</h3>
            <button onClick={() => {setPriceFilter("all"); setTypeFilter("all");}} className="text-[#3B82F6] font-bold mt-2">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
}