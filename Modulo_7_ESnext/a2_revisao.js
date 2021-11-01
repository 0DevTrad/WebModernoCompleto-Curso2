// Arrow Function (sempre são funções anônimas)

// return implícito
const soma = (a, b) => a + b
console.log(soma(2, 3)) // 5

// Em caso de colocar corpo, obrigatoriamente tem que colocar o return
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 3)) // 5

// Arrow Function (this)
// O this de uma função arrow é um this que está associado ao local que a função foi escrita
// Como a função lexico1 foi escrita diretamente dentro de um arquivo do node, significa que o this sempre apontará para modeule.exports.
const lexico1 = () => console.log(this === module.exports)
lexico1() // true

// Mesmo forçando a barra ainda apontará para module.exports
const lexico2 = lexico1.bind({})
lexico2() // true

// Quando se tem uma função tradicional o this pode variar depoendendo do contexto, já numa função arrow isso não é possível.

// parametro default
// Possibilidade de você definir um valor padrão para um atributo de uma função.
function log(texto = 'Node') {
    console.log(texto)
}

log() // Node (valor padrão)
log('Sou mais forte') // Sou mais forte

// Operador rest(...)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5)) // 14