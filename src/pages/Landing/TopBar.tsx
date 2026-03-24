import { Mail, Phone, LogIn, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <section className="w-full bg-[#2D3142] text-[#EAE8FF] border-b border-[#ADACB5]/10 relative z-100">
      <div className="max-w-7xl mx-auto h-11 flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="mailto:info@luxestay.com"
            className="flex items-center gap-2 text-[12px] md:text-[13px] font-medium hover:text-[#B0D7FF] transition-colors group"
          >
            <Mail
              className="w-4 h-4 md:w-3.5 md:h-3.5 opacity-80 group-hover:opacity-100"
              strokeWidth={2}
            />
            <span className="hidden sm:inline">info@luxestay.com</span>
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-[12px] md:text-[13px] font-medium hover:text-[#B0D7FF] transition-colors group"
          >
            <Phone
              className="w-4 h-4 md:w-3.5 md:h-3.5 opacity-80 group-hover:opacity-100"
              strokeWidth={2}
            />
            <span className="hidden sm:inline">+1 (555) 123-4567</span>
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold tracking-wider hover:text-[#B0D7FF] transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#ADACB5]" />
              <span className="hidden xs:inline">ENGLISH</span>
              <ChevronDown
                className={`w-3 h-3 text-[#ADACB5] transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0 z-[-1]"
                  onClick={() => setIsLangOpen(false)}
                />
                <div className="absolute top-full right-0 mt-3 w-36 bg-[#2D3142]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-2 shadow-2xl animate-in fade-in zoom-in duration-200 origin-top-right">
                  {["English", "Amharic"].map((lang) => (
                    <button
                      key={lang}
                      className="w-full text-left px-4 py-2.5 text-[11px] font-bold uppercase hover:bg-white/5 hover:text-[#B0D7FF] transition-colors"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="h-4 w-px bg-[#ADACB5]/30" />

          <button 
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-[12px] md:text-[13px] font-bold hover:text-[#B0D7FF] text-white transition-all group">
            <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span className="uppercase tracking-wider">Log In</span>
          </button>
        </div>
      </div>
    </section>
  );
}
