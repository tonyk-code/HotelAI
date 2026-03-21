import { useState, useRef } from "react";
import { Play, Pause, Users, Globe, Award, MapPin } from "lucide-react";

export function StatsVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const stats = [
    { label: "Global Stays", value: "100k+", icon: Globe },
    { label: "Happy Guests", value: "800k+", icon: Users },
    { label: "Boutique Hotels", value: "15k+", icon: MapPin },
    { label: "Luxury Awards", value: "120+", icon: Award },
  ];

  return (
    <section className="py-48 px-6 bg-white overflow-hidden min-h-[120vh] relative flex flex-col items-center">
      <div className="relative z-30 w-full max-w-4xl group">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#2D3142]/20">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://media.istockphoto.com/id/1260651267/video/luxury-hotel-rooms-corridor.mp4?s=mp4-640x640-is&k=20&c=HGXep7MhK5b5Haqej-ohZhN_57rb78UBVjIMs2no4Gs="
          />

          <button
            onClick={togglePlay}
            className="absolute cursor-pointer inset-0 m-auto w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all text-[#2D3142]"
          >
            {isPlaying ? (
              <Pause className="fill-current" />
            ) : (
              <Play className="ml-1 fill-current" />
            )}
          </button>
        </div>
      </div>

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[90%] max-w-275 h-125 bg-[#EAE8FF]/40 rounded-[60px] z-10 overflow-hidden border border-[#EAE8FF]">
        <div className="absolute inset-0 bg-[#B0D7FF]" />

        <img
          src="https://images.unsplash.com/photo-1672398812538-97f15b05209f?q=80&w=1470&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-multiply opacity-10"
          alt="LuxeStay Architectural Pattern"
        />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-12 z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-10 px-8 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-sm border border-white/50">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#2D3142] tracking-tighter mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#ADACB5] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
