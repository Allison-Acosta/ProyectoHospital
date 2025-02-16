# ProyectoHospital- Allison Acosta
Modulo 5 - Entrega Final

1. Se agrega en DorctoCard: AgregarMedico ("POST), ActualizarMedico (PUT) y eliminarMedico("DELETE).
2. Se modifica AppoitmentForm a typeScript
3. Seguridad: Se usa Reac Router Dom para autentificar a los usuarios
    Solo usuarios autorizados pueden ingresar a MAntenedorMedico.
    Solo pacientes pueden pedir citas
    se validan y encriptan las contraseñas.
4. Uso de useState: Se usa en multiples zonas del codigo. 2 ejemplos son:
    En DoctorCard se usa useState para gestionar el estado de los medicos.
    En AppointmentForm tambien se usa para gestionar la informacion temporal de las citas.
5. Uso de useEffect: Se usa en multiples zonas del codigo.
    En DoctorCard se usa useState para obtener la informacion de los medicos. (tras presionar "recargar")
    En AppointmentForm tambien se usa obtener la informacion de los medicos (sus horarios al momento de necesitarlo)
6. Se valida el Login mediante un hook para validar que el usuario solo contenga letras (no numeros) y que la contraseña tenga mas de un caracter. 
7. Manejo de Errores. En Equipo medico se gestionan los errores durante la peticiones en la API. 
8. Se revisan las reglas de los hooks mediante React Developer Tools para Chrome. (no sé que ejemplo mostrar, pero estan lindos).
9. Clickjacking:En este proyecto de React, no se han implementado algunas medidas de seguridad como Clickjacking, XSS, SQL Injection y DoS, ya que actualmente estamos trabajando solo con datos locales en un archivo JSON y no contamos con una API o base de datos.
Clickjacking: Esta protección se aplica en el servidor, pero como solo estamos trabajando en el frontend, no podemos configurarla en este momento.
XSS (Cross-Site Scripting): React ya se encarga de escapar las entradas HTML por defecto, por lo que la exposición a XSS es mínima por ahora.
SQL Injection: No use bases de datos ni APIs externas, por lo que este tipo de ataque no fue relevante para este momento.
Ataques DoS (Denegación de Servicio): Como la aplicación no está conectada a un servidor, no estamos expuestos a este tipo de ataque.