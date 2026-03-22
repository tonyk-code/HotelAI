import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Compass, ConciergeBell, MessageCircle, User, Calendar } from "lucide-react";

export function GuestLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
  { path: "/app", icon: Home, label: "Home" },
  { path: "/app/explore", icon: Compass, label: "Explore" },
  { path: "/app/services", icon: ConciergeBell, label: "Services" },
  { path: "/app/events", icon: Calendar, label: "Events" },  
  { path: "/app/chat", icon: MessageCircle, label: "Chat" },
  { path: "/app/profile", icon: User, label: "Profile" },
];

  const isActive = (path: string) => {
    if (path === "/app") return location.pathname === "/app";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#F8FAFC] antialiased">
      <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-0 md:right-auto md:w-24 z-50 flex items-center justify-center pointer-events-none">
        <div className="
          pointer-events-auto
          w-full md:w-18 
          bg-white/90 backdrop-blur-2xl 
          border-t md:border border-gray-200/50 
          shadow-[0_-10px_40px_rgba(0,0,0,0.03)] md:shadow-[0_15px_35px_rgba(30,58,138,0.08)]
          h-20 md:h-fit
          md:py-8
          rounded-none md:rounded-full
          md:ml-6
        ">
          <div className="flex flex-row md:flex-col justify-around md:justify-center items-center h-full md:gap-4">
            <div className="hidden md:flex mb-6 items-center justify-center">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/10">
                <span className="text-sm tracking-tighter">H</span>
              </div>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`group relative flex flex-col items-center justify-center gap-1.5 w-full transition-all duration-300 active:scale-90 ${
                    active ? "text-[#1E3A8A]" : "text-[#94A3B8] hover:text-[#111827]"
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-500 ${
                    active ? "bg-[#3B82F6]/10" : "group-hover:bg-gray-50"
                  }`}>
                    <Icon 
                      className={`w-5 h-5 transition-all duration-500 ${
                        active ? "stroke-[2.2px]" : "stroke-[1.4px]"
                      }`} 
                    />
                  </div>

                  <span className={`
                    text-[8px] font-bold capitalize tracking-[0.12em] leading-none 
                    transition-all duration-300
                    ${active ? "opacity-100" : "opacity-90"}
                  `}>
                    {item.label}
                  </span>

                  {active && (
                    <span className="absolute md:right-5 bottom-12 right-15 md:bottom-12 w-1 h-1 bg-[#3B82F6] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto pb-15 md:pb-0 md:pl-28 transition-all duration-500">
        <div className="p-6  md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}