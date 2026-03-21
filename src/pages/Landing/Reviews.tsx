import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
const reviews = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    rating: 5,
    text: "The AI recommendations were spot-on! Found the perfect villa in Bali that exceeded all my expectations. The booking process was seamless and the customer service outstanding.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    name: "Michael Chen",
    role: "Business Traveler",
    rating: 5,
    text: "As someone who travels frequently for work, this platform has become my go-to. The AI assistant understands my preferences and always suggests hotels that meet my needs perfectly.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    name: "Emma Martinez",
    role: "Luxury Traveler",
    rating: 5,
    text: "Absolutely exceptional! The premium services and attention to detail made our honeymoon unforgettable. Every hotel recommendation was carefully curated to our style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    name: "David Williams",
    role: "Family Vacation",
    rating: 5,
    text: "Planning a family trip has never been easier. The AI suggested family-friendly resorts with amazing amenities. Our kids had a blast and we got to relax. Win-win!",
  },
];



export function Reviews() {
  return (
    <section className="py-20 px-6 bg-[#EAE8FF]/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B0D7FF]/20 border border-[#B0D7FF]/30 text-[#2D3142] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">User Logs</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2D3142] tracking-tighter">
            Guest <span className="text-[#ADACB5] font-light italic">Perspectives</span>
          </h2>
        </div>

        {/* The Stack Container */}
        <div className="relative flex flex-col gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="sticky top-32 w-full"
              style={{ paddingTop: `${index * 20}px` }} // Incremental offset so they don't perfectly overlap
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_-20px_50px_-15px_rgba(45,49,66,0.1)] border border-[#EAE8FF] flex flex-col md:flex-row gap-10 items-center"
              >
                {/* Reviewer Info */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                  <div className="relative inline-block mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-24 h-24 rounded-[32px] object-cover border-4 border-[#EAE8FF]"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#2D3142] rounded-full flex items-center justify-center text-white">
                      <Quote className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3142] uppercase tracking-tighter">{review.name}</h3>
                  <p className="text-sm font-bold text-[#ADACB5] uppercase tracking-widest">{review.role}</p>
                </div>

                {/* Review Text */}
                <div className="w-full md:w-2/3">
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#B0D7FF] fill-current" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-[#2D3142] leading-relaxed font-light italic">
                    "{review.text}"
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Spacer to allow the last card to pin for a while */}
        <div className="h-[10vh]" />
      </div>
    </section>
  );
}
