const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Global

/*
    Contexto léxico é o contexto no qual as coisas 
    foram declaradas dentro da linguagem.

    A função carrega consigo o local onde ela foi definida, 
    então ela vai procurar dentro do escopo léxico onde ela 
    foi definida.

    Ao chamar a função exec(), é chamado a função minhaFuncao()
    e como dentro dela não "valor" definido, mas sim uma chamada
    de impressão, console.log(valor), ela vai procurar o "valor"
    em um contexto mais abrangente, no caso o global onde a const
    valor se encontra.
*/