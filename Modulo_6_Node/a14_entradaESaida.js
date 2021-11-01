/*
    Dentro do node temos alguns objetos disponíveis globalmente 
    Ex: __dirname, global e o Process.

    O objeto process permite ler dados do teclado do usuário e imprimir
    tanto na entrada padrão(teclado) e na saída padrão(tela) do computador.

    É possível ler os parâmetros que foram passados quando você chamar uma 
    aplicação em node diretamente no terminal.
*/

//Passei a flag '-a' diretamente no terminal
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) // true

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n') // Fala Anônimo!
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // Removendo do 'enter'(\n) que o usuário apertou ao enviar o nome

        process.stdout.write(`Fala ${nome}`)
        process.exit() // Finalizando o processo
    })
}

// stdout = standart output(saída padrão)
// stdin = standart input(entrada padrão)