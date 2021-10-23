// Normalmente quando usa-se uma biblioteca referencia-se com um '_'
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 10)), 2000)

/*
    Usando o nodemon para rodar o código real time

    instalando globalmente : -npm i -g nodemon
    executando um código EX: nodemon a2_usandoModulosTerceiros.js

    Durante a execução, é possível alterar e salvar o código e ele
    continuará executando e reiniciando à medida que você salva.
*/