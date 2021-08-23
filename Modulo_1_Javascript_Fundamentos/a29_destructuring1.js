// Recurso introduzido no ES6(2015)

const pessoa = {
  nome: "Ana",
  idade: 20,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 20

// Desestruturando e atribuindo a variáveis
const { nome: n, idade: i } = pessoa;
console.log(n, i); // Ana 20

// Desestruturando elementos não existentes
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); // undefined true

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined

//Cuidado ao tentar desestruturar dados que não existem de forma aninhada
const {
  conta: { ag, num },
} = pessoa;
console.log(ag, num); // Erro!

/*
    Destructuring é um operador de desestruturação, ele tira 
    da estrutura algum elemento.

    Ex:
    const {atributos retirados} = objeto de onde será retirado
*/
