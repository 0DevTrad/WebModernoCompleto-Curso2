/*
    Herança é um princípio da OO.

    O objetivo da herança é você não precisar copiar e colar código, mas criar mecanismos para que
    seja possível reusar código.

    Entre usar herança ou composição priorize composição, pois na composição você pode dentro de um
    objeto ter múltiplos objetos, enquanto que a herança só pode ter um ancestral (classe pai). 
    Composição é mais flexível.

    Herança em JS é diferente do que em Java. Ela é baseada em protótipos.
    
    Caso você defina let x = 10 dentro de uma função e fora da função você defina let x = 20, quando
    você tentar acessar a variável x dentro da função, ela vai buscar a referência mais próxima, no
    caso, x = 10. Caso ele não ache dentro da função ele busca em um escopo mais abrangente, no caso
    x = 20, fora da função.

    Contudo, supondo que esse objeto tivesse protótipo e não existisse x = 10 dentro da função, ela 
    irá procurar no objeto pai, caso ela não ache irá procurar no objeto pai do pai e assim 
    sucessivamente até esgostar as possibilidade e caso não encontrasse, ai sim irá para o escopo 
    global.

    [[Prototype]] = conceito
    Object.prototype = propriedade

    [[Prototype]] != Object.prototype
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // undefined // ferrari só tem o atributo __proto__
console.log(ferrari.__proto__) // {}
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) // null

/*
    A partir de __proto__ é possível acessar quem é o protóripo desse objeto, 
    o objeto pai. Caso eu tente acessar um atributo dentro de ferrari e não 
    encontre, ele vai procurar esse mesmo atributo dentro do protótipo e 
    repetirá o processo até achar, caso não ache retornará undefined.
*/

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // function function
console.log(Object.prototype, MeuObjeto.prototype) // {} {}