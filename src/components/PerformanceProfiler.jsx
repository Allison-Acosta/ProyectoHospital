import React, { Profiler } from 'react';

// Función de callback para el Profiler
function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
) {
    console.log(`Profiler [${id}] - ${phase}`);
    console.log(`Tiempo de renderizado: ${actualDuration} ms`);
    console.log(`Tiempo base estimado: ${baseDuration} ms`);
}

// Componente PerformanceProfiler
function PerformanceProfiler({ id, children }) {
    return (
        <Profiler id={id} onRender={onRenderCallback}>
            {children}
        </Profiler>
    );
}

export default PerformanceProfiler;