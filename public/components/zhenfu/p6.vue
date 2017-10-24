<template>
    <div class="fg" style="text-align: center; overflow: hidden;">
        <div class="p6-head"><img :src="headPic" width="100%"></div>
        <div class="p1-left"><img :src="leftPic"></div>
        <div class="p1-right"><img :src="rightPic"></div>
        <div class="p6-center">
            <div><img :src="centerPic" width="90%"></div>
            <div class="p6-centerup"><img :src="centerupPic"></div>
            <div class="p6-text">
                <h1>邀请函</h1>
                <p>谨定于2017年10月22日</p>
                <p>为小嘴巴举办弥月宴</p>
                <p>席设：西湖美食城</p>
                <p>中午十一时恭候，十二时入席</p>
                <p>期待您的光临！</p>
            </div>
        </div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p5">
            slider5
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p6">
            <div class="fg" style="text-align: center; overflow: hidden;">
                <div class="p6-head"><img :src="headPic" width="100%"></div>
                <div class="p1-left"><img :src="leftPic"></div>
                <div class="p1-right"><img :src="rightPic"></div>
                <div class="p6-center">
                    <div><img :src="centerPic" width="90%"></div>
                    <div class="p6-centerup"><img :src="centerupPic"></div>
                    <div class="p6-text">
                        <h1>邀请函</h1>
                        <p>谨定于2017年10月22日</p>
                        <p>为小嘴巴举办弥月宴</p>
                        <p>席设：西湖美食城</p>
                        <p>中午十一时恭候，十二时入席</p>
                        <p>期待您的光临！</p>
                    </div>
                </div>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p7">
            slider7
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    export default {
        data() {
            return {
                headPic: `${imagePrefix}/zhenfu/p6-head.png`,
                centerupPic: `${imagePrefix}/zhenfu/p6-centerup.png`,
                centerPic: `${imagePrefix}/zhenfu/p6-center.png`,
                leftPic: `${imagePrefix}/zhenfu/p6-lefthead.png`,
                rightPic: `${imagePrefix}/zhenfu/p6-righthead.png`,
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
                this.$router.push({path: '/zhenfu/p7'})
            }
        }
    }
</script>