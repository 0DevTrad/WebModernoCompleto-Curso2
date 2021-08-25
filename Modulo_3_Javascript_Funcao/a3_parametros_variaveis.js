function soma() {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, ' Teste')) // 3.3000000000000003 Teste
console.log(soma('a ', 'b ', 'c')) // 0a b c

/*
    Mesmo que a função tenha sido criada sem parâmetros, 
    ainda assim você pode passar parâmetros fazendo uso
    do array interno "arguments".

    Toda função tem esse array disponível, quando nenhum
    parâmetro é passado esse array está vazio.
*/