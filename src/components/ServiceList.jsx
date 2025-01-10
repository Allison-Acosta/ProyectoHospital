import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import PortalView from "../views/PortalView";

// Declaración del componente como una función
function Servicios() {
  const [view, setView] = useState("home");
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
  const [error, setError] = useState(null); // Estado para manejar errores

  // Simulación de la obtención de datos desde una API
  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("https://677dc44194bde1c125295d49.mockapi.io/api/v1/servicios"); // URL simulada
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setServicios(data); // Cargar los datos obtenidos en el estado
      } catch (err) {
        setError(err.message); // Manejo de errores
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchServicios();
  }, []); // Se ejecuta una vez al montar el componente

  if (loading) {
    return <p>Cargando datos...</p>; // Mostrar mensaje de carga
  }

  if (error) {
    return <p>Error: {error}</p>; // Mostrar mensaje de error
  }

  return (
    <section className="hero">
      <button onClick={() => setView("portals")}>Ver Bienvenida</button>
      {view === "portals" && <PortalView />}
      {servicios.map((servicio, index) => (
        <React.Fragment key={index}>
          <p className="hero__text">{servicio.bajada}</p>
          <h5 className="servicio-descripcion">{servicio.descripcion}</h5>
          <p className="servicio-disponibilidad">
            Disponibilidad: {servicio.disponibilidad === "true" ? "Disponible" : "No disponible"}
          </p>
        </React.Fragment>
      ))}
    </section>
  );
}

Servicios.propTypes = {
  servicios: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired, // "nombre" debe ser un string y es obligatorio
      bajada: PropTypes.string.isRequired, // "bajada" debe ser un string y es obligatorio
      descripcion: PropTypes.string.isRequired, // "descripcion" debe ser un string y es obligatorio
      disponibilidad: PropTypes.string.isRequired, // "disponibilidad" debe ser un string y es obligatorio
    })
  ),
};

// Exportación del componente
export default Servicios;