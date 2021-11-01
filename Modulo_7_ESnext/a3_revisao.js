// ES8: Object.values / Object.entries
const obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na notação literal de objetos
const nome = 'Carla'
const pessoa = {
    // nome: nome, // Forma antiga
    nome, // Forma atual

    // ola: function() {} // Forma antiga
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola()) // Carla Oi gante!

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

// Para criar objetos apartir de uma class e novas instância para funções construtoras, usa-se new.
console.log(new Cachorro().falar()) // Au au!