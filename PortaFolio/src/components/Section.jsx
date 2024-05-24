import '../App.js';
import Rrss from './Rrss.jsx';

const Section = () => {
    return (
        <section id="inicio" className="inicio">
            <div className="contenido-banner">
                <div className="contenedor-img">
                    <img src="img/codebeard-high-resolution-logo-white-on-transparent-background.png" alt="" />
                </div>
                <h1 className="text ">CODEBEARD</h1>
                <h2>Developers</h2>
                <Rrss />
            </div>
        </section>
    );
};

export default Section;