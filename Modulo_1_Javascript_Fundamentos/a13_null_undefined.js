// Um pouco sobre referência

const a = { name: "Teste" };
console.log(a); // { name: "Teste" }

const b = a;
console.log(b); // { name: "Teste" }

b.name = "Prova";
console.log(a); // { name: 'Prova' }
console.log(b); // { name: 'Prova' }

/* 
    a = Armazena o ENDEREÇO (Referência) onde o objeto { name: "Teste" } está localizado.
    
    A "constante a" foi apontado/atribuido a "constante b". Logo, a "constante b",
    também armazena o ENDEREÇO onde o objeto { name: "Teste" } está localizado.

    Se alterarmos o valor da chave name de "Teste" para "Prova" através da "constante b" 
    e após isso chamarmos "a" e "b", ambos os resultado serão: { name: 'Prova' } pois, 
    as duas constantes armazenam o mesmo ENDEREÇO.
*/

// Diferença de tipos primitivos

let c = 3;
let d = c;
d++;
console.log(c); // 3
console.log(d); // 4

/*
    Em caso de tipos primitivos como numbers, ao igualar-mos eles não se referenciam
    ao mesmo endereço mas, uma cópia do mesmo valor é criada de forma independente. 
    Por isso, quando "d" é incrementado, "c" não é alterado.  
*/

// Null e Undefined

let valor; // Declarado mas não inicializado
console.log(valor); // undefined
//console.log(valor2); // Não foi nem declarado

valor = null; // ausência de valor e endereço // vazia.
console.log(null); // null
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco); // defined.undefined
//console.log(produto.preco.a); // Erro!

produto.preco = 3.5;
console.log(produto); // { preco: 3.5 }

// Atribuir undefined a um atributo não faz com que o atributo seja excluído.
produto.preco = undefined; // Evite atribuir undefined
console.log(produto); // { preco: undefined }
console.log(produto.preco); // undefined
console.log(!!produto.preco); //false

//Para excluir o atributo use delete
delete produto.preco;
console.log(produto); // {}

produto.preco = null; // sem preço
console.log(!!produto.preco); // false
