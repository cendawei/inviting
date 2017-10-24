<template>
    <div class="fg">
        <div class="p1-banner"><img :src="headPic"></div>
        <div class="p1-baby"><img :src="babyPic"></div>
        <div class="p1-left p1-lr"><img :src="leftPic"></div>
        <div class="p1-right p1-lr"><img :src="rightPic"></div>
        <div class="p1-text">
            <p>岑臻富宝宝</p>
            <p>弥月邀请函</p>
        </div>
        <div class="p1-toys">
            <img :src="toys1Pic" width="130px">
            <img :src="toys2Pic" width="130px">
            <img :src="toys3Pic" width="130px">
            <img :src="toys4Pic" width="130px">
            <img :src="toys1Pic" width="130px">
            <img :src="toys2Pic" width="130px">
            <img :src="toys3Pic" width="130px">
            <img :src="toys4Pic" width="130px">
        </div>
        <div class="p1-lb p1-lrb"><img :src="lbPic" width="150px"></div>
        <div class="p1-rb p1-lrb"><img :src="rbPic" width="150px"></div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p1">
            <div class="fg">
                <div class="p1-banner"><img :src="headPic"></div>
                <div class="p1-baby"><img :src="babyPic"></div>
                <div class="p1-left p1-lr"><img :src="leftPic"></div>
                <div class="p1-right p1-lr"><img :src="rightPic"></div>
                <div class="p1-text">
                    <p>岑臻富宝宝</p>
                    <p>弥月邀请函</p>
                </div>
                <div class="p1-toys">
                    <img :src="toys1Pic" width="130px">
                    <img :src="toys2Pic" width="130px">
                    <img :src="toys3Pic" width="130px">
                    <img :src="toys4Pic" width="130px">
                    <img :src="toys1Pic" width="130px">
                    <img :src="toys2Pic" width="130px">
                    <img :src="toys3Pic" width="130px">
                    <img :src="toys4Pic" width="130px">
                </div>
                <div class="p1-lb p1-lrb"><img :src="lbPic" width="150px"></div>
                <div class="p1-rb p1-lrb"><img :src="rbPic" width="150px"></div>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p2">
            slider2
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    export default {
        data() {
            return {
                headPic: `${imagePrefix}/zhenfu/p1-banner.png`,
                babyPic: `${imagePrefix}/zhenfu/p1-baby.png`,
                leftPic: `${imagePrefix}/zhenfu/p1-left.png`,
                rightPic: `${imagePrefix}/zhenfu/p1-right.png`,
                toys1Pic: `${imagePrefix}/zhenfu/p1-toys1.png`,
                toys2Pic: `${imagePrefix}/zhenfu/p1-toys2.png`,
                toys3Pic: `${imagePrefix}/zhenfu/p1-toys3.png`,
                toys4Pic: `${imagePrefix}/zhenfu/p1-toys4.png`,
                lbPic: `${imagePrefix}/zhenfu/p1-leftbottom.png`,
                rbPic: `${imagePrefix}/zhenfu/p1-rightbottom.png`,
                downPic: `${imagePrefix}/zhenfu/down.png`
            }
        },
        mounted() {
            const that = this
            this.$nextTick(() => {
                const that = this
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
                this.$router.push({path: '/zhenfu/p2'})
            }
        }
    }
</script>