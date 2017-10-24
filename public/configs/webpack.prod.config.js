/**
 * Created by cendawei on 2017/10/9.
 */
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack.base.config')()

/*baseConfig.plugins.unshift(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: 'production'
    }
}))*/
const prodConfig = merge({}, baseConfig, {
    output: {
        path: path.resolve(__dirname, '../../statics/build/js/')
    },
    devtool: 'source-map'
});
prodConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
)

module.exports = prodConfig