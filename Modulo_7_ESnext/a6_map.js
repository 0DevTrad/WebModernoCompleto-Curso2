// No caso do obj a chave é apenas um literal, uma string.
// Já no caso do map, há mais possibilidade podendo a chave ser uma função, número, obj, string...

const tecnologias = new Map()
tecnologias.set('react', {
    framework: false
})
tecnologias.set('angular', {
    framework: true
})

// forma errada de acessar
console.log(tecnologias.react) // undefined

// A forma correta de acessar é usando o get.
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false

// Criando map atribuindo elementos
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
/*
    [Function (anonymous)] Função
    {} Objeto
    123 Número
*/

// .has() é a função que diz se o elemento está ou não contido dentro do map
console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false

// .size retornar quantos elementos estão contidos dentro do map
console.log(chavesVariadas.size) // 2

// Não é possível ter chaves duplicadas, logo o retorno será 'b' substituindo o 'a'
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas) // b

// Porém do lado do valor ele aceita repetição desde que a chave seja diferente.
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) // b