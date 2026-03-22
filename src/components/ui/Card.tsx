type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "interactive" | "profile";
  title?: string;
};

const Card = ({
  children,
  className = "",
  onClick,
  variant = "default",
  title,
}: CardProps) => {
  const base =
    "bg-white border border-slate-100 rounded-[2rem] transition-all duration-300";

  const variants = {
    default: "shadow-sm",
    interactive:
      "shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] cursor-pointer",
    profile: "shadow-sm p-8",
  };

  return (
    <div
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {variant === "profile" && title && (
        <h2 className="text-xl font-bold text-[#1E3A8A] mb-6">{title}</h2>
      )}

      {children}
    </div>
  );
};

export default Card;
