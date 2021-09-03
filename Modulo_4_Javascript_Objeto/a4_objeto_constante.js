// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}
console.log(pessoa) //{ nome: 'João' }

pessoa.nome = 'Pedro'
console.log(pessoa) //{ nome: 'Pedro' }

/*
    O identificador pessoa tem dentro dele um endereço de memória (aqui exemplificado como 123),
    no endereço de memória 123 é que temos o objeto criado, mas o que a constante pessoa aponta é
    para o endereço e o endereço para o objeto.

    Quando usa-se pessoa.nome = 'Pedro' não se muda a referência da constante (imutável por ser 
    constante), mas o objeto que está sendo apontato pelo endereço 123 pode ser alterado.
*/

// pessoa -> 456 -> {...}
//pessoa = {
//    nome: 'Ana'
//}
//console.log(pessoa) //Erro!

/*
    Nesse caso não será possível fazer a alteração pois o que se está tentando é que a variável
    pessoa que aponta para o endereço 123, passe a apontar para outro endereço, o 456.

    Como pessoa é uma constante, ela sempre apontará para 123 e não poderá apontar para outro
    objeto que está em outro endereço. 
    Só é possível atribuir para uma constante uma única vez.
*/

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome) // Pedro
console.log(pessoa) // { nome: 'Pedro' }

/*
    Usando o Object.freeze torna o objeto constante, o que significa que após usar esse
    comando, o objeto ficará inalterado.
*/

// Criando um objeto constante
const pessoaConstante = Object.freeze({
    nome: 'João'
})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome) // João