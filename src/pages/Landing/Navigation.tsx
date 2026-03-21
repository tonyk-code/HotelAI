import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2 } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Categories", href: "#categories" },
    { name: "Rooms", href: "#rooms" },
    { name: "Services", href: "#services" },
    { name: "Stats", href: "#stats" },
    { name: "Reviews", href: "#reviews" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const offset = 80; 
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#EAE8FF]/90 backdrop-blur-xl border-b border-[#ADACB5]/20">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-[#2D3142] rounded-xl flex items-center justify-center group-hover:bg-[#B0D7FF] transition-all duration-500 shadow-lg shadow-[#2D3142]/10">
            <Building2 className="w-5 h-5 text-[#EAE8FF]" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter text-[#2D3142]">
              GRAND<span className="font-light text-[#ADACB5]">MARQUE</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-[#B0D7FF] uppercase">
              Luxury Hotel
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="relative text-[12px] font-bold uppercase tracking-wider text-[#2D3142]/70 hover:text-[#2D3142] transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B0D7FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block bg-[#2D3142] text-[#EAE8FF] px-7 py-3 rounded-full text-[13px] font-bold shadow-xl shadow-[#2D3142]/10 hover:bg-[#3d4259] transition-all"
          >
            Book Now
          </motion.button>

          <button
            className="lg:hidden p-2 text-[#2D3142] hover:bg-[#2D3142]/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-[#EAE8FF] border-b border-[#ADACB5]/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-md font-black text-[#2D3142] uppercase tracking-widest hover:text-[#B0D7FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-[#2D3142] text-[#EAE8FF] py-4 rounded-xl font-bold uppercase tracking-widest mt-4">
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
