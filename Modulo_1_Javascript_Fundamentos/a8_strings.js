const escola = "Escola Municipal";

// Retorna o item do índice 5 da string // Começa no índice 0
console.log(escola.charAt(5));

// Retorna o código unicode relacionado ao item do índice informado
console.log(escola.charCodeAt(3));

// Retorna o índice onde o valor informado se encontra
console.log(escola.indexOf("c")); // 2
console.log(escola.indexOf("z")); // -1

// Retorna os itens dos índices a partir do item informado
console.log(escola.substring(1)); // scola Municipal

// Retorna os itens apartir do 1º índice informado até o último item informado, sem incluí-lo
console.log(escola.substring(0, 4)); //Esco (0, 1, 2, 3)

// Concatenando com e sem .concat()
console.log("Primeira " + escola + "!"); // Primeira Escola Municipal!
console.log("Primeira ".concat(escola).concat("!")); // Primeira Escola Municipal!

// Substitui o primeiro item informado pelo segundo
console.log(escola.replace("s", "S")); // EScola Municipal

// Substitui todos os itens iguais ao primeiro pelo segundo
console.log(escola.replace(/\a/g, "A")); // EscolA MunicipAl

// .split() permite transformar a string em um array separado pelo item informado
console.log("Ana, Maria, Pedro".split(","));
console.log("Ana, Maria, Pedro".split(/,/)); //Usando rejex
