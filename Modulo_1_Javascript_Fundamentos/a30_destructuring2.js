//Destructuring em array
const [a] = [10]; // Após const, um destructuring com uma variável a e atribuição de valor 10.
console.log(a); // 10

//Destructuring com vários elementos.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // É possível pular elementos.
console.log(n1, n3, n5, n6); // 10 9 undefined 0

// Um array pode ter outros elementos do tipo array
const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota); // 6
/*
    Primeiro elemento foi ignorado, o segundo elemento
    é um array, onde dentro desse array o primeiro
    elemento também é ignorado.

    Para desestruturar objetos usamos {}, arrays usamos [].
    Preste atenção em que lado da operação se encontra as 
    cahves/colchetes, do lado esquerdo é desestruturação, do
    lado direito é objeto/array.
*/
