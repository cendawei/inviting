/**
 * Created by cendawei on 2017/10/9.
 */
import {routePrefix} from 'common'
import $ from 'jquery'

module.exports = function (opts, successfunc, failfunc) {
    var deff = $.Deferred();
    if(!opts || !opts.url) {
        deff.reject('no url specified!')
    }
    var option = $.extend(true, {
        type: 'get',
        dataType: 'json'
    }, opts)
    option.url = routePrefix + option.url
    $.ajax(option).done(function (res) {
        res.code !== 0 && console.log(res.msg)
        successfunc && successfunc(res)
        deff.resolve(res)
    }).fail(function (err) {
        console.log('接口调用失败')
        failfunc && failfunc(err)
        deff.reject(err)
    })
    return deff.promise()
}