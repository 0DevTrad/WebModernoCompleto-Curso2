// Usando a notação literal (diferente de JSON)
const obj1 = {}
console.log(obj1) // {}

// Object em JS
console.log(typeof Object, typeof new Object) // function object

const obj2 = new Object
console.log(obj2) // {}

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // this torna o atributo visível, público, alterável.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) // 6.7915 2249.2425
/*
    OBS:
    Quando se trabalha no browser existe o escopo global, da função e o de bloco.
    
    - "nome" não está encapsuldado dentro do objeto pois usou-se o this.
    - "preco" e "desc" não são possíveis de serem alterados externamente pois apenas 
       estão disponíveis dentro da função getPrecoComDesconto.
*/

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario()) // 6916 11020

// Object.create (Modelo a ser aprofundado mais na frente)
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // [Object: null prototype] { nome: 'Ana' }

// JSON.parse (Modelo a ser aprofundado mais na frente)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // Sou um JSON