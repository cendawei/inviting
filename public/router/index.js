/**
 * Created by cendawei on 2017/10/9.
 */
import Vue from 'vue'
import Router from 'vue-router'
import zhenfu from './zhenfu'

Vue.use(Router)

const routes = [].concat(zhenfu)

export default new Router({
    routes
})