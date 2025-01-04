import React, { useState, useEffect, useRef } from "react"; // Importar React y useState
import PropTypes from 'prop-types';

// Declaración del componente como una función
function Formulario({ medicos }) {
    // Estados para cada campo del formulario
    const [nombre, setNombre] = useState(""); // Guardar el valor del campo "nombre"
    const [email, setEmail] = useState(""); // Guardar el valor del campo "email"
    const [mensaje, setMensaje] = useState(""); // Guardar el valor del campo "mensaje"

    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
    const [medicosLista, setMedicosLista] = useState([]);
    const [diasSeleccionados, setDiasSeleccionados] = useState({ AM: [], PM: [] }); // Estado para almacenar los días seleccionados para cada turno


    // Usamos useEffect para cargar los médicos desde el JSON
    useEffect(() => {
        setMedicosLista(medicos); // Asigna la lista de médicos al estado
    }, []);

    // Función para manejar el cambio de opción seleccionada
    const manejarCambioOpcion = (e) => {
        setOpcionSeleccionada(e.target.value); // Actualiza el estado con el valor seleccionado
    };

    // Función para manejar la selección de días para un turno
    const manejarSeleccionDia = (turno, dia) => {
        setDiasSeleccionados((prevState) => {
        const nuevoSeleccion = { ...prevState }; // Copiamos el estado anterior para no modificarlo directamente
    
        // Si el turno seleccionado es AM, aseguramos que solo haya un día seleccionado en AM o PM
        if (turno === "AM") {
            // Si ya está seleccionado, lo desmarcamos
            if (nuevoSeleccion[turno] === dia) {
            nuevoSeleccion[turno] = ""; // Desmarcar el día
            } else {
            nuevoSeleccion[turno] = dia; // Seleccionar el nuevo día para AM
            nuevoSeleccion["PM"] = ""; // Desmarcar cualquier día en PM
            }
        } else if (turno === "PM") {
            // Si ya está seleccionado, lo desmarcamos
            if (nuevoSeleccion[turno] === dia) {
            nuevoSeleccion[turno] = ""; // Desmarcar el día
            } else {
            nuevoSeleccion[turno] = dia; // Seleccionar el nuevo día para PM
            nuevoSeleccion["AM"] = ""; // Desmarcar cualquier día en AM
            }
        }
    
        return nuevoSeleccion; // Devolver el nuevo estado con el día actualizado
        });
    };

    // Función para manejar el envío del formulario
    const manejarEnvio = (e) => {
        e.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
        const medicoSeleccionado = medicosLista.find(medico => medico.nombre === opcionSeleccionada);
        // Aquí puedes procesar los datos del formulario (por ejemplo, enviarlos a un servidor)
        console.log("Formulario enviado:", { nombre, email, mensaje, medicoSeleccionado, diasSeleccionados });
    };

    // Obtener los horarios disponibles del médico seleccionado
    const obtenerHorariosDisponibles = () => {
        if (!opcionSeleccionada) return null;

        const medico = medicosLista.find((medico) => medico.nombre === opcionSeleccionada);
        return medico ? medico.horarios : null;
    };

    const horariosDisponibles = obtenerHorariosDisponibles();

    // Queremos que al mandar el formulario. El foco quede en el campo nombre (por si se quiere hacer una nueva cita)
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
        
        };

    return (
        <div>
        <h1>Formulario de Contacto</h1>
        <form onSubmit={manejarEnvio}>
            {/* Campo de nombre */}
            <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
                ref = {inputRef}
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} // Actualiza el estado al cambiar el valor del campo
                placeholder="Ingresa tu nombre"
                required
            />
            </div>

            {/* Campo de email */}
            <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado al cambiar el valor del campo
                placeholder="Ingresa tu correo electrónico"
                required
            />
            </div>

            {/* Campo de mensaje */}
            <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)} // Actualiza el estado al cambiar el valor del campo
                placeholder="Escribe tu mensaje"
                required
            />
            </div>

            {/* Campo seleccionador */}
            <div>
            <label htmlFor="medico">Selecciona un Médico:</label>
            <select
                id="medico"
                value={opcionSeleccionada}
                onChange={manejarCambioOpcion}
                required
            >
                <option value="">-- Elige un médico --</option>
                {/* Generamos las opciones dinámicamente desde el JSON */}
                {medicosLista.map((medico) => (
                <option key={medico.nombre} value={medico.nombre}>
                    {medico.nombre}
                </option>
                ))}
            </select>
            </div>

            {/* Tabla de horarios del médico seleccionado */}
            {horariosDisponibles && (
                <div>
                <h3>Selecciona los días disponibles para {opcionSeleccionada}</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Turno</th>
                        <th>Días disponibles</th>
                    </tr>
                    </thead>
                    <tbody>
                    {["AM", "PM"].map((turno) => (
                        <tr key={turno}>
                        <td>{turno}</td>
                        <td>
                            {horariosDisponibles[turno].map((dia) => (
                            <label key={dia}>
                                <input
                                type="checkbox"
                                checked={diasSeleccionados[turno].includes(dia)}
                                onChange={() => manejarSeleccionDia(turno, dia)}
                                />
                                {dia}
                            </label>
                            ))}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            )}

            {/* Botón de envío */}
            <button type="submit" onClick={handleFocus} >Enviar</button>
        </form>
        </div>
    );
}
// Definición de PropTypes
Formulario.propTypes = {
    medicos: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired, // nombre debe ser un string y es obligatorio
            horarios: PropTypes.shape({
                AM: PropTypes.arrayOf(PropTypes.string).isRequired, // AM debe ser un array de strings
                PM: PropTypes.arrayOf(PropTypes.string).isRequired, // PM debe ser un array de strings
            }).isRequired, // horarios es un objeto y es obligatorio
        })
    ).isRequired, // medicos debe ser un array de objetos y es obligatorio
};
// Exportación del componente
export default Formulario;