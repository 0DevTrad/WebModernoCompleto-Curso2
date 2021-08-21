{
  {
    {
      var sera = "Será??";
      console.log(sera); // Será??
    }
  }
}
console.log(sera); // Será??

function teste() {
  var local = 123;
  console.log(local); // 123
}
teste();
// console.log(local); // Erro!

/* 
    var é visível dentro e fora do bloco/escopo. Em outras 
    linguagens ela só seria visível dentro do bloco

    Contudo, quando declaramos var dentro de uma função, ela só
    é visível dentro dessa função.

    Existe dentro do browser um objeto chamado window que é um
    objeto global. Tudo que é declarado fora de função é visível
    no objeto global, window.

    É importante evitar criar variáveis no escopo global, pois qualquer
    sobrescrita dessa variável pode gerar problemas sérios.
*/
