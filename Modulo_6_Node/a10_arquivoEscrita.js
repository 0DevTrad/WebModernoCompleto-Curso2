const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/a10_arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

// Código interligado (Aula 10 - code 1) 
// Código interligado (Aula 10 - code 2) ./a10_arquivo.json