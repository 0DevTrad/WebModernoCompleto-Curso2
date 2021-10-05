const alunos = [{
        nome: 'João',
        nota: 7.3,
        bolsista: false
    },
    {
        nome: 'Maria',
        nota: 9.2,
        bolsista: true
    },
    {
        nome: 'Pedro',
        nota: 9.8,
        bolsista: false
    },
    {
        nome: 'Ana',
        nota: 8.7,
        bolsista: true
    }
]

console.log(alunos.map(a => a.nota)) // [ 7.3, 9.2, 9.8, 8.7 ]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

/*
    console.log(acumulador, atual):
    7.3 9.2
    16.5 9.8
    26.3 8.7

    35
*/

// Passando 10 como valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado2)

/*
10 7.3
17.3 9.2
26.5 9.8
36.3 8.7

45
*/

/* 
    É possível passar no .reduce 4 parâmetros (acumulador, atual, índice, array)
    Quando não se informa o acumulador, ele utiliza o valor de posição zero no array.
    A função soma o acumulador e o atual e passa o resultado como acumulador da próxima
    vez que a função for executada.

    O acumulador pode receber array e objeto.
*/