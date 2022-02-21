// Gulp é um Framework baseado em funções(tarefas/tasks)

const gulp = require('gulp')
// const series = gulp.series // Ou const {series} = require ('gulp') // Exemplo só usando o series
const { // Exemplo usando o series e parallel
    series,
    parallel
} = require('gulp')
const {
    fullReporter
} = require('gulp-typescript/release/reporter')

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt') // Forma alternativa de chamar todos os arquivos txt dentro da pasta A (no exemplo copiou até a pasta teste com o arquivo txt)
        .pipe(gulp.dest('pastaB'))
    return cb()
}

/*
gulp.src -> serve para selecionar quais os arquivos você vai usar como entrada de um workflow 
return cb-> Precisa chamar a callback para o gulp saber que a tarefa foi finalizada.
pipe -> Serve para aplicar tranformações nos arquivos que você definiu como sendo os arquivos de entrada do seu workflow

Ex: 
.pipe(imagemPelaMetade())
.pipe(imagemPretoBranco())

.pipe(gulp.dest('pastaB')) -> Mesmo direcionando os arquivos para uma pasta inexistente, o gulp cria a pasta.
*/

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

// Na hora de exportar o gulp precisa que o default seja definido
// Só usando o series
/*module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim,
)*/

//Usando o series e parallel
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)