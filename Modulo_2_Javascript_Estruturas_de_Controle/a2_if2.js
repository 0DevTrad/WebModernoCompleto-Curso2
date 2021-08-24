function teste1(num) {
    if (num > 7) console.log(num);
    console.log("Final");
}
teste1(6);
teste1(8);

/*
    console.log("Final") está fora do if, logo era será executada
    independente se o número é ou não maior que 7.
*/

function teste2(num) {
    if (num > 7); {
        console.log(num);
        console.log("Final");
    }
}
teste2(6);
teste2(8);

/*
    Vai imprimir tanto o 6 quanto o 8 pois,
    o if executa a próxima sequência de código
    ou bloco depois dele, que no caso é ;
*/