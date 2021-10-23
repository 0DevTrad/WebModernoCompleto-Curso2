// Para importar algo usando o commonJS (sistema de módulo do node) precisa usar o require.
const moduloA = require('./a1_moduloA')
const moduloB = require('./a1_moduloB')

//  ./ -> Referenciando um módulo que está presente dentro do sistema. (Caminho relativo)
// ../ -> Sair da pasta
// ../.. -> Sair de 2 pastas
// Não precisa colocar a extensão do arquivo se ele for .js


console.log(moduloA.ola) // Fala Pessoal
console.log(moduloA.bemVindo) // Bem vindo ao node!
console.log(moduloA.ateLogo) // Até próximo exemplo
console.log(moduloA)

console.log(moduloB.bomDia) // Bom dia
console.log(moduloB.boaNoite()) // Boa noite
console.log(moduloB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }

// Código interligado (Aula 1 - code 3)