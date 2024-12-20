import Medicos from './DoctorCard';
import Formulario from './Formulario';
import Servicios from './ServiceList';

export default function Trunk({indice, medicos, servicios})
{

    {/*1: home o servicios medicos
        2: equipo medico
        3: pedir cita
        4: contacto
        5: aranceles*/}
    console.log(indice)
    if(indice == "1")
    {
        return(
    <main className="main-content">

    <section >    
        <Servicios servicios={servicios} />    
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
    else if (indice == "2")
    {
        return(
            <main>
      <section className="grid-container">
            <Medicos medicos={medicos} />
      </section>

      <section className="grid-container">
        <div className="leftt">
          <button type="submit" onClick="mostrarMedicosDisponibles()">
            Medicos disponibles
          </button>
          <li className="medDisponibles"></li>
        </div>
        <div className="point">
          <button type="submit" onClick="mostrarMedicosNoDisponibles()">
            Medicos sin disponibilidad
          </button>
          <li className="medNoDisponibles"></li>
        </div>
        <div className="rightt">
          <button type="submit" onClick="buscarMedicoClass()">
            Buscar Medico
          </button>
          <li className="medBuscado"></li>
        </div>
      </section>
    </main>
      

        );
    }
    else if(indice == "3")
    {
        return(
            <Formulario medicos={medicos}/>
        );
    }
    else if(indice == "4")
    {
       return (
        <main className="main-content">
        <section className="hero">
          <h2 className="hero__title">Formulario de Contacto</h2>
          <form id="formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />
  
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" required />
  
            <label htmlFor="asunto">Asunto:</label>
            <input type="text" id="asunto" required />
  
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" rows="4" required></textarea>
  
            <button type="submit" onClick="reviewInformation()">Enviar</button>
          </form>
        </section>
  
        
        <section className="hero">
          <h2 className="hero__title">Ubicación</h2>
          <img
            src="Imagenes/mapa-hospital.png"
            alt="Mapa de la ubicación del hospital"
            width="500"
          />
        </section>
  
        <section className="hero">
          <h2 className="hero__title">Citas pacientes</h2>
          <button type="submit" onClick="crearPilaPacientes()">
            Revisar proximas horas
          </button>
          <li className="ProximoPaciente"></li>
  
          <button type="submit" onClick="crearColaPaciente()">
            Pacientes en espera
          </button>
          <li className="SalaEspera"></li>
  
          <button type="submit" onClick="evaluarTiempodeEspera()">
            Evaluar tiempo de espera
          </button>
          <li className="TiempoEspera"></li>
        </section>
      </main>
  
       );
    } 
    else if(indice == "5")
    {
        return(
            <main className="main-content">      
            <section className = "hero" >
              <h2 className="hero__title">Precios y ofertas</h2>
              <nav>
                  <h5> Por 2 o mas consultas se harán descuentos! Pida su presupuesto</h5>
                  <button type="submit" onClick="consultaSimple(1)">1 consulta</button>    
              </nav>
              <nav>
                  <button type="submit" onClick="consultaSimple(2)"> 2 consultas (igual servicios) </button>        
              </nav>
              <nav>
                  <button type="submit" onClick="consultaMixta(2)"> 2 consultas (múltiples servicios) </button>     
              </nav>
                   
             
              
          
                 
              
      
            </section>
      
      
          </main>
      
        );
    }
    else
    {
        return("");
    }

   
}