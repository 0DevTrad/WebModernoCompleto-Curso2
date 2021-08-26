function Criarpessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Criarpessoa('João')
p1.falar()

/*
    Pode ser executada como uma função ou pode ser 
    utilizada para instanciar um objeto utilizando 
    a palavra reservada new.

    this.falar: Para trnaformar a função pra ficar
    na instância criada.
*/