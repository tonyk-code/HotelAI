import { useState } from "react";
import { Sparkles, UtensilsCrossed, Fan, Wrench, Shirt, CalendarCheck, CheckCircle2, X, type LucideIcon } from "lucide-react";
import { services } from "../../data/mockData";
import Card from "../../components/ui/Card";

const CustomToast = ({ message, description, onClose }: any) => (
  <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-10 fade-in duration-300">
    <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 w-80 flex gap-4 items-start relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
      
      <div className="bg-emerald-50 p-2 rounded-xl">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
      </div>
      
      <div className="flex-1">
        <h4 className="text-sm font-bold text-[#1E3A8A]">{message}</h4>
        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{description}</p>
      </div>

      <button onClick={onClose} className="text-slate-300 hover:text-slate-500 transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);



const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  UtensilsCrossed,
  Fan,
  Wrench,
  Shirt,
  CalendarCheck,
};

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [requestedServices, setRequestedServices] = useState<Set<string>>(new Set());
  
  // --- Toast Logic State ---
  const [toast, setToast] = useState<{ show: boolean; title: string; desc: string } | null>(null);

  const categories = [
    { id: "all", label: "All Services" },
    { id: "cleaning", label: "Cleaning" },
    { id: "food", label: "Dining" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const filteredServices = activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const handleServiceRequest = (serviceId: string, serviceName: string) => {
    setRequestedServices((prev) => new Set(prev).add(serviceId));
    
    // Trigger custom toast
    setToast({
      show: true,
      title: "Request Received",
      desc: `${serviceName} is now being processed.`
    });

    // Auto-hide after 4 seconds
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="min-h-screen pb-20 relative ">
      {/* Render Custom Toast if active */}
      {toast && (
        <CustomToast 
          message={toast.title} 
          description={toast.desc} 
          onClose={() => setToast(null)} 
        />
      )}

      <div className="px-6 md:px-12 py-16 max-w-(screen-2xl) mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] tracking-tight">
              Luxe <span className="text-slate-400 font-light">Services</span>
            </h1>
            <p className="text-slate-500 text-lg">Everything you need, delivered to your suite.</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all border ${
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

            return (
              <Card key={service.id} className="p-8 flex flex-col items-center text-center group hover:shadow-xl transition-all">
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 transition-all ${
                  isRequested ? 'bg-emerald-50' : 'bg-slate-50 group-hover:bg-blue-50'
                }`}>
                  <Icon className={`w-10 h-10 ${isRequested ? 'text-emerald-500' : 'text-[#1E3A8A]'}`} />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">{service.name}</h3>
                <p className="text-xs text-slate-400 mb-8 uppercase tracking-tight font-semibold">Priority: Medium</p>

                {isRequested ? (
                  <div className="w-full py-4 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    CONFIRMED
                  </div>
                ) : (
                  <button
                    onClick={() => handleServiceRequest(service.id, service.name)}
                    className="w-full py-4 bg-white border border-slate-100 text-[#1E3A8A] rounded-2xl text-xs font-bold hover:bg-[#1E3A8A] hover:text-white transition-all active:scale-95 shadow-sm"
                  >
                    Send Request
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