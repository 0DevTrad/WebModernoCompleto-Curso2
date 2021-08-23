for (let i = 0; i < 10; i++) {
  console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8,9
}
console.log("i =", i); // Erro!

/*
   Como let tem escopo de bloco, ao tentar imprimir i fora do
   bloco, a aplicação gera um erro.
*/
