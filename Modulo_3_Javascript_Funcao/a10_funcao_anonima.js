// função anônima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // -1

// Uma Arrow Function sempre é anônima
imprimirResultado(3, 4, (x, y) => x * y) // 12

// Função anônima dentro de um objeto
const pessoa = {

    // Opção 1:
    /*falar: function () {
        console.log('Opa')
    }*/

    // Opção 2:
    falar() {
        console.log('Opa')
    }

}
pessoa.falar() // Chama através de objeto.atributo