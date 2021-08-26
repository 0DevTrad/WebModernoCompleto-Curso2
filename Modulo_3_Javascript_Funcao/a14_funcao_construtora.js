function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5

const ferrari = new Carro(350, 20)
ferrari.acelerar() // 20 +
ferrari.acelerar() // 20 +
ferrari.acelerar() // 20
console.log(ferrari.getVelocidadeAtual()) // 60

console.log(typeof Carro) // function
console.log(typeof ferrari) //object

/*
    A função construtora funciona como uma classe, um molde e
    a partir desse molde é possível criar quantos elementos quiser.
    E os dados internos da função pertence a cada um dos objetos.
*/