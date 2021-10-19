// Resolução 1
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar("Yago"))

// Resolução 2
function cumprimentar2(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar2("Yago"))