//fs -> file system
const fs = require('fs')

const caminho = __dirname + '/a9_arquivo.json'

// Lendo de forma síncrona (1)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// Lendo de forma assíncrona (2)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Para ler um arquivo Json, existe um método mais simples que dispensa fs.readFile

// síncrona (3)
const config = require('./a9_arquivo.json')
console.log(config.db)

// Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

/*
    Note que apesar dos comando estarem em ordem 1, 2 e 3
    a execução no terminal ocorre na ordem 1, 3 e 2. Isso
    acontece porque o comando 2 é assíncrono, ele envia uma
    callback e só quando ela é carregada que ela é disparada
    de volta.
*/

/*
    readdir -> Ler diretório
    
    __dirname -> É uma constante que está presente em todos 
    os arquivos(módulos) do node que representa o diretório 
    atual.
*/

// Código interligado (Aula 9 - code 1) ./a9_arquivo.json
// Código interligado (Aula 9 - code 2)