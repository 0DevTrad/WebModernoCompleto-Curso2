/*
    5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 
    Deverá diferenciar números de strings.
*/
function maiorOuIgual(num1, num2) {
    if (typeof num1 != typeof num2) {
        return false
    }
    return num1 >= num2
}

console.log(maiorOuIgual(5, 2)) // true
console.log(maiorOuIgual(1, 2)) // false