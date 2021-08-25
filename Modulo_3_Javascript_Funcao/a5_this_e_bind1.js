/*
    "this" é sempre o objeto que está sendo referenciado 
    naquele contexto, o dono da função.
    
    Quando você tem uma função tradicional, "this" pode 
    variar de acordo com quem chamou a função. Quando
    a função é definida com arrow function o "this" 
    não varia nunca.
*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar() // Bom dia!
const falar = pessoa.falar
falar() // undefined // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia!

/*
    "falar()"" retornou undefined porque agora, "saudacao" está 
    apontando para um "this" diferente que não é mais o objeto 
    "pessoa". E o objeto que está sendo apontado apartir da função 
    "fala()" não tem "saudaçao" dentro dele. 

    O que pode ser feito é usar o bind(). O bind você passa um objeto
    padrão que você quer que seja resolvido o this. Dessa forma,
    o this sempre irá apontar para o objeto certo.
*/