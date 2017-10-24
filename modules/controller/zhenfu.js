/**
 * Created by cendawei on 2017/10/13.
 */
const utils = require('../../core/utils')
const dbModel = require('../model/zhenfu')

module.exports = {
    async getItems(req, res, next) {
        const items = await dbModel.getItems()
        res.json(utils.getResult("success", "", items))
    },
    async addInfo(req, res, next) {
        const result = await dbModel.postItem(req.body)
        res.json(utils.getResult("success"))
    }
}