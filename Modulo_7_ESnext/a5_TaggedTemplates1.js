// tagged templates -> processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(`${aluno} está ${situacao}.`) // Gui está Aprovado.
console.log(tag `${aluno} está ${situacao}.`)
/*
    [ '', ' está ', '.' ]
    [ 'Gui', 'Aprovado' ]
    Outra string
*/

// As partes -> [ '', ' está ', '.' ]
// Os valores -> [ 'Gui', 'Aprovado' ]