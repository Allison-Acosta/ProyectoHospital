
import PortalView from "../views/PortalView";
import { useState } from "react";

// Declaración del componente como una función
export default function Servicios({ servicios }) {
    // Aquí puedes usar lógica y hooks si es necesario
    // Ejemplo: const [estado, setEstado] = React.useState(valorInicial);
  
    // Renderizado del JSX
      const [view, setView] = useState("home");

    return (
      <section className="hero">
         <button onClick={() => setView("portals")}>Portales</button>
         {view === "portals" && <PortalView />}
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