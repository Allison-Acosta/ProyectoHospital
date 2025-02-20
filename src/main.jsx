import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PerformanceProfiler from './components/PerformanceProfiler.jsx'; // Importa el componente PerformanceProfiler


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
  .then(() => console.log("Service Worker registrado"))
  .catch(error => console.log("Error en el registro del Service Worker:", error));
  }
// Renderiza la aplicación envuelta en PerformanceProfiler
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PerformanceProfiler id="AppProfiler">
      <App />
    </PerformanceProfiler>
  </StrictMode>,
);


