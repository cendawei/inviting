/**
 * Created by cendawei on 2017/10/9.
 */
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import datetimeFormat from '@/filters/datetimeFormat'

Vue.filter('datetimeFormat', datetimeFormat)
// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})