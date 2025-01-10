
import React, { useState, useEffect } from "react"; // Importar React (opcional en versiones recientes si usas JSX)

import withModal from './PortalExample';
import PropTypes from 'prop-types';

// Declaración del componente como una función

function Medicos({ openModal }) {
  const [medicosAPI, setMedicosAPI] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [datosObtenidos, setDatosObtenidos] = useState(true);
  const [recargar, setRecargar] = useState(false); // Estado para controlar recargas

  const cargarDatos = async () => {
    setCargando(true); // Mostrar mensaje de carga
    try {
      const response = await fetch(
        "https://677dc44194bde1c125295d49.mockapi.io/api/v1/medicos"
      );
      if (!response.ok) {
        setDatosObtenidos(false); // Indicar que hubo un error al obtener los datos
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();

      // Simular un retraso de 3 segundos
      setTimeout(() => {
        setMedicosAPI(data);
        setCargando(false); // Ocultar mensaje de carga
        setDatosObtenidos(true); // Indicar que los datos se obtuvieron correctamente
      }, 3000);

    } catch (error) {
      console.error("Error:", error);
      setCargando(false); // Ocultar mensaje de carga
      setDatosObtenidos(false); // Indicar que hubo un error al obtener los datos
    }
  };

  useEffect(() => {
    // Cargar datos al montar el componente o al cambiar el estado `recargar`
    cargarDatos();
  }, [recargar]); // Ejecutar efecto solo cuando `recargar` cambie
  

  const handleRecargar = () => {
    setRecargar((prev) => !prev); // Alternar el estado para forzar recarga

  };

  return (
    <div className="medicos-container">

      <button onClick={handleRecargar}>Actualizar Staff</button>
      {
        datosObtenidos ? (
          cargando ? (
            <p>Cargando Staff...</p>
          ) : (
            medicosAPI.map((medico, index) => (
              <React.Fragment key={index}>
                <h3 className="medico-nombre">{medico.nombre}</h3>
                <p className="medico-especialidad">{medico.especialidad}</p>
                <p className="medico-años">
                  Años de experiencia: {medico.años}
                </p>
                <p className="medico-disponibilidad">
                  Disponibilidad: {medico.disponibilidad === true ? "Disponible" : "No disponible"}
                </p>

                <button onClick={() => openModal(medico)}>Ver detalles</button>
              </React.Fragment>
            ))
          )
        ) : (
          <p>Error en la obtención de datos, por favor actualiza.</p>
        )
      }

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