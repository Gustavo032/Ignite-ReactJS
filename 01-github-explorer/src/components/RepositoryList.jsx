let repositoryName = ''

export function RepositoryList(){
    return(
        <section class="repository-list">
            <h2>Lista dos meus repositórios</h2>
            <hr />
            <ul>
            {repositoryName = '1'}
                <li>
                    <strong>Nome do Repositório {repositoryName}</strong>
                    <p>Css</p>
                    <a href="">Acesse o Repositório</a>
                </li>
            </ul>
            
            <hr />

            <ul>
            {repositoryName = '2'}
                <li>
                    <strong>Nome do Repositório {repositoryName}</strong>
                    <p>React</p>
                    <a href="">Acesse o Repositório</a>
                </li>
            </ul>
            
            <hr />

            <ul>
            {repositoryName = '3'}
                <li>
                    <strong>Nome do Repositório {repositoryName}</strong>
                    <p>Javascript</p>
                    <a href="">Acesse o Repositório</a>
                </li>
            </ul>
            
            <hr />

        </section>
    )
}