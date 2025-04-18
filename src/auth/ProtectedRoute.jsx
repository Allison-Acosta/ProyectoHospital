import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { isTokenExpired } from "../utils/jwUtils";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwtToken');

  if (!user || !token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
