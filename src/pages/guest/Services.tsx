import { useState, useEffect, useMemo } from "react";
import {
  Sparkles,
  UtensilsCrossed,
  Fan,
  Wrench,
  Shirt,
  CalendarCheck,
  CheckCircle2,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import Card from "../../components/ui/Card";
import CustomToast from "../../components/ui/CustomToast";
import { useRequestService } from "../../hooks/mutation/useRequestServices";
import { services } from "../../data/mockData";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  UtensilsCrossed,
  Fan,
  Wrench,
  Shirt,
  CalendarCheck,
};

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "cleaning", label: "Cleaning" },
  { id: "food", label: "Dining" },
  { id: "maintenance", label: "Maintenance" },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [requestedServices, setRequestedServices] = useState<Set<string>>(
    new Set(),
  );
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    title: string;
    desc: string;
    type: "success" | "error"; // Added type here
  } | null>(null);

  const { mutate: requestService } = useRequestService();

  // Handle toast auto-dismiss safely
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const filteredServices = useMemo(
    () =>
      activeCategory === "all"
        ? services
        : services.filter((s) => s.category === activeCategory),
    [activeCategory],
  );

  const handleServiceRequest = (serviceId: string, serviceName: string) => {
    setPendingId(serviceId);

    requestService(serviceId, {
      onSuccess: () => {
        // CRITICAL: Add the ID to the set so the UI shows "CONFIRMED"
        setRequestedServices((prev) => new Set(prev).add(serviceId));

        setToast({
          type: "success",
          title: "Request Received",
          desc: `${serviceName} is now being processed.`,
        });
      },
      onError: (error) => {
        setToast({
          type: "error",
          title: "Request Failed",
          desc: "Something went wrong. Please try again later.",
        });
        console.error("Service Request Error:", error);
      },
      onSettled: () => {
        // This runs regardless of success or error
        setPendingId(null);
      },
    });
  };

  return (
    <div className="min-h-screen pb-20 relative bg-slate-50/50">
      {toast && (
        <CustomToast
          type={toast.type} // Pass the dynamic type
          message={toast.title}
          description={toast.desc}
          onClose={() => setToast(null)}
        />
      )}

      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] tracking-tight">
            Luxe <span className="text-slate-400 font-light">Services</span>
          </h1>
          <p className="text-slate-500 text-lg mt-2">
            Everything you need, delivered to your suite.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-12 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all border whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#1E3A8A] border-[#1E3A8A] text-white shadow-lg shadow-blue-900/10"
                  : "bg-white border-slate-100 text-slate-400 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const isRequested = requestedServices.has(service.id);
            const isLoading = pendingId === service.id;

            return (
              <Card
                key={service.id}
                className="p-8 flex flex-col items-center text-center group hover:shadow-xl transition-all border-none bg-white"
              >
                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all ${
                    isRequested
                      ? "bg-emerald-50"
                      : "bg-slate-50 group-hover:bg-blue-50"
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 ${isRequested ? "text-emerald-500" : "text-[#1E3A8A]"}`}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-bold">
                  Priority: Medium
                </p>

                {isRequested ? (
                  <div className="w-full py-4 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold animate-in fade-in zoom-in duration-300">
                    <CheckCircle2 className="w-4 h-4" />
                    CONFIRMED
                  </div>
                ) : (
                  <button
                    disabled={!!pendingId}
                    onClick={() =>
                      handleServiceRequest(service.id, service.name)
                    }
                    className={`w-full py-4 border rounded-2xl text-xs font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${
                      isLoading
                        ? "bg-slate-100 text-slate-400 cursor-wait"
                        : "bg-white border-slate-100 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                    }`}
                  >
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isLoading ? "Sending..." : "Send Request"}
                  </button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
