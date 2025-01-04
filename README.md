# ProyectoHospital- Allison Acosta

El DOM Virtual es una representación ligera en memoria del DOM real. Es una copia del DOM real, pero optimizada para ser manipulada de manera más eficiente. React utiliza esta representación para realizar cambios en la interfaz de usuario sin modificar directamente el DOM real, lo que es costoso en términos de rendimiento.
Cuando se filtra la lista de doctores o servicios, React solo actualiza los elementos que han cambiado en el DOM real, en lugar de volver a renderizar toda la lista.

1. Al ingresar a pedir Cita, el foco está en el nombre. (Se usó useEfect)
   Luego de pedir una hora, el foco tambien se enfoca en Nombre (para poder pedir una nueva hora)
   (Se borran los campos ya escritos para pedir una nueva hora)

2. En DoctorCard.jsx se implementan los fragmentos para no agregar nodos adicionales al DOM

3. En Trunk en lugar de traer las variables medicos y servicios desde app.jsx se trabaja con context
   Se crea el archivo Context.jsx que entrega los valores de medicos y servicios al Trunk.

4. Se crea un portal para dar la bienvenida en servicios.

5. Se crean los HOC (Modal.jsx y PortalExample) para que se muestre la informacion de cada medico a partir de un boton.

6. Al fina de AppointmentForm.jsx, ServiceLost.jsx y DoctorCard.jsx se implementan PropTypes para validar los tipos de datos.

7. Se crea PerformaceProfiler.jsx para mostrar en consola el rendimiento.
