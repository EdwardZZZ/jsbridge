var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var _conf = require('./config')

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/dev-server', 
        './index.js'
    ],
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'jsbridge.js',
        library: _conf.API_ROOT,
        libraryTarget: 'umd', // 兼容各种模块化写法
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    },
    devServer: {
        port: 9000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        })
    ]
};

module.exports = config;