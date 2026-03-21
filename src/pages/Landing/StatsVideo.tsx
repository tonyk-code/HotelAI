import { useState, useRef } from "react";
import { Play, Pause, Users, Globe, Award, MapPin } from "lucide-react";

export function StatsVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const stats = [
    { label: "Global Stays", value: "100k+", icon: Globe },
    { label: "Happy Guests", value: "800k+", icon: Users },
    { label: "Boutique Hotels", value: "15k+", icon: MapPin },
    { label: "Luxury Awards", value: "120+", icon: Award },
  ];

  return (
    <section className="relative py-32 px-4 md:px-8 bg-white flex flex-col items-center">
      {/* Video Container */}
      <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1260651267/video/luxury-hotel-rooms-corridor.mp4?s=mp4-640x640-is&k=20&c=HGXep7MhK5b5Haqej-ohZhN_57rb78UBVjIMs2no4Gs="
        />
        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform text-gray-900"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 md:w-8 md:h-8" />
          ) : (
            <Play className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </button>
      </div>

      <div className="mt-12 w-full max-w-4xl grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-lg rounded-xl py-6 px-4 flex flex-col items-center shadow-md border border-white/30 transition-transform hover:scale-105"
          >
            <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-300 mb-2" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase mt-1 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
