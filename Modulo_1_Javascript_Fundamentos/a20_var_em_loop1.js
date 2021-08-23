for (var i = 0; i < 10; i++) {
  console.log(i); // 1,2,3,4,5,6,7,8,9
}
console.log("i =", i); //10

/*
    Como i foi definido com var e por isso não tem escopo de bloco
    ele estará visível globalmente.
    O valor de i é o valor que faz com que ele saia do laço, 10.
*/
