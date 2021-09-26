function MeuObjeto() {}
console.log(MeuObjeto.prototype) // {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Todo objeto criado a partir da mesma função construtora apontam para o mesmo protótipo a partir do atributo __proto__
console.log(obj1.__proto__ === obj2.__proto__) // true

// Quando é criado um objeto a partir de uma função construtora usando o new, o protótipo desse objeto aponta para funcaoCriada.prototype
console.log(MeuObjeto.prototype === obj1.__proto__) //true

/*
    Diferente do exemplo acima, quando você cria um objeto através do new Object ou
    a partir do objeto literal, por padrão o protótipo será Object.prototype
*/

// Atribuindo valores
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() // Bom dia! Meu nome é Anônimo!

obj2.nome = 'Rafael'
obj2.falar() // Bom dia! Meu nome é Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Mundando a referência de Object.prototype para MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // Bom dia! Meu nome é Obj3!

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true

// Além da função ter um protótipo ela também tem uma referência pra .__proto__ e esse atributo aponta pras function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype) //true

// O protótipo do prototype de uma Function aponta para Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // true

// O atributo existe mas não aponta para nada
console.log(Object.prototype.__proto__ === null) //true