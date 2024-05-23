import '../App.js'
const Header = () => {
  return (
    <>
    {/* Inicio Header */}

    <div className="contenedor-header">
        <header>
            <div className="logo">
                <a href="#">CODEBEARD</a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio" onClick="seleccionar()">INICIO</a></li>
                    <li><a href="#sobremi" onClick="seleccionar()">SOBRE MI</a></li>
                    <li><a href="#skills" onClick="seleccionar()">SKILLS</a></li>
                    <li><a href="#curriculum" onClick="seleccionar()">CURRICULUM</a></li>
                    <li><a href="#portafolio" onClick="seleccionar()">PORTAFOLIO</a></li>
                    <li><a href="#contacto" onClick="seleccionar()"></a>CONTACTO</li>
                </ul>
            </nav>
            <div className="nav-responsive" onClick="mostrarOcultarMenu()">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>
{/* Fin Header */}


    
    </>
  )
}

export default Header
