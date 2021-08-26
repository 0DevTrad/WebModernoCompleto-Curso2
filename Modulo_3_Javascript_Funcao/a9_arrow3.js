let comparaComThis = function (param) {
    console.log(this === param)
}

// Objeto global é igual ao this?
comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)

// Objeto global é igual ao this?
comparaComThis(global) // false
// Obj é igual ao this?
comparaComThis(obj) // true // this aponta pro objeto por causa do bind()

// Arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

//Bind dentro de uma função Arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false // Arrow não varia
comparaComThisArrow(module.exports) // true // Arrow não varia

/*
    O param de comparaComThisArrow não apontará pro global, 
    pois a função foi definida dentro do módulo do node. Cada
    arquivo do node representa um módulo, se você escreveu a 
    função diretamente dentro de um arquivo, o dono/this será 
    o próprio módulo.

    O this dentro de uma função tradicional JS varia conforme a
    chamada, aponta pro objeto global tanto no browser quanto no
    node.
    Já na Arrow function é bem mais previsível, o this aponta para 
    o objeto/módulo o arquivo no qual essa função foi definida. 

    Arrow function > bind().
*/