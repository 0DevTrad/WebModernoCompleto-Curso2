// middleware pattern (chain of responsability)
// O padrão middleware possui uma função next() executa o próximo passo, não seguindo uma ordem fixa.
// O padrão é request, response e o next()

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'
// A função next()  pode ser suprimida

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx) // { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }