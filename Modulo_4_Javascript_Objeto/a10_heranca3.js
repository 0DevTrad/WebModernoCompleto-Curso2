const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
console.log(filha1) // {}
/*
    O Object.create() cria um objeto novo tendo como
    protótipo o objeto passado, nesse caso o pai.

    Em vez de criar apontanto Object.prototye, ele já
    aponta para o pai.
*/

filha1.nome = 'Ana'
console.log(filha1.corCabelo) // preto

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writeable: false,
        enumerable: true
    }
})

console.log(filha2.nome) // Bia
filha2.nome = 'Carla' // Nome não pode ser reescrito (writeable: false)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Bia tem cabelo preto

console.log(Object.keys(filha1)) // ['nome']
console.log(Object.keys(filha2)) // ['nome']

// let in

for (let key in filha2) {
    console.log(key) // nome corCabelo
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`) // nome Por herança: corCabelo
}

// hasOwnProperty -> Pertece ao objeto.