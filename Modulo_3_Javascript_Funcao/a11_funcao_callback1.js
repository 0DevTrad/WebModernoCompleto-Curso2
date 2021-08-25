const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // 1. Mercedes    2. Audi    3. BMW

// Imprimindo apenas um parâmetro com Arrow Function
fabricantes.forEach(fabricante => console.log(fabricante)) // Mercedes  Audi    BMW

/*
    forEach() é uma função de fabricantes que é um array. Dentro 
    do array extiste essa função forEach.

    ForEach(imprimir): Ele vai chamar essa função de volta(callback) 
    pra cada elemento encontrado dentro do array.

    O callback nada mais é do que passar uma função e essa função ser
    chamada quando o evento acontecer.

    Qual foi o evento que ocorreu?
    O evento foi o loop, ou seja, quando ele encontra um elemento ele
    dispara a função callback.
*/