import { useState } from "react";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Trunk from "./components/Trunk";
import { UserProvider } from "./components/Context";



export default function App() {

  const [indice, setIndice] = useState("1"); // Estado para controlar qué mostrar en Trunk
 
  const manejarCambioDeIndice = (nuevoIndice) => {
    setIndice(nuevoIndice); // Actualiza el índice según el valor recibido del Header
  };

  return (
    <div>
      {/* Pasamos el manejador al Header */}
      <Header onIndiceChange={manejarCambioDeIndice} />
      
      {/* Renderizamos Trunk con el índice actual */}
      <UserProvider>
        <Trunk indice={indice} />
      </UserProvider>
      
      <Footer/>
    </div>
  );
}

