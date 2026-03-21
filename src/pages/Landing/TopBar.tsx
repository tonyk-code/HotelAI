import { Mail, Phone, LogIn, ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <section className="w-full bg-[#2D3142] text-[#EAE8FF] border-b border-[#ADACB5]/10">
      <div className="max-w-7xl mx-auto h-11 flex justify-between items-center px-6">
        
        {/* LEFT: Essential Contact (Empathy/Context) */}
        <div className="flex items-center gap-8">
          <a 
            href="mailto:info@aihospitality.com" 
            className="flex items-center gap-2 text-[13px] font-medium hover:text-[#B0D7FF] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>info@aihospitality.com</span>
          </a>
          <a 
            href="tel:+15551234567" 
            className="flex items-center gap-2 text-[13px] font-medium hover:text-[#B0D7FF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>+1 (555) 123-4567</span>
          </a>
        </div>

        {/* RIGHT: Guidance & Global Actions */}
        <div className="flex items-center gap-6">
          {/* Language Selector: Familiar Pattern (Novelty with Familiarity) */}
          <button className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wide hover:opacity-80">
            <span>ENGLISH</span>
            <ChevronDown className="w-3 h-3 text-[#ADACB5]" />
          </button>

          {/* Vertical Divider for Visual Hierarchy */}
          <div className="h-4 w-[1px] bg-[#ADACB5]/30" />

          {/* Primary CTA: High Contrast for Guidance */}
          <button className="flex items-center gap-2 text-[13px] font-bold text-[#B0D7FF] hover:text-white transition-all group">
            <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span className="uppercase tracking-wider">Sign In</span>
          </button>
        </div>
      </div>
    </section>
  );
}