# ProyectoHospital- Allison Acosta

Modulo 6 - Entrega Final

1. Manifiesto: Se agrega un archivo manifest.json en la carpeta public
   Adicionalmente se crea la carpeta icons con iconos del hospital en 512 y 128 px.
2. Integración de Service Worker para Gestión Avanzada de Caché:
   -CacheFirst: Para archivos estáticos como CSS, JS e imágenes. Primero se busca en la caché y, si no está, se hace una solicitud a la red.
   -NetworkFirst: Para solicitudes API. Primero se intenta obtener los datos de la red y, si falla, se usa la caché.
   -Stale-While-Revalidate: Para contenido mixto. Se sirve la respuesta de la caché mientras se actualiza en segundo plano.
3. Se notifica al usuario si hay cambios. Se modifica el main.jsx para eso

4. Acceso a perifericos del sistema operativo.

- Se agrega la api de georeferenciacion.
- Al ingresar a ReservarCita, se muestra un mensaje en conosola con la informacion de referencia del usuario.
- Se edita AppointmentForm.tsx

5. Consumo de API externa para datos medicos (PENDIENTE)
6. Pruebas de rendimiento: Se adjuntan los archivos Ligthhouse en la carpeta documentos.
