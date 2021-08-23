function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]; // Inverta
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log(rand([50, 40])); // Entre 40 e 50
console.log(rand([992])); // Entre 992 e 1000
console.log(rand([, 10])); // Entre 0 e 10
console.log(rand([])); // Entre 0 e 1000
console.log(rand()); // Erro! Undefined

/*
                    Destructuring       Array
    if (min > max)   [min, max]   =   [max, min]

    Uma vez que foi desestruturado, você não irá receber
    um array e sim os atributos.
*/
