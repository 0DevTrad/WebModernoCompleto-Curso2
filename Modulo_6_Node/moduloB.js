// Forma de exportar 4 (Mais comum)
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

/*
    Aqui, para que a exportação funcione eu preciso usar esse método,
    já que eu não usei o "this.'algumacoisa'" e portanto o objeto não
    existe. Só usar o 'exports' não funcionaria.

    O module.exports está substituindo o objeto vazio padrão.
*/

// Código interligado (Aula 1 - code 2)