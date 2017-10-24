<template>
    <div>
        <!--<div style="margin: 0 auto; display: none;"><img :src="sharePic"></div>-->
        <router-view></router-view>
    </div>
    <!--<div class="swiper-container">
        <router-view></router-view>
    </div>-->
</template>

<script>
//    import {imagePrefix} from 'common'
    export default {
        name: 'app',
        data() {
            return {
//                sharePic: `${imagePrefix}/zhenfu/share.jpg`
            }
        },
        mounted() {
            this.$nextTick(() => {
//                $('.swiper-slide').height($(window).height())
                /*const pSwiper = new Swiper('.swiper-container', {
                    direction: 'vertical',
                    hashnav: true,
                    hashnavWatchState: true
                })*/
            })
        }
    }
</script>