import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import usuarios from "../../usuarios.json";  // Asegúrate de importar los datos correctamente
import bcrypt from "bcryptjs";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Asumiendo que 'login' hace el manejo básico de la sesión
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Buscar el usuario por nombre de usuario
    const user = usuarios.find(u => u.usuario === username);
    
    if (!user) {
      alert("Usuario o contraseña incorrectos.");
      return;
    }
  
    // Comparar la contraseña ingresada con la hasheada
    const match = await bcrypt.compare(password, user.password);
    
    if (match) {
      // Verificar si el usuario tiene el cargo de 'Administrador'
      login(user.usuario, user.cargo); // Pasar el nombre de usuario y el cargo al contexto de autenticación
      navigate("/dashboard"); // Redirigir al Dashboard si es Administrador
    } else {
      alert("Usuario o contraseña incorrectos.");
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
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}