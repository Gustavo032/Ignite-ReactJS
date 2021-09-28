import { useState } from 'react';
// quando começar com "use"{
// hook = gancho}

export function Counter(){
    // * curiosidade *
        // let it change
       // deixe isso mudar

x
    const [counter, setCounter] = useState(0);
    // usa o setCounter pra mudar o valor de Counter e useState pra designar o valor atual
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


// * imutábilidade *
    // errado:
        // alterando a informação na memória // mutação
        // alterando diretamente
            // usuarios = ["gustavo","Guusta.r","Gustavo Ramos"]
            // usuarios.push('matheus')

    // certo:
        // Alterando indiretamente    
            // usuarios = ["gustavo","Guusta.r","Gustavo Ramos"]
            // novosUsers = [...usuarios, 'matheus']

        //  setCounter(counter +1);