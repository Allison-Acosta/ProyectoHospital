# ProyectoHospital- Allison Acosta
Modulo 5 - Entrega 2

0. Se instala los paquetes instalados en package.json 
1. Se usa un formulario para ingresar. Para verlo hay que ir al boton "Mantenedor Medico" del Header (nuevo boton)
2. Ahi se ve un login y se puede especificar si se quiere ingresar como doctor o como administrador
3. Los login son: doctor o admin ya que si se inicia con el usuario paciente, dara como resultado una pantalla de acceso denegado:

Medico:
usuario: medico / password: medico123

Admin:
usuario: admin / password: admin123

Paciente:
usuario: paciente / password: paciente123

4. Si se ingresa como doctor se muestra una pantalla "bienvenido doctor"
    Si se ingresa como administrador se muestra la misma pantalla + un boton que lleva al mantenedor medico (Estos botones no estan haciendo nada por ahora).

5. Seguridad:
    En este proyecto de React, no se han implementado algunas medidas de seguridad como Clickjacking, XSS, SQL Injection y DoS, ya que actualmente estamos trabajando solo con datos locales en un archivo JSON y no contamos con una API o base de datos.

Clickjacking: Esta protección se aplica en el servidor, pero como solo estamos trabajando en el frontend, no podemos configurarla en este momento.

XSS (Cross-Site Scripting): React ya se encarga de escapar las entradas HTML por defecto, por lo que la exposición a XSS es mínima por ahora.

SQL Injection: No use bases de datos ni APIs externas, por lo que este tipo de ataque no fue relevante para este momento.

Ataques DoS (Denegación de Servicio): Como la aplicación no está conectada a un servidor, no estamos expuestos a este tipo de ataque.
