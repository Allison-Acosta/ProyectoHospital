import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trunk from "./components/Trunk";
import { UserProvider } from "./components/Context";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./pages/Login";
import Formulario from "./components/AppointmentForm";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  const [indice, setIndice] = useState("1");

  const manejarCambioDeIndice = (nuevoIndice) => {
    setIndice(nuevoIndice);
  };

  console.log("Indice:", indice);

  return (
    <Router>
      <AuthProvider>
        <div>
          <Header onIndiceChange={manejarCambioDeIndice} />
          <UserProvider>
            <Routes>
              {/* Rutas de Login */}
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              {/* Ruta para el Formulario de Cita */}
              <Route
                path="/ReservarCita"
                element={
                  <ProtectedRoute allowedRoles={["paciente"]}>
                    <Formulario />
                  </ProtectedRoute>
                }
              />

              {/* Ruta para el trunk que cambia según el indice */}
              <Route
                path="/"
                element={<Trunk indice={indice} />}
                
              />
              <Route path="/dashboard" element={<PrivateRoute><Trunk indice="6" /></PrivateRoute>} />
            </Routes>
          </UserProvider>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}
