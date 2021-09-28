// Object.preventExtensions
// Não é possível adicionar novos atributos, mas é possível excluir atributos e alterar valores. 

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Extensível: false

produto.nome = 'Borracha' // Yes
produto.descricao = 'Borracha escolar branca' // No
delete produto.tag // Yes
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal
// Não é possível adicionar e excluir novos atributos, apenas alterar os valores.

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true

pessoa.sobrenome = 'Silva' // No
delete pessoa.nome // No
pessoa.idade = '29' // Yes
console.log(pessoa) // { nome: 'Juliana', idade: '29' }

// Object.freeze = selado + valores constantes