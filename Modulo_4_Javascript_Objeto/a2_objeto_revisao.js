// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira' // 1º Forma de atribuir valor
produto['marca do produto'] = 'Generica' // 2º de atribuir valor
produto.preco = 220
console.log(produto) // { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }

delete produto.preco
delete produto['marca do produto'] // Não dá pra acessar com notação ponto porque foge do padrão
console.log(produto) // { nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000 // 1º Forma de acesso
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // 2º Forma de acesso
console.log(carro) // Muito grande :)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro) //{modelo: 'A4', valor: 89000, proprietario: { nome: 'Raul', idade: 56 }}
console.log(carro.condutores) // undefined
console.log(carro.condutores.length) // Erro! Pois não é possível acessar um atributo undefined.