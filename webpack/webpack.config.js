const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// Objeto de configuração
module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js', // entrada da configuração
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            //test: /\.css$/,
            test: /\.s?[ac]ss$/, // Essa expressão abrange .css, .scss e sass
            use: [
                MiniCssExtractPlugin.loader, // Esse plugin entra em conflito com o 'style-loader'
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // Interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}