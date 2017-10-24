<template>
    <div class="fg">
        <div class="p4-head"><img :src="headPic"></div>
        <div class="p4-photo1">
            <img :src="photoPic" width="500px">
            <img :src="pic1" class="p4-pic1">
        </div>
        <div class="clear"></div>
        <div class="p4-text">
            <p>粑粑麻麻说</p>
            <p>我有时候是</p>
            <p>捣蛋的小魔鬼</p>
            <p>但更多的是讨</p>
            <p>人喜欢的宝宝</p>
        </div>
        <div class="p4-rbu"><img :src="rbuPic"></div>
        <div class="clear"></div>
        <div class="p4-photo2">
            <img :src="photoPic" width="400px">
            <img :src="pic2" class="p4-pic2">
        </div>
        <div class="p4-rb p1-lrb"><img :src="rbPic" width="400px"></div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p3">
            slider3
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p4">
            <div class="fg">
                <div class="p4-head"><img :src="headPic"></div>
                <div class="p4-photo1"><img :src="photoPic" width="500px"></div>
                <div class="clear"></div>
                <div class="p4-text">
                    <p>粑粑麻麻说</p>
                    <p>我有时候是</p>
                    <p>捣蛋的小魔鬼</p>
                    <p>但更多的是讨</p>
                    <p>人喜欢的宝宝</p>
                </div>
                <div class="p4-rbu"><img :src="rbuPic"></div>
                <div class="clear"></div>
                <div class="p4-photo2"><img :src="photoPic" width="400px"></div>
                <div class="p4-rb p1-lrb"><img :src="rbPic" width="400px"></div>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p5">
            slider5
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    export default {
        data() {
            return {
                pic1: `${imagePrefix}/zhenfu/pic2.jpg`,
                pic2: `${imagePrefix}/zhenfu/pic4.jpg`,
                headPic: `${imagePrefix}/zhenfu/p4-lefthead.png`,
                photoPic: `${imagePrefix}/zhenfu/p4-photo.png`,
                rbuPic: `${imagePrefix}/zhenfu/p4-rightbottomup.png`,
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
                this.$router.push({path: '/zhenfu/p5'})
            }
        }
    }
</script>