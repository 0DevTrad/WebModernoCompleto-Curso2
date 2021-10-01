// array é um objeto com características próprias
console.log(typeof Array, typeof new Array, typeof []) // function object object

// O array aceita dados heterogéneos mas a boa prática é usar dados homogêneos.

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana'] //[ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

// Usado para substituir ou adicionar um elemento no array
aprovados[3] = 'Paulo'

// Usado para adicionar um elemento no array, mais recomendado
aprovados.push('Julia')
console.log(aprovados.length) //5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10 // Entre o 5 e o 10 estão undefined
console.log(aprovados[8] === undefined) //true

console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Julia', <4 empty items>, 'Rafael' ]

// O método .sort() ordena o array
aprovados.sort()
console.log(aprovados) // [ 'Ana', 'Bia', 'Carlos', 'Julia', 'Paulo', 'Rafael', <4 empty items> ]

// Excluir elemento (não reordena)
delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Carlos
console.log(aprovados) // [ 'Ana', <1 empty item>, 'Carlos', 'Julia', 'Paulo', 'Rafael', <4 empty items> ]


aprovados = ['Bia', 'Carlos', 'Ana']

/*
    .splice() serve para adicionar e remover elementos de um array.
    .splice( p1, p2, p3,... )
    p1 -> Índice do array que vai iniciar
    p2 -> Quantos elementos serão excluídos contando com o índice que iniciou
    p3 -> Elemento que será adicionado
*/

aprovados.splice(1, 1)
console.log(aprovados) // [ 'Bia', 'Ana' ]

aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]