const {
    series
} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return cb()
}

exports.default = series(transformacaoJS)

/*
    Dentro do babel é possível passar um objeto de configuração.
    comments: false -> Caso não deseje que os arquivos de comentários sejam transferidos para o arquivo final.
    presets: ["env"] -> ["env"] é o preset que vai pegar a verão mais moderna de JS e converter pra um código mais compatível com os browsers possível.
    uglify -> Vai mimificar,deixando o código sem espaços em apenas uma linha.
    concat -> Vai pegar todos os arquivos selecionados que passou pelo babel, uglify e concatenará esse resultado.
    .on('error', err => console.log(err)) -> On: Quando acontecer determinado evento, faça isso.

*/