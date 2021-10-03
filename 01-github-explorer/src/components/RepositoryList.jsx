import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

// use effect = dispara uma função quando algo acontecer
    // roda tudo do componente que não seja um hook 
    // roda apenas 1 vez quando não tem o segundo parametro

// https://api.github.com/users/gustavo032/repos

const repository = {
    name: 'Gustavo032',
    description: 'readme interativo',
    link: 'https://github.com/Gustavo032/Gustavo032'
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/gustavo032/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    console.log(repositories)
    return(
        <section className="repository-list">
            <h1>Lista dos meus repositórios</h1>

            <hr />
            <ul>

             <RepositoryItem repository={repository}/>
            <hr />

            <RepositoryItem repository={repository}/>
            <hr />

            <RepositoryItem repository={repository}/>
            <hr />

            </ul>
            

        </section>
    )
}