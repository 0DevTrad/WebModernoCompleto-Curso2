const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2](); // 2
funcs[8](); // 8

/*
    Como let possui escopo de bloco a cada repetição ele 
    vai colocar em memória os valores de i em cada loop.
*/
