import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PerformanceProfiler from './components/PerformanceProfiler.jsx'; // Importa el componente PerformanceProfiler

// Renderiza la aplicación envuelta en PerformanceProfiler
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PerformanceProfiler id="AppProfiler">
      <App />
    </PerformanceProfiler>
  </StrictMode>,
);