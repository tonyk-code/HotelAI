import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Check, Star, Wind, Wifi, Coffee } from "lucide-react";
import { rooms } from "../../data/mockData";

export function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = useState(false);

  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-400 font-medium italic">Accommodation not found.</p>
      </div>
    );
  }

  const handleBooking = () => {
    setIsBooked(true);
  };

  return (
    /* Changed min-h-screen to h-full and overflow-hidden 
      to ensure it stays inside your GuestLayout main area.
    */
    <div className="h-full bg-white flex flex-col overflow-hidden">
      
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* 1. Hero Section - Height is relative to view height */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          <button
            onClick={() => navigate(-1)}
            className="absolute top-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center transition-all hover:bg-white hover:text-[#1E3A8A] text-white shadow-2xl z-20"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Content wrapper */}
        <div className="max-w-4xl mx-auto px-8 -mt-12 relative z-10 pb-12">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-50">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 pb-10 border-b border-slate-50">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-normal">
                    {room.rating} Rating • Verified Stay
                  </span>
                </div>
                <h1 className="text-4xl font-semibold text-[#111827] tracking-tight leading-[1.1]">
                  {room.name}
                </h1>
              </div>

              <div className="bg-[#F8FAFC] px-8 py-5 rounded-3xl text-right min-w-40">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Per Night</p>
                <p className="text-4xl font-bold text-[#1E3A8A] tracking-tighter">${room.price}</p>
              </div>
            </div>

            {/* Grid Layout for Space & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-[#111827] mb-4">The Space</h2>
                <p className="text-[16px] leading-[1.7] text-[#6B7280] font-normal">
                  {room.description}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-bold text-[#111827] uppercase tracking-normal">Key Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Wind className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">Climate Control</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Wifi className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">High-speed Fiber</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Coffee className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">Mini Bar & Coffee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#111827] mb-6">In-Room Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-2xl border border-transparent transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-500 transition-colors">
                      <Check className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action Area */}
            <div className="pt-8 border-t border-slate-50">
              {isBooked ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-4xl p-8 text-center animate-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Reservation Confirmed</h3>
                  <p className="text-emerald-700/70 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                    We've prepared everything for your arrival at {room.name}.
                  </p>
                  <button
                    onClick={() => navigate("/app/profile")}
                    className="px-8 py-4 bg-white text-emerald-700 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md transition-all border border-emerald-100"
                  >
                    View My Itinerary
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleBooking}
                  className="w-full h-18 bg-[#1E3A8A] text-white rounded-[1.8rem] text-lg font-bold shadow-2xl shadow-blue-900/20 hover:bg-[#3B82F6] transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  Reserve this Suite
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}