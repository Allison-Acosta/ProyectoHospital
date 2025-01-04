import React from "react"; // Importar React (opcional en versiones recientes si usas JSX)
import withModal from './PortalExample';

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

export default withModal(Medicos);