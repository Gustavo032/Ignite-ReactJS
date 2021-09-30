import { useState } from 'react';
// quando começar com "use"{
// hook = gancho}

export function Counter(){
    // * curiosidade *
        // let it change
       // deixe isso mudar

    const [counter, setCounter] = useState(0);
    // usa o setCounter pra mudar o valor de Counter e useState pra designar o valor atual
    function increment() {
        setCounter(counter + 1);
    };

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment 
            </button>
        </div>
    );
}