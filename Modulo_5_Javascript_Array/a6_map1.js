// .map = for com propósito
const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e) {
    return e * 2
})

// O map não tranforma o array atual ele gera um novo array.
console.log(resultado) // [ 2, 4, 6, 8, 10 ]

// Dentro de map precisa haver uma função que retorne algo, caso contrário retornará undefined
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]

/*
    .map(p1, p2, p3)
    p1 -> Valor
    p2 -> Índice
    p3 -> Array
*/