/*
    Aula de require
    Acessando o arquivo a1_moduloA.js
*/

const moduloA = require('../../a1_moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/a3_index')
console.log(c.ola2)

/*
    '../../a1_moduloA'
    O jeito certo é respeitar as letras maiúscuolas e minúsculas.
    Caso tivesse sido escrito " '../../a1_moduloa' " até funcionaria
    no Mac e Windows, mas não funcionaria no Linux que roda na maiora 
    dos servidores existentes.

    Eu posso selecionar o arquivo e copiar o caminho absoluto também com
    shift + alt + c

*/

const http = require('http') // http é um módulo interno do node
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
// Vai rodar no browser no http://localhost:8080/