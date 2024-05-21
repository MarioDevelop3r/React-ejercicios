import { useState } from "react"


const ErrorApp = () => {
    const [error, setError] = useState("");

    return (
        <div>
            <button onClick={() => setError("Error al traer con la API")}>
                Error
                </button>
                <button onClick={() => setError("Credenciales incorrectas")}>
                Another Error
                </button>
                <button onClick={() => setError("")}>
                Proceso existoso
                </button>
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default ErrorApp
