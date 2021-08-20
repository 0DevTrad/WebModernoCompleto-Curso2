// 2 Formas de atribuir números à variáveis
const peso1 = 1.0;
const peso2 = Number("2.5");

console.log(peso1, peso2);

//Number.isInteger confere se o número é um inteiro
console.log(Number.isInteger(peso1)); // true
console.log(Number.isInteger(peso2)); // false

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media); // 7.728142857142858
console.log(typeof media); // number

// media.toFixed permite definir o número de casas decimais
console.log(media.toFixed(2)); // 7.73

// media.toString permite transformar o número em uma string
console.log(media.toString()); // 7.728142857142858
console.log(media.toString(2)); // 111.10111... // binário

/*
    Importante saber que os métodos retornam o valor formatado
    mas não o alteram, pois media é uma constante.
*/
