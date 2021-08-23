console.log(Math.ceil(6.1)); // 7

const obj1 = {};
obj1.nome = "Bola"; // Criando dinamicamente um atributo
//obj1['nome'] = 'Bola2'
console.log(obj1.nome); // Bola

function Obj(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log("Exec..."); // Exec...
  };
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome); // Cadeira
console.log(obj3.nome); // Mesa
obj3.exec();

// Acessar membros de um objeto com notação ponto.
