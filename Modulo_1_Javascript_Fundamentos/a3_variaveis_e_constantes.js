var a = 3; // variável
let b = 4; // variável (use preferencialmente como variável)

var a = 15;
b = 70; // let b = 70 -> retorna: Identifier 'b' has already been declared

console.log(a, b);

const c = 50;
//const c = 20; // Por ser uma constante, aquilo que foi declarado não pode ser alterado

console.log(c);

/*
    Use preferencialmente const, pois facilita a manuntenção da
    aplicação, utilize let para casos em que realmente seja necessário
    reatribuir o valor da variável.
*/
