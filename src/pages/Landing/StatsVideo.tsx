import { useState, useRef } from "react";
import { motion } from "framer-motion";
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
    <section
      id="stats"
      className="relative py-24 lg:py-32 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,58,138,0.15)] group bg-slate-100">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://media.istockphoto.com/id/1260651267/video/luxury-hotel-rooms-corridor.mp4?s=mp4-640x640-is&k=20&c=HGXep7MhK5b5Haqej-ohZhN_57rb78UBVjIMs2no4Gs="
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-90 text-[#1E3A8A]"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 ml-1 fill-current" />
            )}
          </button>
        </div>

        <div className="mt-20 w-full grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center lg:items-start group"
            >
              <div className="hidden lg:block absolute -left-6 top-0 w-px h-full bg-slate-100 group-hover:bg-[#3B82F6] transition-colors" />

              <div className="flex items-center gap-3 mb-2 text-[#3B82F6]">
                <stat.icon className="w-5 h-5" strokeWidth={2} />
                <span className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tighter">
                  {stat.value}
                </span>
              </div>

              <p className="text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                {stat.label}
              </p>

              <p className="mt-3 text-sm text-slate-500 font-light text-center lg:text-left hidden md:block">
                Recognized excellence in high-end hospitality across the globe.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
