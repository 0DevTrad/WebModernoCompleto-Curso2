/*
    7) Crie uma função que receba quatro números como parâmetro (minimo, maximo, numero, inclusivo = false)
    e retorne se o parâmetro numero está entre minimo e maximo. Quando o parâmetro inclusivo for true, 
    tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o 
    parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será 
    exclusiva, não considerando se numero é igual a minimo ou a maximo.
*/

// Resolução 1
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 50)) // true
console.log(estaEntre(16, 100, 160)) // false
console.log(estaEntre(3, 150, 3)) // false
console.log(estaEntre(3, 150, 3, true)) // true

// Resolução 2

function estaEntre2(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

console.log(estaEntre2(10, 100, 50)) // true
console.log(estaEntre2(16, 100, 160)) // false
console.log(estaEntre2(3, 150, 3)) // false
console.log(estaEntre2(3, 150, 3, true)) // true