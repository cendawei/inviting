/**
 * Created by cendawei on 2017/10/9.
 */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {routePrefix} = require('./common')

const dirs = fs.readdirSync(path.resolve(__dirname, '../js/views'))
let entries = {}
dirs.forEach(dir => entries[dir] = `./js/views/${dir}/index.js`)
function resolve(dir) {
    return path.resolve(__dirname, '../../', dir)
}

const baseConfig = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../build/js/'),
        filename: '[name].[chunkhash:8].js',
        publicPath: `${routePrefix}/webroot/build/js/`,
        chunkFilename: '[id].chunk.[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|libs)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
                loader: 'url-loader'
            }
        ]
    },
    externals: {
        'zepto': 'Zepto',
        'jquery': 'jQuery'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue'],
        'alias': {
            'api': path.resolve(__dirname, '../js/core/api.js'),
            'utils': path.resolve(__dirname, '../js/core/utils.js'),
            'services': path.resolve(__dirname, '../js/services/index.js'),
            'vue$': 'vue/dist/vue.esm.js',
            'common': path.resolve(__dirname, './common.js'),
            '@': resolve('public')
        }
    }
}

module.exports = function () {
    baseConfig.plugins = []
    Object.keys(entries).forEach(file => {
        const filename = `${file}/index.html`
        baseConfig.plugins.push(new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../../views', filename),
            template: `./tmpViews/${filename}`,
            inject: "body",
            chunks: [file]
        }))
    })
    return baseConfig
}