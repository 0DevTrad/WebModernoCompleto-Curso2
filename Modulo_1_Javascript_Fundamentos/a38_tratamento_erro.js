function tratarErroELancar(erro) {
  // throw new Error("....");
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);

/*
    O try é um bloco onde você coloca o código que potencialmente
    pode gerar algum tipo de erro. E em caso de erro é possível
    tratar através do catch. O throw pode ser usado para lançar 
    uma mensagem caso ocorra o erro.

    Outro bloco que pode ser utilizado é o finally, ele 
    será exibido caso ocorra um erro ou não.
*/
