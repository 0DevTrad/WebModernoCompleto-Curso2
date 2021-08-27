/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros 
    e tempo de aplicação. A primeira função retornará o montante da aplicação financeira 
    sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime 
    de juros compostos.
*/

// Juros Simples: J = C · i · t
function aplicarJurosSimples(capital, juros, tempo) {
    const montante = capital * (1 + juros * tempo)
    return console.log(`R$ ${montante.toFixed(2)}`)
}


// Juros Compostos: M = C · (1 + i)t    
function aplicarJurosComposto(capital, juros, tempo) {
    const montante = capital * (1 + juros) ** tempo
    return console.log(`R$ ${montante.toFixed(2)}`)
}

aplicarJurosSimples(1200, 0.02, 15)
aplicarJurosComposto(100, 0.02, 2)