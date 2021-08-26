// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}


/*
    document é a referência dentro do browser que ela é 
    disponível globalmente dentro do código que aponta 
    para sua página, pro DOM.

    getElementsByTagName: Função que acessa os elementos através
    de uma tag.

    onclick: receberá uma função callback que recebe como parâmetro 
    um evento. O evento não é obrigado a ser declarado caso você não 
    o use.

    Após o evento ser registrado no browser a callback fica esperando
    ser chamada. Toda vez que clicar no body da página, o evento será 
    chamado.
*/