console.log("a =", a); // undefined
var a = 2;
console.log("a =", a); // 2

/*
    Nas linguagens de programação, a sentença de código dentro 
    de um programa é lida de cima para baixo, ou seja, para que 
    você consiga ler uma variável é necessário ter declarado-a 
    antes. 
    
    Em JS quando você declara uma variável usando var,
    ela sofre o Hoisting (içamento), o interpretado da linguagem
    pega a variável e joga pra cima do código. 

    O código foi lido assim:

    var a;
    console.log("a =", a); 
    a = 2;
    console.log("a =", a); 

    OBS: O efeito com let não ocorre.
    OBS2: Declare suas variáveis antes, apesar dessa possibilidade.
*/
