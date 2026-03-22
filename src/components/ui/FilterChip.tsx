interface FilterChipProp {
  label: string;
  active: boolean;
  onClick: () => void;
}
export default function FilterChip({ label, active, onClick }: FilterChipProp) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 border ${
        active
          ? "bg-[#1E3A8A] border-[#1E3A8A] text-white"
          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
      }`}
    >
      {label}
    </button>
  );
}
