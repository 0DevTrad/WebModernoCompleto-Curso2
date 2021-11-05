/*
    Quando você cria uma variável, na linha seguinte você já
    tem a variável a sua disposição para ser usada.
*/

let a = 1
console.log(a)

/*
    Quando você cria uma promise, você vai ter uma promessa de algo que
    irá ser executado no futuro e devolvido no futuro. Pra gerar esse dado
    futuro é necessário passar um parâmetro para a promise

*/

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3)
})

console.log(typeof p) // object
console.log(typeof Promise) // function

// Para acessar o valor passado quando cumprir a promessa
p.then(function (valor) {
    console.log(valor) // 3
})

// Com Arrow function
p.then(valor => console.log(valor)) // 3


// A promessa só considera 1 parâmetro mesmo que seja passado mais de 1. Para contornar isso considere usar objetos e arrays.

// Obj como parâmetro
let o = new Promise(function (cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

o.then(function (valor) {
    console.log(valor.y) // 4
})


// Array como parâmetro
let n = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Daniel', 'Ana', 'Luciano'])
})

// O resultado de um método .then() é passado para o próximo método .then()
n
    .then(valor => (valor[1]))
    .then(segundoNome => (segundoNome[0]))
    .then(letraA => letraA.toLowerCase())
    .then(aMinusculo => console.log(aMinusculo)) // a


// Outra forma de estrutrar com as funções de maneira externa

const segundoElemento = array => array[1]


const primeiraLetra = string => string[0]


const letraMinuscula = letra => letra.toLowerCase()

n
    .then(segundoElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log) // a

// Outra forma de organizar 
new Promise(function (resolve) {
        resolve(['Daniel', 'Ana', 'Luciano'])
    })
    .then(segundoElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log) // a