import React, { createContext, useState } from 'react';
import medico from "../../medicos.json"
import servicio from "../../servicios.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
    console.log("hola desde context");
  const [medicos, setmedicos] = useState(medico);
  const [servicios, setservicios] = useState(servicio);
  
  return (
    <UserContext.Provider value={{ medicos, setmedicos, servicios, setservicios }}>
      {children}
    </UserContext.Provider>
  );
};