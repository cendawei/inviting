/**
 * Created by cendawei on 2017/10/13.
 */
const {errorCode} = require('../configs')

module.exports = {
    getResult(codeText, msg, data) {
        let rs = errorCode[codeText]
        msg && (rs.msg = msg)
        data && (rs.data = data)
        return rs
    }
}