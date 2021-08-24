function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1)
console.log('Até a próxima!')

/*
    O do/while é semelhante ao while, com a diferença que
    o do/while garante que a estrutura vai rodar pelo menos
    uma vez.
*/