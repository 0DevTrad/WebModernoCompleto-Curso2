// Concatenando arrays
const filhas = ['Julia', 'Daniela']
const filhos = ['Pedro', 'João']
const sobrinhas = ['Madalena', 'Catia']
const todos = filhas.concat(filhos, sobrinhas, 'Cláudio', 'Donatello')
console.log(todos); // [ 'Julia', 'Daniela', 'Pedro', 'João', 'Madalena', 'Catia', 'Cládio', 'Donatello' ]

console.log([].concat([1, 2], [3, 4], 5, [
    [6, 7]
])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

// Os arrays originais não são alterados.