import { useState } from "react";
import { Calendar, Clock, Check, X, MapPin } from "lucide-react";
import { events } from "../../data/mockData";

// --- Custom Internal Toast (Built-in) ---
const CustomToast = ({ message, onClose }: any) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
    <div className="bg-[#1E3A8A] text-white shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[320px]">
      <div className="bg-white/20 p-1.5 rounded-lg">
        <Check className="w-4 h-4 text-white" />
      </div>
      <p className="text-sm font-bold flex-1">{message}</p>
      <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export function Events() {
  const [registeredEvents, setRegisteredEvents] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);

  const handleEventRegistration = (eventId: string, eventName: string) => {
    setRegisteredEvents((prev) => new Set(prev).add(eventId));
    setToast(`You're booked for ${eventName}`);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="min-h-screen pb-20">
      {toast && <CustomToast message={toast} onClose={() => setToast(null)} />}

      {/* Header Section */}
      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] tracking-tight">
            Hotel <span className="text-slate-400 font-light">Events</span>
          </h1>
          <p className="text-slate-500 text-lg">Curated experiences for our distinguished guests.</p>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 gap-12">
          {events.map((event) => {
            const isRegistered = registeredEvents.has(event.id);

            return (
              <div 
                key={event.id} 
                className="group flex flex-col lg:flex-row bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#1E3A8A] shadow-sm">
                      Exclusive
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{event.time}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 group-hover:text-[#3B82F6] transition-colors">
                    {event.name}
                  </h2>
                  
                  <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
                    {event.description}
                  </p>

                  <div className="mt-auto">
                    {isRegistered ? (
                      <div className="flex items-center gap-3 px-8 py-4 bg-emerald-50 border border-emerald-100 rounded-2xl w-full lg:w-fit">
                        <div className="bg-emerald-500 rounded-full p-1">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-bold text-emerald-700 uppercase tracking-tight">
                          Reservation Confirmed
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEventRegistration(event.id, event.name)}
                        className="w-full lg:w-fit px-10 py-4 bg-[#1E3A8A] text-white rounded-2xl text-sm font-bold hover:bg-[#3B82F6] hover:-translate-y-1 transition-all active:scale-95 shadow-lg shadow-blue-900/10"
                      >
                        Book Experience
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}