const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2](); // 10
funcs[8](); // 10

/*
    Como var não tem escopo de bloco, o resultado será 10 pra qualquer chamada.
*/
