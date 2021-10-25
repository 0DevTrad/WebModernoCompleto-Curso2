const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// método '.get' obtém informação do servidor.

const chineses = c => c.pais === 'China'
const mulheres = m => m.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
// Desafio : Qual a mulher chinesa com menor salário?
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})

// Código interligado (Aula 5 - code 1)