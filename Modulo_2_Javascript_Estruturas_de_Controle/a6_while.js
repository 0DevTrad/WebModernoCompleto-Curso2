function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);
}
console.log('Até a próxima!')

/* 
    O laço de repetição while é focado em 
    realizar indterminado número de repetições.

    Busque sempre usar a estrutura de controle 
    que seja mais adequada para o problema que 
    você precisa resolver.

    Estrutura:
    
    While (true / false)
*/