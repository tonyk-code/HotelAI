import type { LucideIcon } from "lucide-react";

interface InfoTileProp {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function InfoTile({ icon: Icon, label, value }: InfoTileProp) {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100/50 transition-all hover:bg-slate-50">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
        <Icon className="w-5 h-5 text-[#3B82F6]" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-[#1E3A8A]">{value}</p>
      </div>
    </div>
  );
}
