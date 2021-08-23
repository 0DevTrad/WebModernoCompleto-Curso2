// incremento e decremento
let num1 = 1;
let num2 = 2;

num1++;
console.log(num1); // 2
--num1; // 1
console.log(num1);

console.log(num1 === num2); // false
console.log(++num1 === num2--); // true
/*
    num1 valia 1 e passou a valer 2 porque foi incrementado
    comparou com num2 que valia 2 antes de ser decrementado.

    Obs: Prefixado tem precedência sobre posfixado.
    Obs: Evite misturar vários operadores em uma operação, 
         busque ser o mais simples possível.
*/
