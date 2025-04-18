import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PerformanceProfiler from './components/PerformanceProfiler.jsx'; // Importa el componente PerformanceProfiler

// Registrar el Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
        .then(() => console.log("Service Worker registrado"))
        .catch(error => console.log("Error en el registro del Service Worker:", error));
}

// Escuchar mensajes del Service Worker para notificar al usuario de una nueva versión
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data.action === "newVersionAvailable") {
            // Mostrar una notificación al usuario
            const userConfirmed = confirm("¡Hay una nueva versión disponible! ¿Deseas recargar la página para actualizar?");
            if (userConfirmed) {
                window.location.reload(); // Recargar la página para aplicar la actualización
            }
        }
    });

    // Forzar la actualización del Service Worker si hay una nueva versión
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage("skipWaiting");
    }
}

// Renderiza la aplicación envuelta en PerformanceProfiler
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PerformanceProfiler id="AppProfiler">
            <App />
        </PerformanceProfiler>
    </StrictMode>,
);
