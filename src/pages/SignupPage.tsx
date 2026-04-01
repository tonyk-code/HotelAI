import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import {
  ChevronRight,
  Lock,
  Mail,
  User,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../hooks/customhooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

export function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"guest" | "manager">("guest");

  const { signup, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === "guest") navigate("/app");
      else navigate("/manager");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Logic:
    // const res = await signup({ name, email, phone, password, role });
    // if (res.success) navigate(role === "guest" ? "/app" : "/manager");

    console.log("Signup attempt:", { name, email, phone, password, role });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F8FAFC] antialiased">
      {/* Visual Branding Section */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1080&auto=format&fit=crop"
          alt="Luxury hotel suite"
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-20 text-white">
          <div className="max-w-md space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">
              Join the Collection
            </span>
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight">
              Begin Your <br />
              <span className="font-semibold text-[#3B82F6]">Experience.</span>
            </h1>
            <p className="text-sm lg:text-lg opacity-80 font-light max-w-sm leading-relaxed">
              Create an account to access personalized concierge services and
              seamless management.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-sm space-y-8">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#111827] tracking-tight">
              Create Account
            </h2>
            <p className="text-[#6B7280] text-sm">
              Please enter your details to register.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection Toggle */}
            <div className="p-1 bg-slate-100 rounded-2xl flex gap-1">
              {(["guest", "manager"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                    role === r
                      ? "bg-white text-[#1E3A8A] shadow-sm"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADACB5] group-focus-within:text-[#3B82F6] transition-colors" />
                  <input
                    type="text"
                    placeholder="Sarah Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-[#111827] text-sm focus:ring-4 focus:ring-[#3B82F6]/5 focus:border-[#3B82F6] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADACB5] group-focus-within:text-[#3B82F6] transition-colors" />
                  <input
                    type="email"
                    placeholder="sarah.johnson@luxury.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-[#111827] text-sm focus:ring-4 focus:ring-[#3B82F6]/5 focus:border-[#3B82F6] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] ml-1">
                  Phone Number
                </label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADACB5] group-focus-within:text-[#3B82F6] transition-colors" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-[#111827] text-sm focus:ring-4 focus:ring-[#3B82F6]/5 focus:border-[#3B82F6] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADACB5] group-focus-within:text-[#3B82F6] transition-colors" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-[#111827] text-sm focus:ring-4 focus:ring-[#3B82F6]/5 focus:border-[#3B82F6] transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full relative flex items-center justify-center py-4 rounded-2xl bg-[#1E3A8A] text-white font-semibold text-sm hover:bg-[#1E3A8A]/90 shadow-xl shadow-blue-900/10 transition-all active:scale-[0.98]"
            >
              Register
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <footer className="pt-2 text-center">
            <p className="text-sm text-[#6B7280]">
              Already a member?{" "}
              <Link
                to="/login"
                className="text-[#111827] font-bold hover:text-[#3B82F6] transition-colors ml-1"
              >
                Sign in
              </Link>
            </p>
            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-widest pt-6">
              <ShieldCheck size={12} />
              Secure Data Encryption
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
