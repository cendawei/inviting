/**
 * Created by cendawei on 2017/10/9.
 */
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')()

/*baseConfig.plugins.unshift(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: 'development'
    }
}))*/
const devConfig = merge({}, baseConfig, {
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'source-map'
})

module.exports = devConfig