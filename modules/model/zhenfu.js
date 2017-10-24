/**
 * Created by cendawei on 2017/10/13.
 */
const Sequelize = require('sequelize')
const db = require('./index')
const {defaultsDeep} = require('lodash')

const zhenfuModel = db.define('zhenfu', {
    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    blessing: {
        type: Sequelize.STRING
    },
    addtime: {
        type: Sequelize.INTEGER(11).UNSIGNED
    }
})

module.exports = {
    async getItems() {
        return await zhenfuModel.findAll().then(async items => await items)
    },
    async postItem(queryBody) {
        const itemBody = defaultsDeep({addtime: Math.round(new Date().getTime() / 1000)}, queryBody)
        return await zhenfuModel.create(itemBody).then(async item => await item)
    }
}