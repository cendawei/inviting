/**
 * Created by cendawei on 2017/10/18.
 */
module.exports = function (t, fmt) {
    var tt = parseInt(t)
    var thisTime = new Date(tt)
    var o = {
        "M+": thisTime.getMonth() + 1, //月份 //其实前面的M+是用作正则表达式之用
        "d+": thisTime.getDate(), //日
        "h+": thisTime.getHours(), //小时
        "m+": thisTime.getMinutes(), //分
        "s+": thisTime.getSeconds(), //秒
        "q+": Math.floor((thisTime.getMonth() + 3) / 3), //季度
        "S": thisTime.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (thisTime.getFullYear() + "").substr(4 - RegExp.$1.length)); // RegExp是javascript的全局对象。$1也是全局对象，表示正则表达式第一次匹配的字符串。/(y+)/是正则表达式，表示指定的选项中包含至少一个y的字符串。
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
