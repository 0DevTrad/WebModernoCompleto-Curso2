const alunos = [{
        nome: 'João',
        nota: 7.9
    },
    {
        nome: 'Maria',
        nota: 9.2
    }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) // 8.55

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length) // 8.55

/* 
    Em uma abordagem declarativa o foco está no "o quê?" você quer que seja feito,
    enquanto em uma linguagem mais imperativa o "como?" é mais importante.

    Um código mais declarativo permite mais reúso.
*/