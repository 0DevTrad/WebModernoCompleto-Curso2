function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    } /*.bind(this)*/ , 1000)
}

new Pessoa


/* 
    setInterval() dispara uma outra função apartir 
    de um determinado intervalo que foi passado. Com 
    isso você pode passar uma função como parâmetro.

    Dentro do setInterval tem o temporizador que vai 
    ficar disparando a função determinada e não a
    função pessoa, logo "this" não apontará pro objeto 
    pessoa.

    Solução bind:
    Uma forma de resolver isso é colocar no final da 
    função setInterval, a função bind(this).

    Solução self:
    bind foi comentado para que se pudesse exemplificar
    a solução self.

    Criamos a constante self(nome qualquer) e atribuimos 
    a referência this. Como a constante self está dentro 
    da função pessoa, o this obrigatoriamente é o objeto
    "Pessoa", que eu quero apontar. E como this está
    armazenado em uma constante, não importa quem chame,
    o this sempre permanecerá o mesmo.
    
    Tendo feito isso, eu uso self no lugar do this dentro
    de setInterval.
*/