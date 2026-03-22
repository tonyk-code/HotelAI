import type { LucideIcon } from "lucide-react";

interface ActionButtonProp {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}
export default function ActionButton({
  icon: Icon,
  label,
  onClick,
}: ActionButtonProp) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-3 h-32 bg-white border border-gray-100 rounded-4xl transition-all duration-300 hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 active:scale-95 group"
    >
      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#3B82F6]/10 transition-colors">
        <Icon className="w-6 h-6 text-[#1E3A8A] stroke-[1.5px]" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#64748B] group-hover:text-[#1E3A8A]">
        {label}
      </span>
    </button>
  );
}
