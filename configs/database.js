/**
 * Created by cendawei on 2017/10/3.
 */
const {defaultsDeep} = require('lodash')

const baseConfig = {
    'host': '127.0.0.1',
    'port': '3306',
    'username': 'root',
    'password': 'root',
    'database': 'inviting',
    'dialect': 'mysql'
}

module.exports = {
    'development': defaultsDeep({}, baseConfig),
    'testing': defaultsDeep({}, baseConfig),
    'production': defaultsDeep({}, baseConfig),
}