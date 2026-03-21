import { motion } from 'framer-motion';
import { Home, Building2, Palmtree, Mountain, ArrowUpRight } from 'lucide-react';

const categories = [
  { icon: Home, title: 'Private Villas', count: '124', description: 'Exclusive secluded stays' },
  { icon: Building2, title: 'Urban Hotels', count: '86', description: 'Central business luxury' },
  { icon: Palmtree, title: 'Beach Resorts', count: '52', description: 'Oceanfront paradise' },
  { icon: Mountain, title: 'Mountain Cottages', count: '31', description: 'Quiet alpine retreats' },
];

// Animation Variants for performance (Defined outside component to prevent re-renders)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function Categories() {
  return (
    <section className="py-32 px-6 bg-[#EAE8FF] overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Triggers before it hits the top
      >
        
        {/* Header Section Animation */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#ADACB5] uppercase mb-4 block">
              Curated Collections
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] tracking-tight leading-none">
              Browse by <span className="text-[#ADACB5] font-light italic">Atmosphere</span>
            </h2>
          </div>
          <p className="text-[#2D3142]/60 font-medium max-w-[300px] leading-relaxed border-l border-[#ADACB5] pl-6">
            AI-sorted categories based on your travel DNA and past preferences.
          </p>
        </motion.div>

        {/* Grid: Uses staggerChildren for the "One-by-One" reveal */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ADACB5]/20 border border-[#ADACB5]/20 overflow-hidden rounded-[40px] shadow-2xl shadow-[#2D3142]/5"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
              className="group relative bg-[#EAE8FF] p-12 flex items-start gap-8 transition-colors cursor-pointer"
            >
              {/* Icon Container with hover rotation */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#2D3142] text-[#B0D7FF] flex items-center justify-center transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <category.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#2D3142] tracking-tight">{category.title}</h3>
                  <span className="text-[11px] font-mono font-bold text-[#2D3142] py-1 px-3 bg-[#B0D7FF] rounded-full">
                    {category.count} UNITS
                  </span>
                </div>
                <p className="text-[#2D3142]/50 text-base leading-relaxed mb-6 max-w-[200px]">
                  {category.description}
                </p>
                
                {/* Micro-interaction: The 'Reveal' Arrow */}
                <div className="flex items-center gap-2 text-[12px] font-bold text-[#2D3142] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 uppercase tracking-widest">
                  View Collection <ArrowUpRight className="w-4 h-4 text-[#B0D7FF]" />
                </div>
              </div>

              {/* Back-layer Decorative Number */}
              <span className="absolute bottom-4 right-10 text-8xl font-black text-[#2D3142]/5 pointer-events-none group-hover:text-[#2D3142]/10 transition-colors duration-700">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}