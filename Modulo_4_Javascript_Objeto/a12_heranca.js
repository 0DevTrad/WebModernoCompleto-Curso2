// Toda função tem um atributo .prototype
console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

// Você acessa o Array ou String dentro do método do protótipo a partir do this
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) // r3doC alocsE

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // 1
console.log(['a', 'b', 'c'].first()) // a

// Você pode substituir uma função que já existe dentro do protótipo. Por exemplo sobreescrever toString
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // odut uocsaL