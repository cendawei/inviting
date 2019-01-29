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
    'testing': defaultsDeep({
        host: "120.78.95.62",
        username: 'inviting',
        password: 'HVGfFbDqlH'
    }, baseConfig),
    'production': defaultsDeep({
        host: "120.78.95.62",
        username: 'inviting',
        password: 'HVGfFbDqlH'
    }, baseConfig),
}