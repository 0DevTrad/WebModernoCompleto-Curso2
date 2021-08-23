function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true)); // true, true, false, false
console.log(compras(true, false)); // true, false, true, false
console.log(compras(false, true)); // true, false, true, false
console.log(compras(false, false)); // false, false, false, true

/*
    O ES6 trouxe a possibilidade de criar objetos só declarando o valor, evitando
    repetições desnecessárias. Ex:

    { comprarSorvete: comprarSorvete,
      comprarTv50: comprarTv50,
      comprarTv32: comprarTv32, 
      manterSaudavel: manterSaudavel
    }
*/

/*
    Tabela verdade:

    v e v -> v          v ou ? -> v        v xor v -> f      !v -> f
    v e f -> f          f ou v -> v        v xor f -> v      !f -> v
    f e ? -> f          f ou f -> f        f xor v -> v
                                           f xor f -> f 
    Operadores:

    ||  -> OU
    &&  -> E
    ^ -> Ou exlusivo (xor)
*/
