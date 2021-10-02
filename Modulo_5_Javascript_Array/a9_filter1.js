const produtos = [{
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'Ipad Pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de Vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de Plástico',
        preco: 18.99,
        fragil: false
    }
]

// .filter() filtra o array informado gerando um novo array.
console.log(produtos.filter(function (p) {
    // return false // []
    return p.preco > 2500 // [ { nome: 'Ipad Pro', preco: 4199, fragil: true } ]
}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
/*
    [ { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true } ]
*/

// filter tambpem recebe 3 parâmetros, valor, índice e o próprio array