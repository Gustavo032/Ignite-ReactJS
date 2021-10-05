import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}
// use effect = dispara uma função quando algo acontecer
    // roda tudo do componente que não seja um hook 
    // roda apenas 1 vez quando não tem o segundo parametro

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/gustavo032/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    console.log(repositories)
    return(
        <section className="repository-list">
            <h1>Lista dos meus repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return ( <RepositoryItem key={repository.name} repository={repository} />)
                })}
            </ul>


        </section>
    )
}