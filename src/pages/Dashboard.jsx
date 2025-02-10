import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Mantenedor médico</h1>
      <p>Bienvenido, {user?.username} ({user?.role})</p>
      <button onClick={logout}>Cerrar sesión</button>

      {user?.role === "admin" && (
        <button onClick={() => navigate("/mantenedor-medico")}>
          Ir al Mantenedor Médico
        </button>
      )}
    </div>
  );
};

export default Dashboard;