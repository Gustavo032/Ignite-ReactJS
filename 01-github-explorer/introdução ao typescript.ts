type Users = {
    name: string
    age: number
    email: string
    address: {
        UF: string
        city?: string
    }
}

function showWelcomeMessage(user: Users) {
    return `welcome ${user.age} year old ${user.name}

    email bearer: ${user.email}
    
    resident of: ${user.address.UF} - ${user.address.city}
    `
}

// Permite deixar nossos codigos mais organizados

// Permite "tipar" as variaveis

// é transformado em js depois