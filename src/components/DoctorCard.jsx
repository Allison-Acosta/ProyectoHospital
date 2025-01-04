import React from "react"; // Importar React (opcional en versiones recientes si usas JSX)
import withModal from './PortalExample';
import PropTypes from 'prop-types';

// Declaración del componente como una función
function Medicos({ medicos, openModal }) {
  // Aquí puedes usar lógica y hooks si es necesario
  // Ejemplo: const [estado, setEstado] = React.useState(valorInicial);

  // Renderizado del JSX
  return (
    <div className="medicos-container">
      {
      medicos.map((medico, index) => (
        <React.Fragment key ={index}>
          <h3 className="medico-nombre">{medico.nombre}</h3>
          <p className="medico-especialidad">{medico.especialidad}</p>
          <p className="medico-años">Años de experiencia: {medico.años}</p>
          <p className="medico-disponibilidad">
            Disponibilidad: {medico.disponibilidad === "true" ? "Disponible" : "No disponible"}
          </p>

          <button onClick={() => openModal(medico)}>Ver detalles</button>
        </React.Fragment>
      ))}
    </div>
  );
}

Medicos.propTypes = {
  medicos: PropTypes.arrayOf(
      PropTypes.shape({
          nombre: PropTypes.string.isRequired, // nombre debe ser un string y es obligatorio
          disponibilidad: PropTypes.string.isRequired,
          años: PropTypes.number.isRequired,
          contacto: PropTypes.shape({
            telefono: PropTypes.number.isRequired,
            mail: PropTypes.string.isRequired
          }),
          horarios: PropTypes.shape({
              AM: PropTypes.arrayOf(PropTypes.string).isRequired, // AM debe ser un array de strings
              PM: PropTypes.arrayOf(PropTypes.string).isRequired, // PM debe ser un array de strings
          }).isRequired, // horarios es un objeto y es obligatorio
      })
  ).isRequired, // medicos debe ser un array de objetos y es obligatorio
};

export default withModal(Medicos);