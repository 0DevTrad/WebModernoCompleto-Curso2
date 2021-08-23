// par nome(chave)/valor

const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};

console.log(saudacao); // Opa
console.log(exec()); // Falaaa
console.log(cliente); // {nome: 'Pedro, idad...}

/*
    Contexto léxico é o local onde a variável foi definida
    fisicamente no seu código.
*/
