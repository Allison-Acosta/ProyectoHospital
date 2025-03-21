import React, { useState, useEffect, useRef } from "react";
import { initDB, addCita, getCitas } from "./db";

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

const Formulario: React.FC<FormularioProps> = ({ medicos }) => {
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");
    const [opcionSeleccionada, setOpcionSeleccionada] = useState<string>("");
    const [medicosLista, setMedicosLista] = useState<Medico[]>([]);
    const [diasSeleccionados, setDiasSeleccionados] = useState<{ AM: string[]; PM: string[] }>({ AM: [], PM: [] });
    const [db, setDb] = useState<IDBDatabase | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    // Cargar datos desde localStorage al montar el componente
    useEffect(() => {
        const storedNombre = localStorage.getItem("nombre");
        const storedEmail = localStorage.getItem("email");

        if (storedNombre) setNombre(storedNombre);
        if (storedEmail) setEmail(storedEmail);

        console.log("Datos cargados desde localStorage:", { storedNombre, storedEmail });
    }, []);

    // Guardar nombre en localStorage cuando cambia
    useEffect(() => {
        localStorage.setItem("nombre", nombre);
        console.log("Nombre guardado en localStorage:", nombre);
    }, [nombre]);

    // Guardar email en localStorage cuando cambia
    useEffect(() => {
        localStorage.setItem("email", email);
        console.log("Email guardado en localStorage:", email);
    }, [email]);

    // Inicializar IndexedDB al montar el componente
    useEffect(() => {
        initDB()
            .then((database) => {
                setDb(database);
                console.log("Base de datos inicializada correctamente");
            })
            .catch((error) => {
                console.error("Error al inicializar la base de datos:", error);
            });
    }, []);

    // Cargar la lista de médicos
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
        setMensaje("");
        setOpcionSeleccionada("");
        setDiasSeleccionados({ AM: [], PM: [] });
    };

    const manejarEnvio = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Formulario enviado");

        const medicoSeleccionado = medicosLista.find((medico) => medico.nombre === opcionSeleccionada);
        console.log("Médico seleccionado:", medicoSeleccionado);

        if (db && medicoSeleccionado) {
            const cita = {
                nombre,
                email,
                mensaje,
                medico: medicoSeleccionado.nombre,
                diasSeleccionados,
                fecha: new Date().toISOString(),
            };

            console.log("Cita a guardar:", cita);

            try {
                const id = await addCita(db, cita);
                console.log("Cita guardada en IndexedDB con ID:", id);
                reiniciarCampos();
            } catch (error) {
                console.error("Error al guardar la cita:", error);
            }
        } else {
            console.error("Base de datos no inicializada o médico no seleccionado");
        }
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
            <p>Bienvenido </p>
            <form onSubmit={manejarEnvio}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        ref={inputRef}
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresa tu nombre"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu correo electrónico"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Escribe tu mensaje"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="medico">Selecciona un Médico:</label>
                    <select
                        id="medico"
                        value={opcionSeleccionada}
                        onChange={manejarCambioOpcion}
                        required
                    >
                        <option value="">-- Elige un médico --</option>
                        {medicosLista.map((medico) => (
                            <option key={medico.nombre} value={medico.nombre}>
                                {medico.nombre}
                            </option>
                        ))}
                    </select>
                </div>

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
                                                        onChange={() => manejarSeleccionDia(turno as "AM" | "PM", dia)}
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

                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default Formulario;