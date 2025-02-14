import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user && user.cargo === "Administrador" ? children : <Navigate to="/unauthorized" />;
}
