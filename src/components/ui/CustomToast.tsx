import { CheckCircle2, AlertCircle, X } from "lucide-react"; // Added AlertCircle

interface CustomToastProp {
  message: string;
  description: string;
  type?: "success" | "error"; // Add type prop
  onClose: () => void;
}

export default function CustomToast({
  message,
  description,
  type = "success", // Default to success
  onClose,
}: CustomToastProp) {
  // Define dynamic styles based on type
  const isError = type === "error";
  const Icon = isError ? AlertCircle : CheckCircle2;
  const accentColor = isError ? "bg-red-500" : "bg-emerald-500";
  const iconBg = isError ? "bg-red-50" : "bg-emerald-50";
  const iconColor = isError ? "text-red-600" : "text-emerald-600";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-10 fade-in duration-300">
      <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 w-80 flex gap-4 items-start relative overflow-hidden">
        {/* Dynamic Left Border */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${accentColor}`} />

        {/* Dynamic Icon Container */}
        <div className={`${iconBg} p-2 rounded-xl`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
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
