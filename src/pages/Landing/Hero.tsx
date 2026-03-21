import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Hero() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-[#EAE8FF] overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#2D3142] hidden lg:block"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10"
      >
        <div className="space-y-6">
          <motion.div
            variants={itemVars}
            className="inline-flex items-center gap-2 px-3 py-1 mt-5 lg:mt-0 rounded-full bg-[#B0D7FF]/30 border border-[#B0D7FF]/50"
          >
            <Sparkles className="w-4 h-4 text-[#2D3142]" />
            <span className="text-[12px] font-bold tracking-widest text-[#2D3142] uppercase">
              Luxury Retreats
            </span>
          </motion.div>

          <motion.h1
            variants={itemVars}
            className="text-5xl lg:text-7xl font-bold text-[#2D3142] leading-[1.1] tracking-tight"
          >
            Your Next <br />
            <span className="text-[#ADACB5] font-light italic text-6xl lg:text-8xl">
              Dream Stay
            </span>
          </motion.h1>

          <motion.p
            variants={itemVars}
            className="text-lg text-[#2D3142]/70 max-w-lg leading-relaxed"
          >
            Explore top-rated hotels and cozy getaways. Find the perfect room for 
            your trip, whether it’s city adventures or peaceful escapes.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4">
            <button className="bg-[#2D3142] text-[#EAE8FF] px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#3d4259] transition-all">
              Book Now
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-4/5 rounded-[40px] overflow-hidden border-12 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1694967832949-09984640b143?auto=format&fit=crop&q=80&w=800"
              alt="Serene mountain resort room with a view"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}