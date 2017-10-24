<template>
    <div class="fg" style="text-align: center;">
        <p class="form-title">-RSVP/邀请回执-</p>
        <p class="form-subtitle">邀请人：岑大欣&陈文伦</p>
        <form class="form-control">
            <input type="text" placeholder="姓名" class="input-text" v-model="queryBody.name">
            <!--<input type="text" placeholder="手机" class="input-text input-mrt" v-model="queryBody.phone">-->
            <!--<input type="text" placeholder="人数" class="input-text input-mrt" v-model="queryBody.count">-->
            <input type="text" placeholder="祝福" class="input-text input-mrt" v-model="queryBody.blessing">
            <input type="button" value="提交" class="input-button input-mrt" @click="submitForm()">
        </form>
        <div class="location">
            <a href="https://3gimg.qq.com/lightmap/v1/marker/index.html?marker=coord%3A21.5081%2C111.00339%3Btitle%3A%E8%A5%BF%E6%B9%96%E7%BE%8E%E9%A3%9F%E5%9F%8E%3Baddr%3A%E5%B9%BF%E4%B8%9C%E7%9C%81%E8%8C%82%E5%90%8D%E5%B8%82%E7%94%B5%E7%99%BD%E5%8C%BA%E6%B0%B4%E4%B8%9C%E9%95%87%E6%96%B0%E6%B9%96%E8%B7%AF%E6%B1%87%E6%99%AF%E8%8B%91%E5%8C%9750%E7%B1%B3%3Buid%3A15145179474498398668&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU&referer=pcmap&ch=uri-api&ADTAG=uri-api.pcmap">
                <img :src="locationPic">
            </a>
        </div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p6">
            slider6
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p7">
            <div class="fg" style="text-align: center;">
                <div class="location">
                    <a href="https://3gimg.qq.com/lightmap/v1/marker/index.html?marker=coord%3A21.5081%2C111.00339%3Btitle%3A%E8%A5%BF%E6%B9%96%E7%BE%8E%E9%A3%9F%E5%9F%8E%3Baddr%3A%E5%B9%BF%E4%B8%9C%E7%9C%81%E8%8C%82%E5%90%8D%E5%B8%82%E7%94%B5%E7%99%BD%E5%8C%BA%E6%B0%B4%E4%B8%9C%E9%95%87%E6%96%B0%E6%B9%96%E8%B7%AF%E6%B1%87%E6%99%AF%E8%8B%91%E5%8C%9750%E7%B1%B3%3Buid%3A15145179474498398668&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU&referer=pcmap&ch=uri-api&ADTAG=uri-api.pcmap">
                        <img :src="locationPic">
                    </a>
                </div>
                <p class="form-title">-RSVP/邀请回执-</p>
                <form class="form-control">
                    <input type="text" placeholder="姓名" class="input-text" v-model="queryBody.name">
                    <input type="text" placeholder="手机" class="input-text input-mrt" v-model="queryBody.phone">
                    <input type="text" placeholder="人数" class="input-text input-mrt" v-model="queryBody.count">
                    <input type="text" placeholder="祝福" class="input-text input-mrt" v-model="queryBody.blessing">
                    <input type="button" value="提交" class="input-button input-mrt" @tap="submitForm()">
                </form>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p1">
            slider1
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    import services from 'services'
    import {cloneDeep} from 'lodash'
    export default {
        data() {
            return {
                locationPic: `${imagePrefix}/zhenfu/location.png`,
                headPic: `${imagePrefix}/zhenfu/p6-head.png`,
                centerupPic: `${imagePrefix}/zhenfu/p6-centerup.png`,
                centerPic: `${imagePrefix}/zhenfu/p6-center.png`,
                leftPic: `${imagePrefix}/zhenfu/p6-lefthead.png`,
                rightPic: `${imagePrefix}/zhenfu/p6-righthead.png`,
                downPic: `${imagePrefix}/zhenfu/down.png`,
                queryBody: {
                    name: '',
//                    phone: '',
//                    count: '',
                    blessing: ''
                }
            }
        },
        mounted() {
            const that = this
            this.$nextTick(() => {
                $('.fg').height($(window).height())
                $('.fg').swipeUp(function () {
                    that.toNext()
                })
                document.addEventListener("touchmove", function (e) {
                    e.preventDefault();
                }, false)
                /*const pSwiper = new Swiper('.swiper-container', {
                    direction: 'vertical',
                    hashnav: true,
                    hashnavWatchState: true
                })*/
            })
        },
        methods: {
            toNext() {
                this.$router.push({path: '/zhenfu/p1'})
            },
            submitForm() {
                if(!this.queryBody.name) return
                services.zhenfuService.addItem(cloneDeep(this.queryBody))
                    .done(() => alert("小臻富说谢谢！"))
            }
        }
    }
</script>