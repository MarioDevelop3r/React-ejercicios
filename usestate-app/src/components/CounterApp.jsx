import { useState } from 'react'

const CounterApp = () => {
    let [counter, setCounter] = useState(0)

    const incrementCounter = () => {

        setCounter(counter + 1)
       
    }

    return (
        <div>
            <button onClick={incrementCounter}>
                Incrementar</button>
            <h1>Clicks: {counter}</h1>
        </div>
    )
}

export default CounterApp
