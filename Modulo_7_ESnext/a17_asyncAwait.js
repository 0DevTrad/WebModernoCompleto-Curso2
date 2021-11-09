function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

// Não é possível chamar 'await' diretamente dentro de um arquivo.
// 'await' só válido dentro de uma função asyncrona.
// A ideia por traz de async/await é usar um código que parece síncrono embora ele seja assíncrono.

// Exemplo assíncrono
// Desse jeito, ele vai esperar 1,5 segundos e mostrar tudo de uma vez só.
async function executar() {
    esperarPor(1500)
    console.log('Async/Await 1...')
    esperarPor(1500)
    console.log('Async/Await 2...')
    esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()

// Exemplo síncrono
// Desse modo, ele vai executar cada linha a cada 1,5 segundos.
async function executar2() {
    await esperarPor(1500)
    console.log('Async/Await 1...')
    await esperarPor(1500)
    console.log('Async/Await 2...')
    await esperarPor(1500)
    console.log('Async/Await 3...')
}

executar2()


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar3() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// É possível chamar uma função assíncrona dentro de outra função assíncrona.
async function executarDeVerdade() {
    const valor = await executar3()
    console.log(valor)
}

executarDeVerdade()

// Equivale a uma promisse chamando o resolve na hora.
async function retornarValorRapido() {
    return 20
}

// Sem o await retornaria uma promise.
async function executar4() {
    let valor = await retornarValorRapido()
    console.log(valor)
}

executar4()