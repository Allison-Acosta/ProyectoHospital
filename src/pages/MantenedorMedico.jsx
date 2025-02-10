

const MantenedorMedico = () => {
  const mostrarMedicos = () => {
    console.log("Mostrar médicos");
  };

  const orderMedicosByName = () => {
    console.log("Ordenar médicos por nombre");
  };

  const orderMedicosByEspeciality = () => {
    console.log("Ordenar médicos por especialidad");
  };

  const lookFor = () => {
    console.log("Buscar médico");
  };

  const agregarMedico = () => {
    console.log("Agregar médico");
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Mantenedor de Funcionarios</h1>
        <nav>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/">Página Principal</a>
            </li>
            <li className="nav__item">
              <a href="/equipo-medico">Equipo Médico</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <ul>
          <button onClick={mostrarMedicos}>Mostrar Médicos</button>
          <button onClick={orderMedicosByName}>Ordenar por Nombre</button>
          <button onClick={orderMedicosByEspeciality}>Ordenar por Especialidad</button>
          <button onClick={lookFor}>Buscar Médico</button>
          <button onClick={agregarMedico}>Agregar Médico</button>
        </ul>
      </main>
      <div id="output"></div>
    </div>
  );
};

export default MantenedorMedico;
