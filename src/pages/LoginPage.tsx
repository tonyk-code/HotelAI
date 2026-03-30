import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { ChevronRight, Lock, Mail } from "lucide-react";
import { useAuth } from "../hooks/customhooks/useAuth";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = login(email, password);

    if (!res.success) {
      alert("Invalid credentials");
      return;
    }

    if (res.role === "guest") {
      navigate("/app");
    } else {
      navigate("/manager");
    }
    console.log("Login attempt with:", { email, password });
  };

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      if (user.role === "guest") navigate("/app");
      else navigate("/manager");
    }
  }, [user,navigate]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F8FAFC] antialiased">
      <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1742844553019-5874910636d4?q=80&w=1080&auto=format&fit=crop"
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-20 text-white">
          <div className="max-w-md space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">
              Est. 1924 • Grand Luxe
            </span>
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight">
              The Art of <br />
              <span className="font-semibold text-[#3B82F6]">Hospitality.</span>
            </h1>
            <p className="text-sm lg:text-lg opacity-80 font-light max-w-sm leading-relaxed">
              Experience a seamless blend of heritage and modern innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16 lg:px-20">
        <div className="w-full max-w-sm space-y-10">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#111827] tracking-tight">
              Welcome back
            </h2>
            <p className="text-[#6B7280] text-sm">
              Please enter your credentials to access your dashboard.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] ml-1"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADACB5] group-focus-within:text-[#3B82F6] transition-colors" />
                  <input
                    id="email"
                    type="email"
                    placeholder="sarah.johnson@luxury.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-[#111827] text-sm placeholder:text-slate-300 focus:ring-4 focus:ring-[#3B82F6]/5 focus:border-[#3B82F6] transition-all outline-none shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end ml-1">
                  <label
                    htmlFor="password"
                    className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A]"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-[#3B82F6] hover:underline font-medium"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ADACB5] group-focus-within:text-[#3B82F6] transition-colors" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-[#111827] text-sm placeholder:text-slate-300 focus:ring-4 focus:ring-[#3B82F6]/5 focus:border-[#3B82F6] transition-all outline-none shadow-sm"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full relative flex items-center justify-center py-4 rounded-2xl bg-[#1E3A8A] text-white font-semibold text-sm hover:bg-[#1E3A8A]/90 shadow-xl shadow-blue-900/10 transition-all active:scale-[0.98]"
            >
              Sign in
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <footer className="pt-4 text-center">
            <p className="text-sm text-[#6B7280]">
              New to the platform?{" "}
              <a
                href="#"
                className="text-[#111827] font-bold hover:text-[#3B82F6] transition-colors ml-1"
              >
                Create an account
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
