import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/customhooks/useAuth"; 

type ProtectedRouteProps = {
  allowedRole?: string;
};

export function ProtectedRoute({ allowedRole }:ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/app" />;
  }

  return <Outlet />;
}