<template>
    <div class="fg">
        <div class="p2-banner"><img :src="headPic"></div>
        <div class="p2-center">
            <div><img :src="centerPic" width="800px"></div>
            <div class="p2-text">
                <p>小名：小嘴巴</p>
                <p>性别：小帅哥</p>
                <p>出生日期：9月22日</p>
                <p>出生体重：6斤2两</p>
                <p>生肖：小鸡</p>
                <p>星座：处女座</p>
                <p>特长：小调皮、卖萌</p>
            </div>
            <div class="p2-right"><img :src="cbPic" width="200px"></div>
        </div>
        <div class="p1-lb p1-lrb p2-lb"><img :src="lbPic"></div>
        <div class="p2-rb p1-rb p1-lrb">
            <p>小宝宝の</p>
            <p>小档案</p>
        </div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p1">
            slider1
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p2">
            <div class="fg">
                <div class="p2-banner"><img :src="headPic"></div>
                <div class="p2-center">
                    <div><img :src="centerPic" width="800px"></div>
                    <div class="p2-text">
                        <p>小名：小嘴巴</p>
                        <p>性别：小帅哥</p>
                        <p>出生日期：9月22日</p>
                        <p>出生体重：6斤2两</p>
                        <p>生肖：小鸡</p>
                        <p>星座：处女座</p>
                        <p>特长：小调皮、卖萌</p>
                    </div>
                    <div class="p2-right"><img :src="cbPic" width="200px"></div>
                </div>
                <div class="p1-lb p1-lrb p2-lb"><img :src="lbPic"></div>
                <div class="p2-rb p1-rb p1-lrb">
                    <p>小宝宝の</p>
                    <p>小档案</p>
                </div>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p3">
            slider3
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    export default {
        data() {
            return {
                headPic: `${imagePrefix}/zhenfu/p2-righthead.png`,
                centerPic: `${imagePrefix}/zhenfu/p2-center.png`,
                cbPic: `${imagePrefix}/zhenfu/p2-centerbottom.png`,
                lbPic: `${imagePrefix}/zhenfu/p2-leftbottom.png`,
                downPic: `${imagePrefix}/zhenfu/down.png`
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
                this.$router.push({path: '/zhenfu/p3'})
            }
        }
    }
</script>