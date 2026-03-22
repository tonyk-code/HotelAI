import {
  User,
  MapPin,
  Calendar,
  Heart,
  Eye,
  Building,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import Card from "../../components/ui/Card";
import InfoTile from "../../components/ui/InfoTile";

export function Profile() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="mb-12 space-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] tracking-tight">
            Guest <span className="text-slate-400 font-light">Profile</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Manage your preferences and stay details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Personal Info & Preferences */}
          <div className="lg:col-span-2 space-y-8">
            {/* User Identity Card */}
            <Card variant="profile" title="My Profile">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="relative group">
                  <div className="w-28 h-28 bg-[#1E3A8A] rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-900/20 transition-transform group-hover:scale-105">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full"
                    title="Active Stay"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-[#1E3A8A]">
                    Sarah Mitchell
                  </h2>
                  <p className="text-slate-400 font-medium">
                    Gold Status Member • sarah.m@luxe.com
                  </p>
                  <button className="mt-4 px-6 py-2 bg-slate-50 text-[#1E3A8A] text-xs font-bold rounded-full border border-slate-100 hover:bg-[#1E3A8A] hover:text-white transition-all">
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoTile
                  icon={Building}
                  label="Room Number"
                  value="Suite 402 (Ocean Front)"
                />
                <InfoTile
                  icon={Calendar}
                  label="Stay Duration"
                  value="Mar 20 — Mar 27, 2026"
                />
                <InfoTile
                  icon={MapPin}
                  label="Location"
                  value="Grand Luxe Hotel, Mauritius"
                />
                <InfoTile
                  icon={CreditCard}
                  label="Payment Method"
                  value="Visa ending in 8842"
                />
              </div>
            </Card>

            {/* Preferences Section */}
            <Card title="Personal Preferences" variant="profile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] text-sm">
                      Room Comfort
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      Quiet zone requested. High-floor preferred with
                      hypoallergenic linens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] text-sm">
                      Visual & View
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      East-facing for sunrise views. Large floor-to-ceiling
                      windows preferred.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Current Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold text-[#1E3A8A] mb-6">
                Active Booking
              </h2>
              <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40">
                <div className="relative h-56">
                  <img
                    src="https://images.unsplash.com/photo-1708920326697-b219695c89ba?q=80&w=1080"
                    alt="Ocean View Suite"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1E3A8A]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                      Primary Suite
                    </p>
                    <h3 className="text-xl font-bold">Ocean View Suite</h3>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">
                      Nightly Rate
                    </span>
                    <span className="text-[#1E3A8A] font-bold">$350.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Duration</span>
                    <span className="text-[#1E3A8A] font-bold">7 Nights</span>
                  </div>

                  <div className="pt-6 border-t border-slate-50 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                        Total Balance
                      </p>
                      <p className="text-3xl font-bold text-[#1E3A8A] tracking-tighter">
                        $2,450
                      </p>
                    </div>
                    <button className="p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                      <ChevronRight className="w-5 h-5 text-[#1E3A8A] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-[11px] text-slate-300 font-medium">
                Need to change your stay dates? Contact Concierge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
