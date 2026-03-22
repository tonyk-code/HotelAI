import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  showAIPick?: boolean;
  onViewAll?: () => void;
  viewLabel?: string;
};

export const SectionHeader = ({
  title,
  showAIPick = false,
  onViewAll,
  viewLabel = "View All",
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1E3A8A]">
          {title}
        </h2>

        {showAIPick && (
          <span className="px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] text-[9px] font-black uppercase tracking-widest rounded-md">
            AI Pick
          </span>
        )}
      </div>

      {onViewAll && (
        <button
          onClick={onViewAll}
          className="group flex items-center gap-2 text-[12px] font-semibold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors"
        >
          {viewLabel}
          <div className="w-6 h-6 rounded-full bg-[#3B82F6]/5 flex items-center justify-center group-hover:bg-[#3B82F6]/10 transition-all">
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        </button>
      )}
    </div>
  );
};
