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

const multer = require('multer') // Interpreta o form que vem o arquivo de upload

//Armazenamento
const storage = multer.diskStorage({ // diskStorage recebe um objeto que serve pra personalizar a pasta e o nome do arquivo no momento de salvar
    destination: function (req, file, callback) {
        callback(null, './upload') // O primeiro parametro é erro, o segundo é o destino.
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // Essa será a composição do nome do arquivo salvo. A data impede que um arquivo de mesmo nome seja salvo em sobescrvendo o outro.
    }
})

const upload = multer({
    storage
}).single('arquivo')

// Requisição via post para fazer o upload do arquivo (xmlHttpRequest2)
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso!')
    })
})


// Requisição via post para fazer o upload do arquivo (fetch2)
app.post('/formulario', (req, res) => { // .post(url, função middleware)
    res.send({
        ...req.body, // Só virá algo no body se o bodyParser (l10, l11) estiver configurado.
        id: 1
    })
})


//Requisição via get para fazer o upload do arquivo (axios2)
app.get('/parOuImpar', (req, res) => {
    // Dentro do Express existem algumas formas de receber dados para o seu front end:
    //req.body
    //req.query -> /parOuImpar?numero=3
    //req.params -> /parOuImpar/:3
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...')) // startando o servidor