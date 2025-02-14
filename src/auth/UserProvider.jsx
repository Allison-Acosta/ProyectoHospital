import { createContext, useContext, useState } from "react";

// Creamos el contexto de usuario
const UserContext = createContext();

export function UserProvider({ children }) {
  const [medicos, setMedicos] = useState([]);
  const [servicios, setServicios] = useState([]);

  return (
    <UserContext.Provider value={{ medicos, setMedicos, servicios, setServicios }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom Hook para usar el contexto de usuario
export const useUser = () => {
  return useContext(UserContext);
};
