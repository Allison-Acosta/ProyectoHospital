# ProyectoHospital- Allison Acosta

1. Se creó una api externa para los medicos. (Es una copia del medicos.json)
   La ruta es: https://677dc44194bde1c125295d49.mockapi.io/api/v1/medicos

2. En DoctorCard.jsx en lugar de pedir el objeto con el json, se obtienen los datos a traves de la API creada.
   Los medicos mostrados en "Equipo medico" provienen de la API
   Se utilizó useEffect y useState para la implementacion

3. En el mismo metodo anterior se usó fetch para la peticion de datos. Se usó fetch ya que es un metodo simple incluido en React.
   (A diferencia de usar Axios). El manejo de errores se ve en el metodo.

4. Mientras se leen los datos se muestra un mensaje "cargando staff" ...
   Se retrazó la peticion 3 segundos, para poder ver este mensaje

5. Se crea un boton actualizar .... este llama al metodo "cargar datos" al igual que lo hace el useEffect al iniciar el DOM

6. Si los datos se obtienen mal. Se muestra un mensaje "error en la obtencion de datos, por favor actualizar"

7. Se crea un estado "recargar" ... este cambia cuando se apreta el boton actualizar. Entonces el metodo que llama a la API se ejecuta ya que la constante "recargar" cambia de estado.
