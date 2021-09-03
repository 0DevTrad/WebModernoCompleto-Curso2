const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retorna a chave dos objetos
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
// Retorna os valores dos objetos
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
// Retorna um array com todos os sub arrays de chave e valor do objeto
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

// É possível percorrer esse array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) // nome: Rebeca idade: 2 peso: 13
})

// Com destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) // nome: Rebeca idade: 2 peso: 13
})

// Definir uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // É passível ser listada?
    writable: false, // Vai aceitar ser modificada?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // O atributo 'dataNascimento' não pode ser modificado.
console.log(pessoa.dataNascimento) // 01/01/2019
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso', 'dataNascimento' ] // Pode ser listada!

// Object.assign (ES6 2015)
const destino = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4 // a será sobrescrito
}
const obj = Object.assign(destino, o1, o2) // Todos os objetos passados depois do primeiro vão ser concatenados dentro do primeiro.
console.log(destino) // { a: 4, b: 2, c: 3 }