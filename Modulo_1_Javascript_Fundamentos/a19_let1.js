// Escopo interno x externo
let numero = 1;
{
  let numero = 2;
  console.log("dentro =", numero); // 2
}
console.log("fora =", numero); // 1

/*
    Mesmo tendo o mesmo nome as variáveis estão em escopo diferentes
    e por isso podem coexistir sem conflito.
*/

// O escopo interno tem prefência sobre o externo
let num = 1;
{
  let num2 = 2;
  console.log("dentro =", num); // 1
}
console.log("fora =", num); // 1

/*
    O console.log("dentro =", num) vai buscar a variável primeiro 
    dentro do escopo, caso não tenha, vai buscar fora do escopo.
*/

/*
    var x let

    var: tem escopo global e de função
    let: tem escopo global, de função e de bloco.
*/
