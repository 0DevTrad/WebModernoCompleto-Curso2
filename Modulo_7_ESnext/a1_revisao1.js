// let e const -> Palavras reservadas para defirnir variável e constante.

// var x let -> var (escopo de função e global) / let (escopo de função e bloco)

{

    var a = 2
    let b = 3
    console.log(b) //3
}
console.log(a) // 2
//console.log(b) // Err!

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring ( Tirar de dentro de uma estrutura)
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras) // C o ['d', '3', 'r']

const [x, , y] = [1, 2, 3]
console.log(x, y) // 1 3

const {
    idade: i,
    nome
} = {
    nome: 'Ana',
    idade: 9
}
console.log(i, nome) // 9 Ana