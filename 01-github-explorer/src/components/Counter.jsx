import { useState } from 'react';
// quando começar com "use"{
// hook = gancho}

export function Counter(){
    const [counter, setCounter] = useState(0);
 // let it change
// deixe isso mudar

    function increment() {
        setCounter(counter +1);
    };

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    );
}