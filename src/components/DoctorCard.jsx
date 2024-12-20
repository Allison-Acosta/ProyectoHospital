import React from "react"; // Importar React (opcional en versiones recientes si usas JSX)

// Declaración del componente como una función
export default function Medicos({ medicos }) {
  // Aquí puedes usar lógica y hooks si es necesario
  // Ejemplo: const [estado, setEstado] = React.useState(valorInicial);

  // Renderizado del JSX
  return (
    <section className="medicos-container">
      {medicos.map((medico, index) => (
        <div className="medico-card" key={index}>
          <h3 className="medico-nombre">{medico.nombre}</h3>
          <p className="medico-especialidad">{medico.especialidad}</p>
          <p className="medico-años">Años de experiencia: {medico.años}</p>
          <p className="medico-disponibilidad">
            Disponibilidad: {medico.disponibilidad === "true" ? "Disponible" : "No disponible"}
          </p>

          <h4>Horarios:</h4>
          <p><strong>AM:</strong> {medico.horarios.AM.join(", ")}</p>
          <p><strong>PM:</strong> {medico.horarios.PM.join(", ")}</p>

          <h4>Contacto:</h4>
          <p><strong>Teléfono:</strong> {medico.contacto.telefono}</p>
          <p><strong>Email:</strong> <a href={`mailto:${medico.contacto.mail}`}>{medico.contacto.mail}</a></p>
        </div>
      ))}
    </section>
  );
}