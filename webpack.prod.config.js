var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var _conf = require('./config')

var config = {
    entry: {
        app: './index.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'jsbridge.js',
        library: _conf.API_ROOT,
        libraryTarget: 'umd', // 兼容各种模块化写法
    },
    externals: {
        'jsbridge': 'window.jsbridge'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        })
    ]
};

module.exports = config;