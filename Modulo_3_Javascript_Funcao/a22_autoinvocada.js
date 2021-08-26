// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Fugindo do escopo mais abrangente!')
})()

/*
    Uma das funções de uma declaração autoinvocada é quando 
    você está usando o browser e quer fugir do escopo global. 
    Quando seu script for lido, o trecho de código dentro da 
    função já vai ser chamado e executado. Tudo que você criar 
    dentro dessa função será escopo local e não global. 
    
    Isso pode ajudar a evitar ficar manipulando coisas 
    diretamente no escopo global do browser. Isso evita bugs.
*/