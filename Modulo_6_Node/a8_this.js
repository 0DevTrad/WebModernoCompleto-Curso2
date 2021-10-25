console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true
console.log(exports === module.exports) // true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(this === global) // true


    this.perigo2 = 20

    // console.log(perigo) // err!
    console.log(perigo2)
}

this.perigo = 10


logThis()

// this fora de uma função aponta para module.exports / exports
// this dentro de uma função aponta para global