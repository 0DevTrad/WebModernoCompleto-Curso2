const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break;
        case 8:
        case 7:
            console.log('Aprovado');
            break;
        case 6:
        case 5:
        case 4:
            console.log('Recuperação');
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
};

/*
    Você pode ter várias sentenças depois de um case 
    e também colocar mais de um case pra executar uma 
    sentença.

    O switch mesmo tendo entrado em um case determinado,
    após executá-lo, continuará executando os abaixo. Para 
    poder parar esse processo, use o break.

    default é a resposta padrão, você pode colocar ou não.
*/
imprimirResultado(10); // Quadro de honra
imprimirResultado(8.9); // Aprovado
imprimirResultado(6.55); // Recuperação
imprimirResultado(2.3); // Reprovado
imprimirResultado(-1); // Nota inválida
imprimirResultado(13); // Nota inválida