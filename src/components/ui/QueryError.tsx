import { RefreshCw, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface QueryErrorProps {
  error: any;
  refetch: () => void;
  isRefetching?: boolean;
  message?: string;
}

export function QueryError({
  error,
  refetch,
  isRefetching,
  message = "We couldn't load this section.",
}: QueryErrorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-20 flex flex-col items-center justify-center bg-slate-50/50 rounded-[3rem] border border-dashed border-slate-200"
    >
      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-red-400" />
      </div>

      <h3 className="text-xl font-semibold text-[#111827] mb-2">
        Something went wrong
      </h3>

      <p className="text-slate-500 font-light text-sm mb-8 max-w-xs text-center leading-relaxed">
        {error?.message || message}
      </p>

      <button
        onClick={() => refetch()}
        disabled={isRefetching}
        className="group flex items-center gap-3 bg-[#111827] text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-[#3B82F6] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw
          className={`w-4 h-4 ${isRefetching ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`}
        />
        {isRefetching ? "Refetching..." : "Try Again"}
      </button>
    </motion.div>
  );
}
