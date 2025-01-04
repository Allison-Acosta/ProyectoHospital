import React, { createContext, useState } from 'react';
import medicos from "../../medicos.json"
import servicios from "../../servicios.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
    console.log("hola desde context");
  const [medico, setmedico] = useState(medicos);
  const [servicio, setservicio] = useState(servicios);
  
  return (
    <UserContext.Provider value={{ medico, setmedico, servicio, setservicio }}>
      {children}
    </UserContext.Provider>
  );
};