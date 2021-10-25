const contadorA = require('./a6_instanciaUnica')
const contadorB = require('./a6_instanciaUnica')


const contadorC = require('./a6_instanciaNova')()
const contadorD = require('./a6_instanciaNova')()

// 1º caso
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3 3

// 2º caso
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 1

/*
    No caso do contadorC e contadorD, o require retorna 
    uma função, pra retornar o objeto dentro da função 
    precisa chamar a função com '()'
*/

/*
    No 1º caso o objeto foi exportado e o node faz cache.
    Se o objeto já tiver sido criado ele retorna sempre a 
    mesma instância. Já no 2º caso não irá incrementar 
    pois são novas instâncias criadas a partir de um 
    factory
*/

// .inc() -> incrementa