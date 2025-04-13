import { NavLink } from "react-router";
import { useAuth } from "@/context/AuthContext";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <NavLink to="/login" />;
};
