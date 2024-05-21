import { useState } from "react";


const ConditionalApp = () => {
    const [condition, SetCondition] = useState(true);


  return (
    <div>
        <button onClick={() => SetCondition(!condition)}>
            Toggle
            </button>

            {/* {
                condition && <h1>Show Message in True</h1>
            } */}
       <h1>State value is {condition.toString()}</h1>
    </div>
  )
}

export default ConditionalApp
