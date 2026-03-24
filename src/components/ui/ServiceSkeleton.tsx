import { motion, type Variants } from "framer-motion";

export function ServiceSkeleton() {
  // A simple shimmer variant using Framer Motion
  const shimmer: Variants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 flex flex-col items-center shadow-sm relative overflow-hidden">
      {/* Shimmer Overlay */}
      <motion.div
        variants={shimmer}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent z-10 pointer-events-none"
      />

      {/* Icon Circle Skeleton */}
      <div className="w-20 h-20 rounded-4xl bg-slate-100 mb-6" />

      {/* Title Skeleton */}
      <div className="h-6 w-32 bg-slate-100 rounded-lg mb-2" />

      {/* Subtitle/Priority Skeleton */}
      <div className="h-3 w-20 bg-slate-50 rounded-lg mb-8" />

      {/* Button Skeleton */}
      <div className="w-full h-12 bg-slate-100 rounded-2xl" />
    </div>
  );
}


// Optional Grid Wrapper to match your layout
export function ServiceLoadingGrid() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <ServiceSkeleton key={i} />
      ))}
    </>
  );
}
