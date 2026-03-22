import { useNavigate } from "react-router";
import {
  Search,
  ConciergeBell,
  Calendar,
  MessageSquare,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { rooms, events } from "../../data/mockData";
import Card from "../../components/ui/Card";
import ActionButton from "../../components/ui/ActionButton";

export function Home() {
  const navigate = useNavigate();
  const recommendedRooms = rooms.slice(0, 2);
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="min-h-screen  pb-12 p-6  md:p-10">
      <div className="relative h-[45vh] md:h-[50vh] overflow-hidden rounded-[3.5rem] shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?q=80&w=1080&auto=format&fit=crop"
          alt="Lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80 mb-2">
            Grand Luxe Hotel
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">
            Welcome back,{" "}
            <span className="font-semibold text-[#3B82F6]">Sarah</span>
          </h1>
          <p className="text-lg font-light opacity-90 max-w-md leading-relaxed">
            Your sanctuary in the heart of the city is ready for your arrival.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 space-y-12">
        <Card className="p-5 bg-white/80 backdrop-blur-md border-[#3B82F6]/20 ring-4 ring-[#3B82F6]/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#3B82F6]/10 rounded-full flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Based on your previous stays, we've personalized your dashboard
              and room selections.
            </p>
          </div>
        </Card>

        <section>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1E3A8A]">
              Quick Actions
            </h2>
            <div className="h-px flex-1 bg-gray-100 ml-6 mb-2 opacity-50" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ActionButton
              icon={Search}
              label="Find Room"
              onClick={() => navigate("/app/explore")}
            />
            <ActionButton
              icon={ConciergeBell}
              label="Service"
              onClick={() => navigate("/app/services")}
            />
            <ActionButton
              icon={Calendar}
              label="Events"
              onClick={() => navigate("/app/events")}
            />
            <ActionButton
              icon={MessageSquare}
              label="Feedback"
              onClick={() => navigate("/app/chat")}
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1E3A8A]">
                Curated for You
              </h2>
              <span className="px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] text-[9px] font-black uppercase tracking-widest rounded-md">
                AI Pick
              </span>
            </div>

            <button
              onClick={() => navigate("/app/explore")}
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] hover:text-[#1E3A8A] transition-colors"
            >
              View All Rooms
              <div className="w-6 h-6 rounded-full bg-[#3B82F6]/5 flex items-center justify-center group-hover:bg-[#3B82F6]/10 transition-all">
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendedRooms.map((room) => (
              <Card
                key={room.id}
                className="group flex flex-col overflow-hidden"
                onClick={() => navigate(`/room/${room.id}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-[#1E3A8A] shadow-sm">
                    ${room.price}
                    <span className="text-gray-400 font-normal"> /night</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-[#1E3A8A]">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold">{room.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase tracking-widest font-bold text-[#94A3B8] border border-gray-100 px-2 py-1 rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1E3A8A] mb-6">
            Exclusive Events
          </h2>
          <div className="flex flex-col gap-6 pb-4 ">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="min-w-75 shrink-0 flex items-center p-3 gap-4"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={event.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#1E3A8A] truncate">
                    {event.name}
                  </h4>
                  <p className="text-[10px] text-[#3B82F6] font-semibold mt-1 uppercase tracking-wider">
                    {event.date}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1 line-clamp-1">
                    {event.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
