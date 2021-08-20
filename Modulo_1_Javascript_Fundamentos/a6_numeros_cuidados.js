// Alguns cuidados úteis quando for mexer com números.

console.log(7 / 0); // Infinity

console.log("10" / 2); // O js entende que "10" pode ser convertido em número e executa a operação.

console.log("5" + 2); // O '+' concatena, por isso aqui o resultado é 52 e não 7

console.log("Show!" * 2); // NaN (Not a Number)

console.log(0.1 + 0.7); // 0.7999999999999999 // Impreciso com operaçãoes com ponto flutuante

let a = 10;
console.log(a.toString()); // 10 (string)
//console.log(10.toString()) // É possível usando uma variável mas não um literal
