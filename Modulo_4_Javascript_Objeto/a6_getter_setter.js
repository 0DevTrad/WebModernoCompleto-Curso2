const sequencia = {
    _valor: 1, //convenção
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}


//internamente o JS entender que se está chamando o método.
console.log(sequencia.valor, sequencia.valor) // 1 2

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // 1000 1001

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // 1002 1003
// Como se está tentando trazer a sequencia pra um valor menor, ele vai ignorar.

/*
    Uma das técnicas para ter encapsulamento em código é colocar atributos privados 
    e métodos que alteram e leem o valor desses atributos de uma forma mais controlada.
    
    Ex: pessoa.idade = 40 // Ok
        pssoa.idade = - 38 // What???

        pessoa.dataNascimento = 10/ 06 / 2021 // OK
        pessoa.dataNascimento = 42 / 15 / 2021 // What??

    Para evitar receber dados que não fazem sentido, o ideal é transformar os atributos do
    objeto em questão em atributos privados (que é algo que JS não tem) e acessar esses
    atributos através dos métodos get (ler) e set (alterar).

    Os gets e sets são funções que dentro delas os valores são acessados. O set permite
    criar validações de valor por exemplo.

    o "_" antes do atributo é uma convenção que sinaliza que aquela variável é pretendida
    ser acessada internamente. Não é privada.
*/