// Função é uma ação, use verbos para nomeá-la.

//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3); //5
imprimirSoma(2); // 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6); // 12 // Vai considerar apenas o 2 primeiros parâmetros.
imprimirSoma(); // NaN

//Função com retorno
function soma(a, b = 0) {
  return a + b;
}
// O valor padrão de b será 0

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 2 + 0 = 2
console.log(soma()); // undefined + 0 = NaN
