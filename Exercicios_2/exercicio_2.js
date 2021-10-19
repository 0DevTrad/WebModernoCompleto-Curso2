/*
    2) Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

    Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
    desconsidere também dias decorridos desde o último aniversário.
*/

function transformarIdadeEmDias(IdadeAnos) {
    const diasDoAno = 365

    return diasDoAno * IdadeAnos
}

console.log(transformarIdadeEmDias(25)) // 9125
console.log(transformarIdadeEmDias(70)) // 25550