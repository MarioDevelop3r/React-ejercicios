
// import { useState } from 'react'
import './App.css'
// import { useEffect } from 'react'
import Color from './assets/color'

export default function App() {
  // const [cuenta, setCuenta] = useState(0)
  // useEffect(() => {
  //   console.log(`La cuenta es: ${cuenta}`)
  //   document.title = `La cuenta es: ${cuenta}`
  // })

  return (
    <main>
    {/* <div className='cuenta'>
      <h1>La cuenta es : {cuenta}</h1>
      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
    </div> */}
    
    <div>
      <Color />
    </div>
    

    </main>
  )
}


