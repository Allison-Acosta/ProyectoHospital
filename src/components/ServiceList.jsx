import PortalView from "../views/PortalView";
import React, { useState } from "react";
import PropTypes from 'prop-types';

// Declaración del componente como una función
function Servicios({ servicios }) {    
     
  const [view, setView] = useState("home");

    return (
      <section className="hero">
         <button onClick={() => setView("portals")}>Ver Bienvenida</button>
         {view === "portals" && <PortalView />}
        {servicios.map((servicio, index) => (

          <React.Fragment key={index}>
           
            <p className="hero__text">{servicio.bajada}</p>
            <h5 className="servicio-descripcion">  {servicio.descripcion}</h5>
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
    ).isRequired, // "servicios" debe ser un array de objetos y es obligatorio
};
// Exportación del componente
export default Servicios;