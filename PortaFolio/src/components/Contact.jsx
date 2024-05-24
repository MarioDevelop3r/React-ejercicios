import '../App.js'

const Contact = () => {
  return (
   
<section id="contacto" className="contacto">
    <div className="contenido-seccion">
      <h2>CONTACTO</h2>
      <div className="fila">
    
        <div className="col">
          <input type="text" placeholder="Tú Nombre"/>
          <input type="text" placeholder="Número telefónico"/>
          <input type="text" placeholder="Dirección de correo"/>
          <input type="text" placeholder="Tema"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
          <button>
            Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
            <span className="overlay"></span>
          </button>
        </div>
      
        <div className="col">
          
        </div>
      </div>
    </div>

  </section>







  )
}

export default Contact
