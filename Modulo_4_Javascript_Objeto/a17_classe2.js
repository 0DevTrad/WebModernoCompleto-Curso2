class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// Relação de herança por protóripo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Chamando a função contrutora da super class, Avo.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }