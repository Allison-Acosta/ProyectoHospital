import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from './AuthContext';

export default function PrivateRoute({ children }) {
  console.log("test si llegue aca");

  const { user } = useAuth();
  
  return user && user.cargo === "Administrador" ? children : <Navigate to="/unauthorized" />;
}
