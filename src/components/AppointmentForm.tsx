import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../auth/AuthContext";

interface Horarios {
    AM: string[];
    PM: string[];
}

interface Medico {
    nombre: string;
    horarios: Horarios;
}

interface FormularioProps {
    medicos: Medico[];
}
// Declaración del componente como una función
const Formulario: React.FC<FormularioProps> = ({ medicos }) => {
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");
    const [opcionSeleccionada, setOpcionSeleccionada] = useState<string>("");
    const [medicosLista, setMedicosLista] = useState<Medico[]>([]);
    const [diasSeleccionados, setDiasSeleccionados] = useState<{ AM: string[]; PM: string[] }>({ AM: [], PM: [] });

    const { user } = useAuth();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMedicosLista(medicos);
        if (inputRef.current) inputRef.current.focus();
    }, [medicos]);

    const manejarCambioOpcion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcionSeleccionada(e.target.value);
    };

    const manejarSeleccionDia = (turno: "AM" | "PM", dia: string) => {
        setDiasSeleccionados((prevState) => {
            const nuevoSeleccion = { ...prevState };
            
            if (turno === "AM") {
                nuevoSeleccion[turno] = nuevoSeleccion[turno].includes(dia) ? [] : [dia];
                nuevoSeleccion["PM"] = [];
            } else {
                nuevoSeleccion[turno] = nuevoSeleccion[turno].includes(dia) ? [] : [dia];
                nuevoSeleccion["AM"] = [];
            }
            return nuevoSeleccion;
        });
    };

    const reiniciarCampos = () => {
        setNombre("");
        setEmail("");
        setMensaje("");
        setOpcionSeleccionada("");
        setDiasSeleccionados({ AM: [], PM: [] });
    };

    const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const medicoSeleccionado = medicosLista.find((medico) => medico.nombre === opcionSeleccionada);
        console.log("Formulario enviado:", { nombre, email, mensaje, medicoSeleccionado, diasSeleccionados });
        reiniciarCampos();
    };

    const obtenerHorariosDisponibles = (): Horarios | null => {
        if (!opcionSeleccionada) return null;
        const medico = medicosLista.find((medico) => medico.nombre === opcionSeleccionada);
        return medico ? medico.horarios : null;
    };

    const horariosDisponibles = obtenerHorariosDisponibles();

        

    return (
        <>
        <h1>Formulario de Contacto</h1>

<p>Bienvenido, {user?.username} </p>
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
                    {horariosDisponibles[turno as "AM" | "PM"].map((dia) => (
                    <label key={dia}>
                        <input
                        type="checkbox"
                        checked={diasSeleccionados[turno as "AM" | "PM"].includes(dia)}
                        onChange={() => manejarSeleccionDia(turno as "AM"|"PM", dia)}
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
    <button type="submit" >Enviar</button>
</form>
        </>
    );
};

export default Formulario;
