import {
  Globe,
  BedDouble,
  ArrowRight,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigLeft,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 text-[15vw] font-bold text-white/2 select-none pointer-events-none tracking-tighter leading-none translate-y-[-20%]">
          LUXESTAY
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <BedDouble className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold tracking-tight uppercase">
                Luxe<span className="text-slate-500 font-light">Stay</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs font-light">
              Redefining the art of travel through AI-curated excellence and
              human-centric hospitality. Your next sanctuary awaits.
            </p>

            <div className="flex gap-3">
              {[
                { icon: ArrowBigDownDash, href: "#" },
                { icon: ArrowBigLeft, href: "#" },
                { icon: ArrowBigDown, href: "#" },
                { icon: Globe, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0F172A] transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-8">
              Collection
            </h4>
            <ul className="space-y-4">
              {[
                "Boutique Hotels",
                "Luxury Villas",
                "Private Resorts",
                "Business Suites",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-[#3B82F6] group-hover:w-3 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-8">
              Support
            </h4>
            <ul className="space-y-4">
              {[
                "My Bookings",
                "Help Center",
                "Travel Insurance",
                "Concierge Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-[#3B82F6] group-hover:w-3 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-8">
              Newsletter
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Join the guest list"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-[#3B82F6] transition-all placeholder:text-slate-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#3B82F6] text-white px-4 rounded-xl hover:bg-white hover:text-[#0F172A] transition-all group/btn">
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-[11px] text-slate-500 italic font-light leading-relaxed">
              *By subscribing, you agree to our curated marketing terms.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.3em] text-slate-600 uppercase">
            © {currentYear} LUXESTAY GLOBAL — LONDON • DUBAI • SINGAPORE
          </div>
          <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Safety
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
