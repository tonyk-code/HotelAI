import {  Globe, BedDouble, ArrowRight, } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3142] text-[#EAE8FF] pt-24 pb-12 border-t border-[#ADACB5]/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Module */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B0D7FF] flex items-center justify-center">
                <BedDouble className="w-6 h-6 text-[#2D3142]" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Luxe<span className="text-[#ADACB5] font-light">Stay</span></span>
            </div>
            <p className="text-[#ADACB5] leading-relaxed text-sm">
              Discover curated luxury stays worldwide. We combine AI precision with human hospitality to find your next escape.
            </p>
            
            {/* Social SVGs - Clean & Reliable */}
            <div className="flex gap-4">
              {[
                { name: 'X', path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
                { name: 'LinkedIn', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
              ].map((icon) => (
                <a key={icon.name} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B0D7FF] hover:text-[#2D3142] transition-all group">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B0D7FF] hover:text-[#2D3142] transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Proper Hospitality Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase mb-8">Destinations</h4>
            <ul className="space-y-4">
              {['Boutique Hotels', 'Luxury Villas', 'Private Resorts', 'Business Suites'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#EAE8FF]/70 hover:text-[#B0D7FF] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#B0D7FF] opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Support */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase mb-8">Travel Tools</h4>
            <ul className="space-y-4">
              {['My Bookings', 'Help Center', 'Travel Insurance', 'Concierge Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#EAE8FF]/70 hover:text-[#B0D7FF] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#ADACB5] uppercase mb-8">Stay Updated</h4>
            <div className="p-1.5 bg-white/5 rounded-2xl border border-white/10 flex gap-2">
              <input
                type="email"
                placeholder="Join the guest list..."
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder-[#ADACB5]/40"
              />
              <button className="bg-[#B0D7FF] text-[#2D3142] p-2.5 rounded-xl hover:bg-white transition-all group">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-[10px] text-[#ADACB5] font-medium leading-relaxed uppercase tracking-wider">
              Exclusive offers sent directly to your inbox.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#ADACB5] uppercase">
            © {currentYear} LUXESTAY GLOBAL — PARIS • TOKYO • NEW YORK
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-[#ADACB5] uppercase">
            <a href="#" className="hover:text-[#B0D7FF] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#B0D7FF] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#B0D7FF] transition-colors">Partner with us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}