

const FormAddSubs = ({ setType, setPrice, type, price }) => {

    const handleSubs = e => {
        e.preventDefault();
        console.log(type);
        console.log(price);
    }

    return (
        <div className="add-subscription">
            <h3>Agregar Suscripciones</h3>
            <form onSubmit={ handleSubs }>
                <p>Servicio</p>
                <select onChange={e => setType(e.target.value)}>
                    <option value="">-- ELegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney PLus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star PLus</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appletv">Apple Tv</option>
                </select>
                <p>cantidad</p>
                <input type="submit" value="Agregar"  />
            </form>
        </div>
    )
}

export default FormAddSubs