# ProyectoHospital- Allison Acosta
Modulo 5 - Entrega Final

1. Se agrega en DorctoCard: AgregarMedico ("POST), ActualizarMedico (PUT) y eliminarMedico("DELETE).
2. Se modifica AppoitmentForm a typeScript
3. Seguridad: 
4. Uso de useState: Se usa en multiples zonas del codigo. 2 ejemplos son:
    En DoctorCard se usa useState para gestionar el estado de los medicos.
    En AppointmentForm tambien se usa para gestionar la informacion temporal de las citas.
5. Uso de useEffect: Se usa en multiples zonas del codigo.
    En DoctorCard se usa useState para obtener la informacion de los medicos. (tras presionar "recargar")
    En AppointmentForm tambien se usa obtener la informacion de los medicos (sus horarios al momento de necesitarlo)
6. Se valida el Login mediante un hook para validar que el usuario solo contenga letras (no numeros) y que la contraseña tenga mas de un caracter. 
7. Manejo de Errores. En Equipo medico se gestionan los errores durante la peticiones en la API. 
8. Se revisan las reglas de los hooks mediante React Developer Tools para Chrome. (no sé que ejemplo mostrar, pero estan lindos)