import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import useValidation from "../components/UseValidation"; // Importa el hook de validación

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { errors, validateForm } = useValidation(); // Usa el hook de validación

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviar
    if (!validateForm(username, password)) {
      return; // Si hay errores, no continúes con el envío
    }

    try {
      await login(username, password);
      navigate("/ReservarCita"); // Redirige al formulario de citas después del login
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;