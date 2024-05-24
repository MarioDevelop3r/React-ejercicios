


import { useState } from 'react';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    // Función que oculta o muestra el menu
    const mostrarOcultarMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const seleccionar = () => {
        setMenuVisible(false);
    };

    return (
      
            <div className='contenedor-header'>
                <header>
                    <div className="logo">
                        <a href="#">CODEBEARD</a>
                    </div>
                    <nav id="nav" className={menuVisible ? 'responsive' : ''}>
                        <ul>
                            <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
                            <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
                            <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
                            <li><a href="#curriculum" onClick={seleccionar}>CURRICULUM</a></li>
                            <li><a href="#portafolio" onClick={seleccionar}>PORTAFOLIO</a></li>
                            <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
                        </ul>
                    </nav>
                    <div className="nav-responsive" onClick={mostrarOcultarMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>
        
    );
};

export default Header;

