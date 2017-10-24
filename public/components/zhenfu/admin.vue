<template>
    <div class="zhenfu-admin" style="padding-top: 2em;">
        <table border="1" cellpadding="20" class="admin-table">
            <tr>
                <th>姓名</th>
                <th>祝福语</th>
                <th>时间</th>
            </tr>
            <tr v-for="item in list">
                <td>{{item.name}}</td>
                <td>{{item.blessing}}</td>
                <td>{{item.addtime | generalTime | datetimeFormat('MM-dd hh:mm')}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import services from 'services'
    export default {
        data() {
            return {
                list: []
            }
        },
        mounted() {
            const that = t
            his
            this.getList()
            this.$nextTick(() => {
                $('.zhenfu-admin').height($(window).height())
                $('.admin-table').maxHeight($(window).height() * 0.85)
            })
        },
        methods: {
            getList() {
                services.zhenfuService.getItems()
                    .done(res => this.list = res.data)
            },
            toNext() {
                this.$router.push({path: '/zhenfu/p1'})
            }
        },
        filters: {
            generalTime(val) {
                return parseInt(val) * 1000
            }
        }
    }
</script>