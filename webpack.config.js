
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',  // development production
    optimization: {
        minimizer: [new UglifyJsPlugin(
            {
                cache: true,  // 启用cache缓存
                parallel: true, // 并发打包
                sourceMap: true, // 映射原代码地址
              }
        ), new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    entry: './src/index.js', 
    output: {
        filename: "index.[hash:8].js",
        path: path.resolve(__dirname, 'build')  
    },
    devServer: {
        port: 8080, 
        contentBase: './', 
    },
    plugins: [  
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',  
            filename: 'index.html', 
            minify: {  
                removeAttributeQuotes: true,
                collapseWhitespace: true, 
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
    ],
    module: { // 模块
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'] 
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'less-loader']
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     include: path.resolve(__dirname, 'src'),
            //     use:{
            //         loader: 'eslint-loader',
            //         options:{
            //             enforce: 'pre'  // pre匹配到的js先执行   post后执行 
            //         }
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env'],
                //     "plugins": [
                //         ["@babel/plugin-proposal-decorators", { "legacy": true }],
                //         ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                //       ]
                //   }
                }
              }

        ]
    }
}