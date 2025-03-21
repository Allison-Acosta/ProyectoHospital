import Medicos from './DoctorCard';
import Formulario from './AppointmentForm';
import Servicios from './ServiceList';
import { useEffect, useContext, useState, useRef } from 'react';
import { UserContext } from './Context';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider } from "../auth/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MantenedorMedico from "../pages/MantenedorMedico";
import Unauthorized from "../pages/Unauthorized";
import apiClient from '../apiClient'; // Importa el cliente HTTP configurado

export default function Trunk({ indice }) {
  const { medicos, servicios, setMedicos, setServicios } = useContext(UserContext);
  const homeRef = useRef(null);
  const testimonioRef = useRef(null);
  const navigate = useNavigate();

  // Redirigir a "/" si el índice es 1, 2, 4 o 5
  useEffect(() => {
    if (["1", "2",  "4", "5", "6"].includes(indice)) {
      navigate("/", { replace: true });
    }
  }, [indice]);

  // Manejador para desplazarse a una sección específica
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para obtener datos de la API (fetchData)
  const fetchData = async (url, setData) => {
    try {
      const response = await apiClient.get(url); // Usa apiClient para incluir el JWT
      setData(response.data); // Actualiza el estado con los datos recibidos
    } catch (error) {
      console.error("Error al obtener datos:", error);
      if (error.response && error.response.status === 401) {
        // Si el token no es válido, redirige al login
        navigate("/login");
      }
    }
  };

  // Obtener datos de médicos cuando el índice es 3 (Pedir Cita)
  useEffect(() => {
    if (indice === "3") {
      fetchData('/api/medicos', setMedicos); // Obtiene la lista de médicos
    }
  }, [indice, setMedicos]);

  // Obtener datos del dashboard cuando el índice es 6 (Autenticación requerida)
  useEffect(() => {
    if (indice === "6") {
      fetchData('/api/dashboard', (data) => {
        // Aquí podrías manejar los datos del dashboard si es necesario
        console.log("Datos del dashboard:", data);
      });
    }
  }, [indice]);

  if (indice == "1") {
    return (
      <main className="main-content">
        <section ref={homeRef}>
          <Servicios servicios={servicios} />
        </section>
        <section className="hero" ref={testimonioRef}>
          <h2 className="hero__title">Testimonios</h2>
          <div className="card maincard">
            <h3 className="card-header"><strong>María Ines Godoy</strong></h3>
            <h5 className="card-body">
              Asistí en febrero a la clínica por un problema de alimentación.
              Muchas gracias a todo el equipo. Nunca me había sentido tan apoyada.
              Hoy estoy participando en el programa de seguimiento y sé que
              lograré mi objetivo de sentirme bien y sobretodo sana.
            </h5>
          </div>
          <div className="card maincard">
            <h3 className="card-header"><strong>Fernando Tapia</strong></h3>
            <h5 className="card-body">
              Gracias al equipo de dermatología por todo el apoyo y orientación.
            </h5>
          </div>
          <div className="card maincardt">
            <h3 className="card-header"><strong>Fabiola Camposano</strong></h3>
            <h5 className="card-body">
              Se necesitan más profesionales dedicados a la salud mental. Gracias
              a todos los que me apoyaron en mi recuperación.
            </h5>
          </div>
        </section>
        <section>
          <button onClick={() => scrollToSection(homeRef)}>Ir a Inicio</button>
          <button onClick={() => scrollToSection(testimonioRef)}>Ir a Testimonios</button>
        </section>
      </main>
    );
  } else if (indice == "2") {
    return (
      <main>
        <section className="grid-container">
          <Medicos medicos={medicos} />
        </section>
      </main>
    );
  } else if (indice == "3") {
    return (
      <main>
      <section className="grid-container">
        <Formulario medicos={medicos} />
      </section>
    </main>
              
            
    );
  } else if (indice == "4") {
    return (
      <main className="main-content">
        <section className="hero">
          <h2 className="hero__title">Formulario de Contacto</h2>
          <form id="formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" required />
            <label htmlFor="asunto">Asunto:</label>
            <input type="text" id="asunto" required />
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" rows="4" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
        <section className="hero">
          <h2 className="hero__title">Ubicación</h2>
          <img
            src="Imagenes/mapa-hospital.png"
            alt="Mapa de la ubicación del hospital"
            width="500"
          />
        </section>
        <section className="hero">
          <h2 className="hero__title">Citas pacientes</h2>
          <button type="submit">Revisar próximas horas</button>
          <li className="ProximoPaciente"></li>
          <button type="submit">Pacientes en espera</button>
          <li className="SalaEspera"></li>
          <button type="submit">Evaluar tiempo de espera</button>
          <li className="TiempoEspera"></li>
        </section>
      </main>
    );
  } else if (indice == "5") {
    return (
      <main className="main-content">
        <section className="hero">
          <h2 className="hero__title">Precios y ofertas</h2>
          <nav>
            <h5> Por 2 o más consultas se harán descuentos! Pida su presupuesto</h5>
            <button type="submit">1 consulta</button>
          </nav>
          <nav>
            <button type="submit">2 consultas (igual servicios)</button>
          </nav>
          <nav>
            <button type="submit">2 consultas (múltiples servicios)</button>
          </nav>
        </section>
      </main>
    );
  } else if (indice == "6") {
    console.log("Estoy en el índice 6 - Autenticación requerida");
    return (
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin", "doctor"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mantenedor-medico"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <MantenedorMedico />
            </ProtectedRoute>
          }
        />
      </Routes>
    );
  } else {
    return "";
  }
}