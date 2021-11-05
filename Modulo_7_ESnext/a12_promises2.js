// Na função setTimeout, usa-se uma função como parâmetro que executa o conteúdo depois do tempo estipulado.
setTimeout(function () {
    console.log('Executando callback...')

    setTimeout(function () {
        console.log('Executando callback...')

        setTimeout(function () {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000) // Callback hell

// Refatorando com promise
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve('Vish')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())