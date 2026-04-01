import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/customhooks/useAuth";

type ProtectedRouteProps = {
  allowedRole?: string;
};

export function ProtectedRoute({ allowedRole }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/app" />;
  }

  return <Outlet />;
}