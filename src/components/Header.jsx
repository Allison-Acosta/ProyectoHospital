
export default function Header(){
    return(
        <header className="header">
      <nav>
        <img
          src="Imagenes/Icono hospital.jpg"
          alt="Icono Hospital"
          width="100"
        />
        <h1 className="header__title">Clinica Águila</h1>
      </nav>

      <nav>
        <ul className="nav__list">
          <li className="nav__item" >
            <a href="index.html">Servicios</a>
          </li>

          <li className="nav__item" >
            <a href="EquipoMedico.html">Equipo Médico</a>
          </li>

          <li className="nav__item" >
            <a href="Precios.html">Aranceles</a>
          </li>

          <li className="nav__item" >
            <a href="Contacto.html">Contacto</a>
          </li>

          <li className="nav__item">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg rounded-pill"
            >
              <span className="button__text" 
                >Reservar Cita</span
              >
            </button>
          </li>
        </ul>
      </nav>
    </header>
    );
}