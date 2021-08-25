// Função tradicional
let dobro = function (a) {
    return 2 * a
}

// Arrow function
dobro = (a) => {
    return 2 * a
}
// Função arrow sempre é uma função anônima

// Forma mais reduzida
dobro = a => 2 * a
console.log(dobro(Math.PI)) // 6.2831....

// Função sem parâmetro
let ola = function () {
    return 'Olá'
}

// Arrow function sem parâmetros
ola = () => 'Olá'
ola = _ => 'Olá' // Undeline é parâmetro!
console.log(ola()) // Olá

// Função Arrow é um recurso ES6 (2015)