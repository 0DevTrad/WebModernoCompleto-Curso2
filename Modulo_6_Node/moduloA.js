/* 
    Em node, um arquivo representa um módulo. A princípio, se conteúdo só é visível 
    dentro do módulo. Para deixar ele visível externamente, é necessário exportar o 
    código.

 */

console.log(this) // {}

// Forma de exportar 1
this.ola = 'Fala Pessoal'

// Forma de exportar 2
exports.bemVindo = 'Bem vindo ao node!'

// Forma de esxportar 3
module.exports.ateLogo = 'Até próximo exemplo'

/*
    Coloquei 3 atributos de formas diferentes no mesmo objeto.

    Como eu criei o atributo 'ola' dentro de this, isso instanciou
    o objeto e a partir daí foi possível adicionar outros atributos 
    usando os outros métodos.

    this, exports e module.exports fazem a mesma função.
*/

// Código interligado (Aula 1 - code 1)