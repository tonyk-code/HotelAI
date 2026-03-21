import { motion } from "framer-motion";

export function Navigation() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Explore Hotels", href: "#" }, // More descriptive (Empathy)
    { name: "AI Services", href: "#" },    // Highlighting the Unique Value
    { name: "Reviews", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#EAE8FF]/90 backdrop-blur-xl border-b border-[#ADACB5]/20">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">
        
        {/* LOGO: Essentialism & Brand Mood */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#2D3142] rounded-lg flex items-center justify-center group-hover:bg-[#B0D7FF] transition-colors duration-500">
             <div className="w-4 h-4 border-2 border-[#EAE8FF] rounded-sm" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-[#2D3142]">
            AI<span className="font-light text-[#ADACB5]">HOSPITALITY</span>
          </span>
        </div>

        {/* LINKS: Rhythm & Focal Points */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[14px] font-semibold text-[#2D3142]/70 hover:text-[#2D3142] transition-colors duration-300 group"
            >
              {link.name}
              {/* Micro-interaction: Elegant underline (Delight) */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B0D7FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA: Guidance & Contrast */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block text-[14px] font-bold text-[#2D3142] px-4 py-2 hover:opacity-60 transition-opacity">
            Support
          </button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#2D3142] text-[#EAE8FF] px-7 py-3 rounded-full text-[14px] font-bold shadow-lg shadow-[#2D3142]/10 hover:shadow-[#B0D7FF]/20 hover:bg-[#3d4259] transition-all"
          >
            Get Started
          </motion.button>
        </div>

      </div>
    </nav>
  );
}