console.log(typeof Object); // function
console.log(typeof new Object()); //object

const Cliente = function () {};
console.log(typeof Cliente); // function
console.log(typeof new Cliente()); // object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // function
console.log(typeof new Produto()); // object

/*
    Object em JS é uma função, porém se usarmos o
    "new Object" criando um objeto a partir de uma 
    função.
*/
