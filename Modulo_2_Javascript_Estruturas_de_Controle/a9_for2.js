const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: '29',
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

/*
    O For in não vai retornar os elementos em si, mas o índice dos elementos. 
    
    Sempre opte por declarar a variável com let e não só o nome da variável 
    dentro do for in para evitar que ela seja acessível globalmente.
*/