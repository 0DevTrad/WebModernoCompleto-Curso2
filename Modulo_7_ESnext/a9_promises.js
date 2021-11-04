/*
    Promisse é usado quando você quer ter algum tipo de processamento assíncrono.
    Usando promisse há duas possibilidades de resultado:
    1 - A promessa foi cumprida.
    2 - A promessa foi rejeitada.
  
    Ex:  Quer acessar um arquivo remoto. Você passa a url com duas callbacks, uma de
         sucesso e uma de erro. Caso o arquivo seja obtido de forma bem sucedida a 
         callback de sucesso é chamada, caso não, a callback de erro é chamada. 
*/

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // A promisse aceita um único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) // Que legal!?!?
    .catch(e => console.log(e)) // Tratamento de erro.

// outraFrase é o atributo resultado do 'frase => frase.concat('?!?'))'

// resolve e reject são callbacks
// Por padrão o seTimeout recebe milisegundos.
// Para acessar o resultado de uma promessa atendida de forma correta usa-se .then()
// O .then() permite encadeamento.
// A função then() é chamada quando você resolve a promisse passando o objeto que você deseja que seja passado pra função .then().