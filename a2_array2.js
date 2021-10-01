const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// .pop() Remove o último elemento do array
pilotos.pop()
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

// .push() Adiciona um elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// .shift() Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// .unshift() Adiciona um elemento no índice 0 do array
pilotos.unshift('Hamilton')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// .splice() Adiciona e remove elementos do array

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) //  [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// Remover
pilotos.splice(3, 1)
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// .slice() Retorna um novo array a partir do índice informado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

// Dica importante, o primeiro índice entra, o último informado não.
const algunsPilotos2 = pilotos.slice(2, 4)
console.log(algunsPilotos2) // [ 'Bottas', 'Raikkonen' ]