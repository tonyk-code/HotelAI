import { Mail, Phone, LogIn, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white text-[#111827] border-b border-slate-100 relative z-100">
      <div className="max-w-7xl mx-auto h-12 flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="mailto:info@luxestay.com"
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-[#3B82F6] transition-colors group"
          >
            <Mail className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            <span className="hidden sm:inline">info@luxestay.com</span>
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-[#3B82F6] transition-colors group"
          >
            <Phone className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            <span className="hidden sm:inline">+1 (555) 123-4567</span>
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#1E3A8A] transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden xs:inline">English</span>
              <ChevronDown
                className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0"
                  onClick={() => setIsLangOpen(false)}
                />
                <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-slate-100 rounded-xl py-2 shadow-xl shadow-slate-200/50 animate-in fade-in slide-in-from-top-1 duration-200 origin-top-right">
                  {["English", "Amharic"].map((lang) => (
                    <button
                      key={lang}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-[#3B82F6] transition-colors"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="h-4 w-px bg-slate-200" />

          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A] hover:opacity-80 transition-all group"
          >
            <LogIn className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            <span>LOG IN</span>
          </button>
        </div>
      </div>
    </section>
  );
}
