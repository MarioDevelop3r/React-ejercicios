import '../App.js'
const Skill = () => {
  return (
    <section className="skills" id="skills">
    <div className="contenido-seccion">
      <h2>Skills</h2>
      <div className="fila">
        {/* <!-- Technical Skill --> */}
        <div className="col">
          <h3>Technical Skills</h3>
          <div className="skill">
            <span>Javascript</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>75%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>HTML & CSS</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>89%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Photoshop</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>95%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Wordpress</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>81%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Drupa</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>55%</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Professional Skills --> */}
        <div className="col">
          <h3>Professional Skills</h3>
          <div className="skill">
            <span>Comunicación</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>80%</span>
              </div>
            </div>
          </div>
        <div className="skill">
            <span>Trabajo en Equipo</span>
            <div className="barra-skill">
                <div className="progreso">
                    <span>70%</span>
                </div>
            </div>
        </div>
          <div className="skill">
            <span>Creatividad</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>99%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Dedicación</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>65%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Proyect Management</span>
            <div className="barra-skill">
              <div className="progreso">
                <span>94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skill
