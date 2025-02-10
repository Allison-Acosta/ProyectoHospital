import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trunk from "./components/Trunk";
import { UserProvider } from "./components/Context";
import { AuthProvider } from "./auth/AuthContext";

export default function App() {
  const [indice, setIndice] = useState("1");

  const manejarCambioDeIndice = (nuevoIndice) => {
    setIndice(nuevoIndice);
  };

  return (
    <Router>
      <AuthProvider>
        <div>
          <Header onIndiceChange={manejarCambioDeIndice} />
          <UserProvider>
            <Trunk indice={indice} />
          </UserProvider>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}