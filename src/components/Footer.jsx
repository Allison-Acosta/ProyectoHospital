export default function Footer(){
return(
    <footer className="footer">
    <h3 className="hero__text">Enlaces Rápidos</h3>
    <ul className="nav__list">
      <li className="nav__item" >
        <a href="Contacto.html">Contacto</a>
      </li>
      <li className="nav__item" >
        <a href="EquipoMedico.html">Equipo Médico</a>
      </li>
      <li className="nav__item">
        <a href="Reservar.html">Reservar Cita</a>
      </li>
      <li className="nav__item" >
        <a href="Servicios.html">Servicios</a>
      </li>
      <li className="nav__item" >
        <a href="MantenedorMedico.html">Mantenedor Medico</a>
      </li>
    </ul>

    <h3 className="hero__text">Información de Contacto</h3>
    <p className="footer__text">Teléfono: (123) 456-7890</p>
    <p className="footer__text">Email: contacto@hospital.com</p>
    <p className="footer__text">Dirección: Calle Ejemplo 123, Ciudad, País</p>

    <h3 className="hero__text">Redes Sociales</h3>
    
    <ul className="nav__list">
      <li className="nav__item" >
        <a href="https://www.facebook.com" target="_blank">Facebook</a>
      </li>
      <li className="nav__item" >
        <a href="https://twitter.com" target="_blank">Twitter</a>
      </li>
      <li className="nav__item" >
        <a href="https://www.instagram.coml" target="_blank">Instagram</a>
      </li>
      <li className="nav__item" >
        <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
      </li>
    </ul>

    <p className="footer__text">
      &copy; 2024 Clinica Aguila. Todos los derechos reservados.
    </p>
  </footer>



);



}