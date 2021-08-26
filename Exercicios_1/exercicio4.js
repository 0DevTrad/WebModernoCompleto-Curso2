/*
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
    A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

function dividir(dividendo, divisor) {
    const resultado = dividendo / divisor
    const resto = dividendo % divisor

    return console.log(`Resultado: ${resultado} Resto: ${resto}`)
}

dividir(20, 2) // Resultado: 10 Resto: 0
dividir(5, 2) // Resultado: 2.5 Resto: 1