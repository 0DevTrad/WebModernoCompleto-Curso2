// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() {}

/*
    Pode receber ou não parâmetros e retornar ou não um valor,
    caso você não retorne nada, ele retorna undefined.
*/

// Armazenar em uma variável
const fun2 = function () {};

/*
    A função dentro da constante é anônima. Você pode referenciar
    a função apartir da constante. Ex: fun2()
*/

// Armazenar em um array
const array = [
    function (a, b) {
        return a + b;
    },
    fun1,
    fun2,
];
console.log(array[0](2, 3)); // 5

/*
    Você pode colocar a função dentro do array de forma literal, mas 
    isso não é muito convencional ou inserir através de variáveis.
*/

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
    return 'Opa';
};
console.log(obj.falar());

// Passar função como parâmetro
function run(fun) {
    fun();
}

run(function () {
    console.log('Executando...');
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) // 9
// ou
const cincoMais = soma(2, 3)
cincoMais(4) // 9