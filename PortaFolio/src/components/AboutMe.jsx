import '../App.js'

const AboutMe = () => {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p><span>Apasionado</span> por la programación, disfruto creando y desarrollando programas informáticos. Mi
          enfoque detallado y habilidades lógicas me han permitido destacarme en el campo de la programación. Aprovecho mi
          pasión por la tecnología para expresar mi creatividad y encontrar soluciones a problemas complejos. Mi
          perspectiva única del mundo me permite ver las cosas desde diferentes ángulos y esto influye en mi forma de
          interactuar con los demás. Estoy comprometido con mi crecimiento y desarrollo profesional en el campo de la
          programación.</p>

        <div className="fila">
          {/* <!-- datos personales --> */}
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <strong>Cumpleaños</strong>
                25 de Marzo de 1987
              </li>
              <li>
                <strong>Teléfono</strong>
                +569123456789
              </li>
              <li>
                <strong>Email</strong>
                email@hotmail.cl
              </li>
              <li>
                <strong>Website</strong>
                www.example.com
              </li>
              <li>
                <strong>Dirección</strong>
                example, ###, example
              </li>
              <li>
                <strong>Cargo</strong>
                <span>FREELANCE</span>
              </li>
            </ul>
          </div>

        
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="interes">
                <i className="fa-solid fa-gamepad"></i>
                <span>JUEGOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-headphones"></i>
                <span>MUSICA</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-plane"></i>
                <span>VIAJAR</span>
              </div>
              <div className="interes">
                <i className="fa-brands fa-apple"></i>
                <span>MAC OS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-person-hiking"></i>
                <span>DEPORTE</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-book"></i>
                <span>LIBROS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-car"></i>
                <span>AUTOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-camera"></i>
                <span>FOTO S</span>
              </div>
            </div>
          </div>
        </div>
        <button>
          Descargar CV <i className="fa-solid fa-download"></i>
          <span className="overlay"></span>
        </button>
      </div>
    </section>
  )
}

export default AboutMe
