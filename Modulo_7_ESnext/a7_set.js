// É uma estrutura de conjunto não indexada e que não aceita repetição.

const {
    Console
} = require("console")

const times = new Set()
times.add('Flamengo')
times.add('Fluminense').add('Botafogo').add('Vasco')
times.add('Cotinthias').add('Palmeiras').add('São Paulo')
times.add('Flamengo') // Não vai ser adicionado pois é uma repetição.

console.log(times)
/*
    Set(7) {
  'Flamengo',
  'Fluminense',
  'Botafogo',
  'Vasco',
  'Cotinthias',
  'Palmeiras',
  'São Paulo'}
*/

console.log(times.size) // 7
console.log(times.has('flamengo')) // false
console.log(times.has('Flamengo')) // true

times.delete('Vasco')
console.log(times.size) // 6
console.log(times.has('Vasco')) //false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // Set(3) { 'Raquel', 'Lucas', 'Julia' }