/**
 * Created by cendawei on 2017/10/18.
 */
import api from 'api'
const projectPrefix = '/zhenfu'
export default {
    getItems() {
        return api({
            url: `${projectPrefix}/customers`,
            type: 'get'
        })
    },
    addItem(queryBody) {
        return api({
            url: `${projectPrefix}/customer/info`,
            type: 'post',
            data: queryBody
        })
    }
}