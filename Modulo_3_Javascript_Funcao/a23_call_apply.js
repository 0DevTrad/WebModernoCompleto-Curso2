function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

// Chamando a função diretamente
console.log(getPreco()) // R$ 18

// Chamando a função a partir de um objeto
console.log(produto.getPreco()) // R$ 3900.65

const carro = {
    preco: 49990,
    desc: 0.20
}

// Chamando a função a partir do call
console.log(getPreco.call(carro)) // R$ 39992

//console.log(getPreco.call(contexto, param1, param2, ...))
console.log(getPreco.call(carro, 0.30, '$')) // $ 51989.6


// // Chamando a função a partir do call
console.log(getPreco.apply(carro)) // R$ 39992

//console.log(getPreco.apply(contexto, [ param1, param2, ...]))
console.log(getPreco.apply(carro, [0.30, '$'])) // $ 51989.6


/*
    A diferença entre o call e o apply é exatamente 
    a forma como você passa os parâmetros na hora de
    invocar a função a partir desses dois métodos.
*/