// Classe (function)
class Pessoa {
    constructor(nome) {
        this.nome = nome
        //this.nome transformou a variável nome em uma variável pública
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() // Meu nome é João.


// Função Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Ana')
p2.falar() // Meu nome é Ana

/*
    Não é possível instanciar uma classe sem o new.
    
    A função factory não necessita de que se use o this, já que
    ela tem ciência do seu contexto léxico e onde ela foi declarada.
*/