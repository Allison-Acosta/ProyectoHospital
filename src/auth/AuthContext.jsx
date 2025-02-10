import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as authLogin, logout as authLogout } from "../services/AuthServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const userData = await authLogin(username, password);
      setUser(userData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = () => {
    authLogout();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);