import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Acceso Denegado</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default Unauthorized;
