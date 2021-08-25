const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1) // [6.5, 5.2, 3.6]

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 // Vai retornar true/false
})
console.log(notasBaixas2) // [6.5, 5.2, 3.6]

// Com callback e arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3) // [6.5, 5.2, 3.6]

// Callback com variável
const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4) // [6.5, 5.2, 3.6]


/*
    .filter(callback) vai filtrar as notas do array em cima de um 
    determinado critério que vai ser uma função callback 
    que retorna true/false pra cada elemento do array. 
    Se retornar true, significa que o elemento deve ser 
    adicionado no array que está sendo gerado.

    A função filter não altera o array original, ele cria
    um novo array com os elementos filtrados.
*/