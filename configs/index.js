/**
 * Created by cendawei on 2017/10/3.
 */
const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname)
let configs = {}
files.forEach(file => file !== 'index.js' && (
    configs[path.basename(file, '.js')] = require(path.resolve(__dirname, file))
    )
)

module.exports = configs