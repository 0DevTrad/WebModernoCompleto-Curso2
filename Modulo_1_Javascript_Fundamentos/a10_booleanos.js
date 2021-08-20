// Valores booleanos: true ou false

let isAtivo = false;
console.log(isAtivo); // false

isAtivo = true;
console.log(isAtivo); // true

isAtivo = 1;
console.log(isAtivo); // 1
console.log(!isAtivo); // false
console.log(!!isAtivo); // true

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"qualquer coisa");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra Finalizar...");
console.log(!!("" || null || 0 || "123")); // true

// Exemplo prático
let nome = "";
console.log(nome || "Desconhecido"); // Desconhecido

let nome2 = "Mayara";
console.log(nome2 || "Desconhecido"); // Mayara

/*
    Você pode usar a negação (!) para transformar
    um valor em um valor booleano. Usando uma vez,
    o valor retorna falso, usando duas, verdadeiro.
*/
