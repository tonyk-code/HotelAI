import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
    title: "Oceanfront Living",
    tag: "Exclusive",
    description:
      "Private balconies overlooking the turquoise horizon, designed for serene mornings.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000",
    title: "Mountain Sanctuary",
    tag: "Retreat",
    description:
      "Breathtaking peak views from suites featuring cozy, hand-crafted interiors.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&q=80&w=1000",
    title: "Wellness & Spa",
    tag: "Revitalize",
    description:
      "Holistic treatments and thermal baths crafted for complete mind-body restoration.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&q=80&w=1000",
    title: "Gourmet Dining",
    tag: "Culinary",
    description:
      "Michelin-starred excellence paired with panoramic views of the estate.",
  },
];

export function PremiumServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 lg:py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                World-Class Amenities
              </span>
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-semibold text-[#111827] tracking-tight">
              The <span className="text-slate-300 font-light italic">Art</span>{" "}
              of Living
            </h2>
          </div>
          <p className="text-slate-500 text-lg font-light max-w-sm border-l border-slate-200 pl-6 hidden lg:block">
            Every detail is meticulously crafted to ensure your stay is as
            effortless as it is beautiful.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-175 lg:h-137.5">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative overflow-hidden rounded-[2.5rem] cursor-pointer bg-slate-200 shadow-sm"
                animate={{
                  flex: isHovered ? 3.5 : 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  animate={{
                    scale: isHovered ? 1.05 : 1.15,
                    filter: isHovered ? "grayscale(0%)" : "grayscale(30%)",
                  }}
                  transition={{ duration: 1.2 }}
                />

                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    isHovered
                      ? "bg-linear-to-t from-[#111827]/90 via-[#111827]/20 to-transparent"
                      : "bg-[#111827]/40"
                  }`}
                />

                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end text-white">
                  <AnimatePresence mode="wait">
                    {isHovered ? (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-md"
                      >
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B82F6] uppercase mb-3 block">
                          {service.tag}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed mb-8 text-lg">
                          {service.description}
                        </p>
                        <button className="group flex items-center gap-3 bg-white text-[#111827] px-8 py-4 rounded-2xl font-semibold hover:bg-[#3B82F6] hover:text-white transition-all">
                          Discover More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        className="h-full flex items-center justify-center lg:justify-start"
                      >
                        <h3 className="text-xl font-medium lg:-rotate-90 origin-center tracking-tight whitespace-nowrap">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
