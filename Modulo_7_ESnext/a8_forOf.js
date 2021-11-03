// Enquanto o 'For in' opera em cima de índice, o 'For of' opera em cima de valores.

for (let letra of 'Cod3r') {
    console.log(letra)
} // C o d 3 r

const assuntosEcma = ['Map', 'Set', 'Promise']

// Percorrendo Índice
for (let i in assuntosEcma) {
    console.log(i)
} // 0 1 2 

// Percorrendo Valores
for (let j of assuntosEcma) {
    console.log(j)
} // Map Set Promise

const assuntosMap = new Map([
    ['Map', {
        abordado: true
    }],
    ['Set', {
        abordado: true
    }],
    ['Promise', {
        abordado: false
    }]
])

// Chave e Valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}
/*
    [ 'Map', { abordado: true } ]
    [ 'Set', { abordado: true } ]
    [ 'Promise', { abordado: false } ]
*/

// Chave
for (let chave of assuntosMap.keys()) {
    console.log(chave)
} //Map Set Promise

// Valor
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
/*
    { abordado: true }
    { abordado: true }
    { abordado: false }
*/

// Desestruturando as entradas
for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}
/*
    Map { abordado: true }
    Set { abordado: true }
    Promise { abordado: false }
*/

// Percorrendo um Set com for of
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
} // a b c

// Na hora de escolher usar o for, comece dando preferência a um for com propósito.