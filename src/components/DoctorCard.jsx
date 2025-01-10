import React, { useState } from "react";
import withModal from './PortalExample';
import PropTypes from 'prop-types';

// Declaración del componente como una función
function Medicos({ medicos, openModal }) {
  // Estado local para los médicos visibles
  const [medicosFiltrados, setMedicosFiltrados] = useState(medicos);

  // Método para filtrar médicos por especialidad
  const filtrarPorEspecialidad = () => {
    const especialidad = prompt("Indica la especialidad que deseas buscar:");

    if (!especialidad) {
      alert("Debes ingresar una especialidad.");
      return;
    }

    const filtrados = medicos.filter(
      (medico) => medico.especialidad.toLowerCase() === especialidad.toLowerCase()
    );

    if (filtrados.length === 0) {
      alert("No se encontraron médicos con esa especialidad.");
    }

    setMedicosFiltrados(filtrados);
  };

  const mostrarTodos = () => {
    setMedicosFiltrados(medicos); // Restablece el estado al array completo
  };

  // Renderizado del JSX
  return (
    <div className="medicos-container">
      <button onClick={filtrarPorEspecialidad}>Filtrar por Especialidad</button>
      <button onClick={mostrarTodos}>Mostrar Todos</button>
      {medicosFiltrados.map((medico, index) => (
        <React.Fragment key={index}>
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