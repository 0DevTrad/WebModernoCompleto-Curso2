// Criando manualmente
const pessoa1 = {
    nome: 'Ana',
    sobrenome: 'Moura'
}

const pessoa2 = {
    nome: 'Julio',
    sobrenome: 'Alvez'
}

// Factory simples
function criarPessoa() {
    return {
        nome: 'Clara',
        sobrenome: 'Lima'
    }
}

console.log(criarPessoa())


/*
    Função fábrica é uma função que retorna um objeto e é
    um padrão de projeto muito comum em JavaScript
*/