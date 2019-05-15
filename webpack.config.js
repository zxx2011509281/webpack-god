let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['home']
        }),
    ],
    mode: 'production',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: '[name].js',   // 打包出对应的名字
        path: path.resolve(__dirname, 'dist')
    }
}