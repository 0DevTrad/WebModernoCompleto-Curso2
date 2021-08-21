var numero = 1;

{
  var numero = 2;
  console.log("dentro =", numero); //2
}
console.log("fora =", numero); //2

/*
    Uma sobrescreveu a outra pois estão no mesmo escopo (global).
    É possível ter 2 variáveis com o mesmo nome dentro de uma 
    aplicalção desde que elas estejam em escopos diferentes.
*/
