import { useState } from "react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="relative lg:w-1/2 h-48 lg:h-auto overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1742844553019-5874910636d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwcmVzb3J0fGVufDF8fHx8MTc3NDA5NzMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-white px-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(45, 49, 66, 0.75) 0%, rgba(45, 49, 66, 0.45) 100%)",
          }}
        >
          <div className="text-center max-w-md">
            <h1 className="text-3xl lg:text-5xl mb-3 lg:mb-4">
              Experience Smart Hospitality
            </h1>
            <p className="text-sm lg:text-base opacity-90">
              Seamless management for modern hotels and resorts
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex-1 lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-12"
        style={{ backgroundColor: "#EAE8FF" }}
      >
        <div
          className="w-full max-w-md rounded-3xl p-8 lg:p-10 "
          style={{ backgroundColor: "#EAE8FF" }}
        >
          <div className="text-center mb-8">
            <h2
              className="text-3xl lg:text-4xl mb-2"
              style={{ color: "#2D3142" }}
            >
              Welcome Back
            </h2>
            <p className="text-sm lg:text-base" style={{ color: "#ADACB5" }}>
              Login to continue your experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm block"
                style={{ color: "#2D3142" }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border-0 transition-all duration-200 focus:ring-2 focus:ring-offset-0"
                style={{
                  backgroundColor: "#D8D5DB",
                  color: "#2D3142",
                }}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm block"
                style={{ color: "#2D3142" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border-0 transition-all duration-200 focus:ring-2 focus:ring-offset-0"
                style={{
                  backgroundColor: "#D8D5DB",
                  color: "#2D3142",
                }}
              />
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm hover:underline transition-colors"
                style={{ color: "#ADACB5" }}
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg text-base font-medium text-[#2D3142] bg-[#B0D7FF] hover:bg-[#ADACB5] transition-colors duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "#ADACB5" }}>
              Don't have an account?{" "}
              <a
                href="#"
                className="hover:underline transition-colors"
                style={{ color: "#2D3142" }}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        input:focus {
          outline: none;
          border-color: #B0D7FF !important;
          box-shadow: 0 0 0 3px rgba(176, 215, 255, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
