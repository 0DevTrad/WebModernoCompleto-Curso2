const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // 7.7 9.2
console.log(valores[4]); // undefined

// criando / atribuindo um novo valor
valores[4] = 10;
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10 ]

//retorna a quantidade de elementos no array
console.log(valores.length);

// .push adiciona elementos no array
valores.push({ id: 3 }, false, null, "teste");
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, "teste" ]

// .pop retira e retorna o último valor do array
console.log(valores.pop());

// delete exlui o item do índice informado
delete valores[0];
console.log(valores); // [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores); // object

/*
    Array é uma forma de agrupar múltiplos valores em 
    uma estrutura só com um único identificador. É uma 
    estrura indexada, heterogênea e não possui tamanho 
    fixo.

    OBS: Como boa prática, não misture elementos de tipo
    difente no array.
*/
