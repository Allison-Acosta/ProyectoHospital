import React from "react"; // Importar React (opcional en versiones recientes si usas JSX)
import PropTypes from 'prop-types';

// Declaración del componente como una función
function Servicios({ servicios }) {
    // Aquí puedes usar lógica y hooks si es necesario
    // Ejemplo: const [estado, setEstado] = React.useState(valorInicial);
  
    // Renderizado del JSX
    return (
      <section className="hero">
        {servicios.map((servicio, index) => (

          <div className="serviceList" key={index}>
            
            <p className="hero__text">{servicio.bajada}</p>
            <h5 className="servicio-descripcion">  {servicio.descripcion}</h5>
            <p className="servicio-disponibilidad">
              Disponibilidad: {servicio.disponibilidad === "true" ? "Disponible" : "No disponible"}
            </p>
  
        </div>
        ))}
      </section>
    );
  }

  Formulario.propTypes = {
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