import { CheckCircle2, X } from "lucide-react";

interface CustomToastProp {
  message: string;
  description: string;
  onClose: () => void;
}

export default function CustomToast({
  message,
  description,
  onClose,
}: CustomToastProp) {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-10 fade-in duration-300">
      <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 w-80 flex gap-4 items-start relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />

        <div className="bg-emerald-50 p-2 rounded-xl">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-bold text-[#1E3A8A]">{message}</h4>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
            {description}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-slate-300 hover:text-slate-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
