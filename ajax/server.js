// Servidor responsável por prover os dados estáticos e serviços

const bodyParser = require('body-parser') // Responsável por fazer o parser do body da requisição, ele capta os dados e deixa pronto pra ser manipulado
const express = require('express') // Express será o server usado
const app = express()

// middleware (função que é executada quando uma requisição chega, pode ser aplicada a um padrão de url ou pra todas as requisições que chegam no servidor)

app.use(express.static('.')) // Esse middleware irá servir os arquivos staticos
app.use(bodyParser.json()) // Irá trasnformar Json em objeto 
app.use(bodyParser.urlencoded({
    extended: true
})) // Se vir algum formato apartir de um submit de um form esse middleware irá ler os dados e trasnformar em objeto

//app.get('/teste', (req, res) => res.send('Ok')) // Nesse exemplo, se uma requisição começa com /teste (na url) ele iria chamar o código após a virgula */

app.listen(8080, () => console.log('Executando...')) // startando o servidor