import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1769011496342-2bd1ad232d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Luxury Spa & Wellness",
    description:
      "Rejuvenate your body and mind with our world-class spa treatments and wellness programs designed by experts.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Fine Dining Experience",
    description:
      "Savor exquisite cuisines prepared by Michelin-star chefs in our elegant restaurants with breathtaking views.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Infinity Pools",
    description:
      "Dive into luxury with our stunning infinity pools offering panoramic views of exotic landscapes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Concierge Services",
    description:
      "Our dedicated concierge team is available 24/7 to assist with reservations, tours, and special requests.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Private Suites",
    description:
      "Experience ultimate comfort in our spacious private suites featuring modern amenities and elegant design.",
  },
];

export function PremiumServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to first for Hierarchy

  return (
    <section className="py-32 px-6 bg-[#EAE8FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header: Essentialism & Clarity */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#B0D7FF]" />
            <span className="text-[12px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase">
              Elevated Living
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2D3142] tracking-tighter">
            The <span className="text-[#ADACB5] font-light italic">Art</span> of
            Service
          </h2>
        </div>

        {/* Accordion: Novelty & High-Performance Motion */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative overflow-hidden rounded-[32px] cursor-pointer bg-[#2D3142]"
                initial={false}
                animate={{
                  flex: isHovered ? 4 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1], // Premium hardware-like feel
                }}
              >
                {/* Background Image with subtle scale on hover */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Overlay: Essentialism (Darker gradient for better text readability) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isHovered ? "bg-[#2D3142]/60" : "bg-[#2D3142]/40"
                  }`}
                />

                {/* Content Container */}
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
                          Premium Tier
                        </span>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-[#EAE8FF]/80 leading-relaxed mb-8 text-lg">
                          {service.description}
                        </p>
                        <button className="group flex items-center gap-3 bg-[#EAE8FF] text-[#2D3142] px-8 py-4 rounded-full font-bold hover:bg-[#B0D7FF] transition-all">
                          Experience Now
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
                        <h3 className="text-xl font-bold whitespace-nowrap lg:rotate-[-90deg] origin-center tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle Inner Border Glow (Aesthetics) */}
                {isHovered && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 border-2 border-[#B0D7FF]/30 rounded-[32px] pointer-events-none"
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
