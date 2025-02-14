import { Navigate } from "react-router-dom";
import { useAuth } from './AuthContext';

export default function PrivateRoute({ children }) {
  console.log("hola desde privatRoute");

  const { user } = useAuth();
  console.log(user);
  
  // Verifica si el usuario está autenticado y si tiene el rol de "Administrador"
  if (!user || user.role !== "Administrador") {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}