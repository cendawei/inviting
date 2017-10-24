<template>
    <div class="fg">
        <div class="p1-banner"><img :src="headPic"></div>
        <div class="p3-center">
            <img :src="centerPic">
            <img :src="pic1" class="p3-pic1">
        </div>
        <div class="p1-lb p1-lrb p3-lb">
            <img :src="lbPic">
            <div class="p3-text">
                <p>我の萌照</p>
            </div>
        </div>
        <div class="p1-rb p1-lrb p3-rb">
            <img :src="rbPic">
        </div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p2">
            slider2
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p3">
            <div class="fg">
                <div class="p1-banner"><img :src="headPic"></div>
                <div class="p3-center"><img :src="centerPic"></div>
                <div class="p1-lb p1-lrb p3-lb">
                    <img :src="lbPic">
                    <div class="p3-text">
                        <p>我の萌照</p>
                    </div>
                </div>
                <div class="p1-rb p1-lrb p3-rb"><img :src="rbPic"></div>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p4">
            slider4
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    export default {
        data() {
            return {
                pic1: `${imagePrefix}/zhenfu/pic6.jpg`,
                headPic: `${imagePrefix}/zhenfu/p1-banner.png`,
                centerPic: `${imagePrefix}/zhenfu/p3-center.png`,
                lbPic: `${imagePrefix}/zhenfu/p3-leftbottom.png`,
                rbPic: `${imagePrefix}/zhenfu/p3-rightbottom.png`,
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
                this.$router.push({path: '/zhenfu/p4'})
            }
        }
    }
</script>