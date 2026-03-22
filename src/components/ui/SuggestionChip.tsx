import { Zap } from "lucide-react";

export default function SuggestionChip({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl bg-white border border-slate-100 text-[12px] font-medium text-slate-600 hover:border-[#3B82F6] hover:text-[#1E3A8A] transition-all whitespace-nowrap shadow-sm flex items-center gap-2 group"
    >
      <Zap className="w-3 h-3 text-slate-300 group-hover:text-[#3B82F6] transition-colors" />
      {label}
    </button>
  );
}
