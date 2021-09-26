import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'Gustavo032',
    description: 'readme interativo',
    link: 'https://github.com/Gustavo032/Gustavo032'
}

export function RepositoryList(){
    return(
        <section class="repository-list">
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