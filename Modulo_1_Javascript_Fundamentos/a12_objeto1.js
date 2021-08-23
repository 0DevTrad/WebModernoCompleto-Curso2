// Criando um Objeto
const prod1 = {};

// Adicionando chave e valor
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.9;

// Outra forma de adicionar chave e valor
prod1["Desconto Legal"] = 0.4; // Evitar criar atributos com espaço

console.log(prod1);

// Criando objetos de forma literal
const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
};

console.log(prod2);

/* 
    Objeto x JSON
    
    Objeto é uma coleção de chaves e valor,
    enquanto JSON é um formato textual.

    Atributo = Chave 
*/
