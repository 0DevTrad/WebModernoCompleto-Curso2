console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3
console.log(module.exports) // { a: 1, b: 2, c: 3 }

exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }

/*
     Mesmo atribuindo null a exports o module.exports continua apontando para o objeto
     setado. Isso ocorre porque exports é simplesmente uma outra variável que aponta
     para o mesmo objeto. 
     Mas no final só quem será retornado (exportado) é o module.exports.
*/

exports = {
    nome: 'Teste'
}

console.log(module.exports) // { a: 1, b: 2, c: 3 }

module.exports = {
    publico: true
}

// Sempre que precisar atribuir um novo obj pra ser exportado, use module.exports