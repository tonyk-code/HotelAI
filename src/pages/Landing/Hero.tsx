import { motion, type Variants } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center bg-[#F8FAFC] overflow-hidden pt-10"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1E3A8A]/5 hidden lg:block" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center z-10"
      >
        <div className="space-y-8">
          <motion.div
            variants={itemVars}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[11px] font-bold tracking-wider text-[#1E3A8A] uppercase">
              2026 Collection
            </span>
          </motion.div>

          <motion.h1
            variants={itemVars}
            className="text-6xl lg:text-8xl font-semibold text-[#111827] leading-[0.95] tracking-tight"
          >
            Your Next <br />
            <span className="text-[#3B82F6] font-light italic">Dream Stay</span>
          </motion.h1>

          <motion.p
            variants={itemVars}
            className="text-lg lg:text-xl text-slate-500 max-w-md leading-relaxed font-light"
          >
            A sanctuary of sophisticated design and curated experiences,
            tailored to your unique journey.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4 pt-4">
            <button className="group flex items-center gap-3 bg-[#1E3A8A] text-white px-10 py-5 rounded-2xl font-semibold shadow-2xl shadow-blue-900/20 hover:bg-[#3B82F6] transition-all active:scale-95">
              Explore Rooms
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-4/5 rounded-[60px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,58,138,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1694967832949-09984640b143?auto=format&fit=crop&q=80&w=800"
              alt="Luxury resort room"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-700">
                <span className="text-[#1E3A8A] font-bold">500+</span> guests
                staying <br /> with us today
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
