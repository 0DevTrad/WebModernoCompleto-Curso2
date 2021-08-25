/*
    Parâmetro padrão foi um recurso adicionado no ES6. 
    Antes disso, haviam outras formas de ter parâmetro 
    padrão.
*/

// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // 3 5 6 3

/*
    Dessa forma ele será diferente null e undefined.

    Nessa estratégia o 0 vai retornar como sendo falso
    e por isso ele retorna o valor padrão.
*/

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Estratégia 2
    b = 1 in arguments ? b : 1 // Estratégia 3
    c = isNaN(c) ? 1 : c // Estratégia 4 // Mais segura
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // 3 5 6 0

/*
    3º estratégia Existe um segundo argumento que foi 
    passado para a função soma2? Já que o primeiro 
    argumento é de índice 0.
*/

// valor padrão do ES6 (2015)
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) // 3 5 6 0

// Outro exemplo
const a = function (a = 2, b = 5) {
    return a * b
}
console.log(a()) // 5