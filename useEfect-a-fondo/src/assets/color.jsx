import { useState, useEffect } from "react";

export default function Color() {
    const [mostrar, setMostrar] = useState(true);
    return (
        <div>
            <button onClick={() => setMostrar(false)}>Dejar de mostrar</button>
            {mostrar ? <MouseColor /> : null}
        </div>
    );
}

function MouseColor() {
    const [color, setColor] = useState('orange');

    useEffect(() => {
        function onMouseMove(evento) {
            if (evento.clientX <= window.innerWidth / 2) {
                setColor('orange');
            } else {
                setColor('blue');
            }
        }

        window.addEventListener('mousemove', onMouseMove);
        console.log("ejecutando el useEffect")

        // Clean up event listener on unmount
        return () => {
            console.log("limpiando el useEffect")
            window.removeEventListener('mousemove', onMouseMove);
        };
    },[]); // Empty dependency array means this effect runs once on mount and clean-up on unmount

    console.log("ocurrio el render")

    return <div style={{ height: "100vh", background: color }} />;
}
