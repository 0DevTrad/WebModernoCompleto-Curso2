function gerarNumerosEntre(min, max, tempo) {
    if (min > max)[max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

// Gerando vários números aleatórios de uma vez só
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

// timer
console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })

// Essa é uma estratégia que pode ser usada para quando você precisa pegar várias informações em paralelo e usar quando chegar todas as respotas.