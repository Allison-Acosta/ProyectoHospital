import Trunk from "./Trunk";

export default function Header({ onIndiceChange }) {
    return (
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
            <li className="nav__item">
              <button onClick={() => onIndiceChange("1")}>Servicios</button>
            </li>
  
            <li className="nav__item">
              <button onClick={() => onIndiceChange("2")}>Equipo Médico</button>
            </li>
  
            <li className="nav__item">
              <button onClick={() => onIndiceChange("5")}>Aranceles</button>
            </li>
  
            <li className="nav__item">
              <button onClick={() => onIndiceChange("4")}>Contacto</button>
            </li>
  
            <li className="nav__item">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg rounded-pill"
                onClick={() => onIndiceChange("3")}
              >
                <span className="button__text">Reservar Cita</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }