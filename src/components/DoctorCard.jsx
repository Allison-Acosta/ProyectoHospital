import React, { useState, useEffect } from "react";
import withModal from "./PortalExample";
import PropTypes from "prop-types";

function Medicos({ openModal }) {
  const [medicosAPI, setMedicosAPI] = useState([]);
  const [medicosFiltrados, setMedicosFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [datosObtenidos, setDatosObtenidos] = useState(true);
  const [recargar, setRecargar] = useState(false);

  const cargarDatos = async () => {
    setCargando(true);
    try {
      const response = await fetch(
        "https://677dc44194bde1c125295d49.mockapi.io/api/v1/medicos"
      );
      if (!response.ok) {
        setDatosObtenidos(false);
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();

      setTimeout(() => {
        setMedicosAPI(data);
        setMedicosFiltrados(data); // Inicializar con todos los médicos
        setCargando(false);
        setDatosObtenidos(true);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setCargando(false);
      setDatosObtenidos(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, [recargar]);

  const handleRecargar = () => {
    setRecargar((prev) => !prev); // Alternar el estado para forzar recarga
  };

  const handleFiltrarEspecialidad = () => {
    const especialidad = prompt("Ingrese la especialidad que desea filtrar:").trim();
    if (especialidad) {
      const filtrados = medicosAPI.filter(
        (medico) => medico.especialidad.toLowerCase() === especialidad.toLowerCase()
      );
      setMedicosFiltrados(filtrados);
    } else {
      alert("No se ingresó una especialidad válida.");
    }
  };

  const handleMostrarTodos = () => {
    setMedicosFiltrados(medicosAPI);
  };

  return (
    <div className="medicos-container">
      <button onClick={handleRecargar}>Actualizar Staff</button>
      <button onClick={handleFiltrarEspecialidad}>Filtrar por especialidad</button>
      <button onClick={handleMostrarTodos}>Mostrar Todos</button>
      {datosObtenidos ? (
        cargando ? (
          <p>Cargando Staff...</p>
        ) : medicosFiltrados.length > 0 ? (
          medicosFiltrados.map((medico, index) => (
            <React.Fragment key={index}>
              <h3 className="medico-nombre">{medico.nombre}</h3>
              <p className="medico-especialidad">{medico.especialidad}</p>
              <p className="medico-años">
                Años de experiencia: {medico.años}
              </p>
              <p className="medico-disponibilidad">
                Disponibilidad:{" "}
                {medico.disponibilidad === true ? "Disponible" : "No disponible"}
              </p>
              <button onClick={() => openModal(medico)}>Ver detalles</button>
            </React.Fragment>
          ))
        ) : (
          <p>No se encontraron médicos con esa especialidad.</p>
        )
      ) : (
        <p>Error en la obtención de datos, por favor actualiza.</p>
      )}
    </div>
  );
}

Medicos.propTypes = {
  medicos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      disponibilidad: PropTypes.string.isRequired,
      años: PropTypes.number.isRequired,
      contacto: PropTypes.shape({
        telefono: PropTypes.number.isRequired,
        mail: PropTypes.string.isRequired,
      }),
      horarios: PropTypes.shape({
        AM: PropTypes.arrayOf(PropTypes.string).isRequired,
        PM: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default withModal(Medicos);