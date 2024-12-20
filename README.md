# ProyectoHospital- Allison Acosta

1. Se crea el proyecto en React.
2. Se tienen 3 componentes principales, el Header, el Trunk y el Footer que tienen la interfaz principal del proyecto.

3. Se crean los componentes DoctorCard, ServiceList y AppointmentForm.
   DoctorCard se usa multiples veces segun los "objetos" en el archivo medicos.json.
   ServiceList se usa multiples veces segun los "objetos" en el arhivo servicios.json

4. Desde el app.jsx se le entrega los props a Trunk <Trunk indice={indice} medicos={medicos} servicios = {servicios}/>
   indice: viene a ser un indicador para lo que se quiere mostrar, 1 para los servicios, 2 para el equipo medico, 3 para los aranceles, etc...
   Los botones del heather tambien usan eso indice para actualizar el trunk.

medicos: son los objetos del medicos.json. estos atributos se usan para desplegar la informacion del equipo medico y tambien para al agendar una cita, ver los nombres de los medicos y su horario.

servicios: son los servicios disponibles, se leen del archivo servicios.json

5. En multiples partes se usan listas y keys. Donde mejor se ve es en AppointmentForm.jsx desde las lineas 134
   Aca se usa para marcar o desmarcar los dias disponibles de cada medico.

6. Se usa UseStates para guardar los campos del formulario antes de que se llenen.
   const [nombre, setNombre] = useState(""); // Guardar el valor del campo "nombre"
   const [email, setEmail] = useState(""); // Guardar el valor del campo "email"
   const [mensaje, setMensaje] = useState(""); // Guardar el valor del campo "mensaje"

Se toman por defecto campos vacios para luego ser llenados (cambiados) con la informacion entregada por el usuario.

7. Al pedir una cita, se muestra en consola los datos de la cita y se puede ademas ver la informacion del medico seleccionado.
