import { motion, type Variants } from "framer-motion";

export function RoomSkeleton() {
  const shimmer: Variants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: { repeat: Infinity, duration: 1.5, ease: "linear" },
    },
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border-none shadow-md bg-white relative">
      {/* Shimmer Overlay */}
      <motion.div
        variants={shimmer}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-linear-to-r from-transparent via-slate-50/60 to-transparent z-20 pointer-events-none"
      />

      {/* Image Area Skeleton */}
      <div className="relative h-64 bg-slate-200">
        {/* Rating Badge Skeleton */}
        <div className="absolute top-4 left-4 w-12 h-7 bg-white/80 rounded-xl" />
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          {/* Title Skeleton */}
          <div className="space-y-2 w-1/2">
            <div className="h-5 bg-slate-100 rounded-lg w-full" />
            <div className="h-5 bg-slate-100 rounded-lg w-2/3" />
          </div>

          {/* Price Skeleton */}
          <div className="text-right space-y-1">
            <div className="h-6 w-16 bg-slate-100 rounded-lg ml-auto" />
            <div className="h-2 w-12 bg-slate-50 rounded-lg ml-auto" />
          </div>
        </div>

        {/* Features Chips Skeleton */}
        <div className="flex gap-1.5">
          <div className="h-6 w-16 bg-slate-50 rounded-lg" />
          <div className="h-6 w-20 bg-slate-50 rounded-lg" />
        </div>

        {/* Button Skeleton */}
        <div className="w-full h-12 bg-slate-100 rounded-2xl" />
      </div>
    </div>
  );
}
