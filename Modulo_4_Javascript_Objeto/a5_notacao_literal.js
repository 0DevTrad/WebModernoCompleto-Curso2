const a = 1
const b = 2
const c = 3

const obj1 = {
    a: a,
    b: b,
    c: c
} // Forma antiga de criar
const obj2 = {
    a,
    b,
    c
} // Nova forma de criar
console.log(obj1, obj2)

/*
    Se o atributo e o valor tiverem o mesmo nome, cabe usar a sintaxe mais reduzida.
    Caso seja necessário alterar o nome do atributo, a primeira versão pode será mais
    apropriada.
*/


const nomeAttr = 'nota'
const valorAttr = '7.87'

// Criando um atributo apartir do nome de uma variável
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) // { nota: '7.87' }

// Nova forma
const obj4 = {
    [nomeAttr]: valorAttr
}
console.log(obj4) // { nota: '7.87' }


// Definindo funções dentro de um objeto literal
const obj5 = {
    funcao1: function () {
        //...
    }
}

// Nova forma
const obj6 = {
    funcao2() {

    }
}

console.log(obj5) // { funcao1: [Function: funcao1] }
console.log(obj6) // { funcao2: [Function: funcao2] }