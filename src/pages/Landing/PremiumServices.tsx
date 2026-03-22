import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Ocean View Room",
    description:
      "Relax in our spacious ocean view rooms with modern amenities and private balconies overlooking the sea.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Mountain Suite",
    description:
      "Enjoy breathtaking mountain views from our luxury suites, featuring cozy interiors and elegant furnishings.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Private Villa",
    description:
      "Experience ultimate privacy and comfort in our private villas, complete with personal pools and garden spaces.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Spa & Wellness Center",
    description:
      "Rejuvenate with holistic spa treatments, sauna sessions, and wellness programs crafted for relaxation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Gourmet Dining",
    description:
      "Savor exquisite meals prepared by world-class chefs in our elegant restaurants with panoramic views.",
  },
];

export function PremiumServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-[#EAE8FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#B0D7FF]" />
            <span className="text-[12px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase">
              Hotel Amenities
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2D3142] tracking-tighter">
            The <span className="text-[#ADACB5] font-light italic">Luxury</span>{" "}
            Experience
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-200 lg:h-150">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative overflow-hidden rounded-4xl cursor-pointer bg-[#2D3142]"
                initial={false}
                animate={{
                  flex: isHovered ? 4 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.8 }}
                />

                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isHovered ? "bg-[#2D3142]/60" : "bg-[#2D3142]/40"
                  }`}
                />

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-[#EAE8FF]">
                  <AnimatePresence mode="wait">
                    {isHovered ? (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-md"
                      >
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#B0D7FF] uppercase mb-2 block">
                          Featured
                        </span>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-[#EAE8FF]/80 leading-relaxed mb-8 text-lg">
                          {service.description}
                        </p>
                        <button className="group flex items-center gap-3 bg-[#EAE8FF] text-[#2D3142] px-8 py-4 rounded-full font-bold hover:bg-[#B0D7FF] transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full flex items-center justify-center lg:justify-start"
                      >
                        <h3 className="text-xl font-bold whitespace-nowrap lg:-rotate-90 origin-center tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {isHovered && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 border-2 border-[#B0D7FF]/30 rounded-4xl pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
