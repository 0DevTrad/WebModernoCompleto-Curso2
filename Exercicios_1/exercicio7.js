/*
    07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
    Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua 
    função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 
    os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 
    valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja 
    negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
*/

// x = -b +- RaizDelta / 2*a
// Delta = b**2 - 4*a*c

function bhaskara(ax2, bx, c) {
    const resultado = []
    const delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return console.log('Delta é negativo')
    }
    const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    resultado.push(x1)
    resultado.push(x2)
    return console.log(resultado)
}

bhaskara(1, 3, 2) // vetor 1: -1 vetor 2: -2
bhaskara(1, 2, 25) // Delta é negativo