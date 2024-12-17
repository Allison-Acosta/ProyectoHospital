export default function Trunk()
{
    return(
        <main className="main-content">
      <section className="hero">
        <h2 className="hero__title">Bienvenidos.</h2>
        <h4 className="hero__text">
          En nuestra clínica, estamos comprometidos en brindarte el apoyo que
          necesitas en todo momento. Nacimos con el propósito de promover la
          prevención de enfermedades, enfocándonos en la atención temprana y el
          fomento de hábitos de vida saludables.
        </h4>
      </section>
      <section>
        <h2 className="hero__title">Servicios disponibles</h2>
        <button type="submit" >
          Solo disponibles
        </button>
        <button type="submit" >
          Mostrar todos
        </button>

        <ul className="nav__list">
          <li className="nav__item" data-disponible="true">
            <img
              src="Imagenes/dermatologia.jpg"
              alt="Dermatología"
              width="100"
            />
            <h3 className="hero__text">
              <strong>Dermatología y cuidados de la piel</strong>
            </h3>
            <h5>
              Nos especializamos en la prevención de los efectos negativos
              causados por la exposición a factores ambientales, tales como la
              radiación solar y la contaminación. Sabemos que estos factores
              pueden tener un impacto significativo en la salud de la piel y el
              bienestar general, por lo que nos enfocamos en ofrecer soluciones
              personalizadas para minimizar los riesgos asociados. Nuestro
              enfoque integral no solo abarca la protección contra los daños
              inmediatos, sino también estrategias para cuidar y fortalecer la
              salud a largo plazo.
            </h5>
          </li>

          <li className="nav__item" data-disponible="true">
            <img
              src="Imagenes/nutricionista.avif"
              alt="Nutrición"
              width="100"
            />
            <h3 className="hero__text"><strong>Nutrición y dietética</strong></h3>
            <h5>
              Sabemos que cada persona es única, por lo que diseñamos planes de
              alimentación personalizados, adaptados a las necesidades
              específicas de cada paciente. Consideramos su estilo de vida, sus
              preferencias, y los requerimientos nutricionales particulares para
              garantizar un enfoque equilibrado y efectivo. Nuestro objetivo es
              proporcionar opciones saludables que se ajusten a cada situación,
              promoviendo el bienestar y la salud a largo plazo.
            </h5>
          </li>

          <li className="nav__item" data-disponible="true">
            <img src="Imagenes/psiquiatria.jpg" alt="Psiquiatría" width="100" />
            <h3 className="hero__text">
              <strong>Psiquiatría y salud mental</strong>
            </h3>
            <h5>
              En nuestra clínica ofrecemos terapias psiquiátricas y psicológicas
              personalizadas para cada paciente, basadas en una evaluación
              profesional previa. Sabemos que la salud mental es fundamental
              para el bienestar general, por lo que brindamos un enfoque
              integral, adaptado a las necesidades individuales. Nuestro
              objetivo es proporcionar un espacio seguro y de apoyo, donde cada
              paciente pueda encontrar las herramientas necesarias para su
              recuperación y crecimiento personal.
            </h5>
          </li>

          <li className="nav__item" data-disponible="false">
            <h3 className="hero__text">
              <strong>Kinesiología</strong>
            </h3>
            <h5>Proximo servicio disponible. A partir de Junio 2025.</h5>
          </li>

          <li className="nav__item" data-disponible="false">
            <h3 className="hero__text">
              <strong>Ginecología</strong>
            </h3>
            <h5>Proximo servicio disponible. A partir de Agosto 2025.</h5>
          </li>

          <li className="nav__item" data-disponible="false">
            <h3 className="hero__text">
              <strong>Atención Dental</strong>
            </h3>
            <h5>Proximo servicio disponible. A partir del 2026.</h5>
          </li>
        </ul>
      </section>
      <section className="hero">
        <h2 className="hero__title">Testimonios</h2>
        <div className="card maincard">
          <h3 className="card-header"><strong>María Ines Godoy</strong></h3>
          <h5 className="card-body">
            Asistí en febrero a la clinica por un problema de alimentación.
            Muchas gracias a todo el equipo. Nunca me habia sentido tan apoyada.
            Hoy estoy participando en el programa de seguimiento y sé que
            lograré mi objetivo de sentirme bien y sobretodo sana.
          </h5>
        </div>
        <div className="card maincard">
          <h3 className="card-header"><strong>Fernando Tapia</strong></h3>
          <h5 className="card-body">
            Gracias al equipo de dermatologia por todo el apoyo y orientación.
          </h5>
        </div>
        <div className="card maincardt">
          <h3 className="card-header"><strong>Fabiola Camposano</strong></h3>
          <h5 className="card-body">
            Se necesitan mas profesionales dedicados a la salud mental. Gracias
            a todos los que me apoyaron en mi recuperación.
          </h5>
        </div>
      </section>
    </main>

    );
}