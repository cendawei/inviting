<template>
    <div class="fg">
        <div class="p5-head"><img :src="headPic"></div>
        <div class="p5-photo1">
            <img :src="photoPic" width="380px">
            <img :src="pic1" class="p5-pic1">
        </div>
        <div class="clear"></div>
        <div class="p5-text">
            <p>哥哥姐姐</p>
            <p>叔叔阿姨</p>
            <p>你们会来参加</p>
            <p>我的满月宴吗</p>
            <p>快来和我玩吧</p>
        </div>
        <div class="p5-photo2">
            <img :src="photoPic" width="380px">
            <img :src="pic2" class="p5-pic2">
        </div>
        <div class="clear"></div>
        <div class="p5-photo1">
            <img :src="photoPic" width="380px">
            <img :src="pic3" class="p5-pic3">
        </div>
        <div class="p4-rb p1-lrb"><img :src="rbPic" width="300px"></div>
        <div class="down-gif"><img :src="downPic"></div>
    </div>
    <!--<div class="swiper-wrapper">
        <div class="swiper-slide" data-hash="/zhenfu/p4">
            slider4
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p5">
            <div class="fg">
                <div class="p5-head"><img :src="headPic"></div>
                <div class="p5-photo1"><img :src="photoPic" width="380px"></div>
                <div class="clear"></div>
                <div class="p5-text">
                    <p>哥哥姐姐</p>
                    <p>叔叔阿姨</p>
                    <p>你们会来参加</p>
                    <p>我的满月宴吗</p>
                    <p>快来和我玩吧</p>
                </div>
                <div class="p5-photo2"><img :src="photoPic" width="380px"></div>
                <div class="clear"></div>
                <div class="p5-photo1"><img :src="photoPic" width="380px"></div>
                <div class="p4-rb p1-lrb"><img :src="rbPic" width="300px"></div>
                <div class="down-gif"><img :src="downPic"></div>
            </div>
        </div>
        <div class="swiper-slide" data-hash="/zhenfu/p6">
            slider6
        </div>
    </div>-->
</template>

<script>
    import {imagePrefix} from 'common'
    import $ from 'zepto'
    export default {
        data() {
            return {
                pic1: `${imagePrefix}/zhenfu/pic1.jpg`,
                pic2: `${imagePrefix}/zhenfu/pic5.jpg`,
                pic3: `${imagePrefix}/zhenfu/pic7.jpg`,
                headPic: `${imagePrefix}/zhenfu/p5-righthead.png`,
                headdownPic: `${imagePrefix}/zhenfu/p5-rightheaddown.png`,
                photoPic: `${imagePrefix}/zhenfu/p5-photo.png`,
                rbdPic: `${imagePrefix}/zhenfu/p4-rightbottomdown.png`,
                rbPic: `${imagePrefix}/zhenfu/p5-rightbottom.png`,
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
                this.$router.push({path: '/zhenfu/p6'})
            }
        }
    }
</script>