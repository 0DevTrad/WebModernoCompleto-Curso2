const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);
// Diferente da concatecação normal, o template string permite quebra de linha.

// Realizando expressões com template string
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

// Passando funções para template string
const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
