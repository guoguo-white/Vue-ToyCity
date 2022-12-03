<template>
  <div class="brand">
    <swiper
        class="swiper"
        :loop="true"
        :slides-per-view="1"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="(item, index) in bannerList" :key="index" style="width: 100%; height: 619.66px;">
        <img style="width: 100%; height: 100%;" :src="item.url"/>
      </swiper-slide>
    </swiper>

    <div class="photo">
      <div class="topBox">
        <div class="imgBox">
          <img class="img" src="@/assets/image/ABUIABACGAAgsRQUosPyPgAYwoAY4oAY700x700.jpg.webp"/>
        </div>
        <div class="imgBox">
          <img class="img" src="@/assets/image/ABUIABACGAAgga8QUoppzHpQIwgAY4gAY700x700.jpg.webp"/>
        </div>
      </div>
      <div class="bottomBox">
        <video class="video" preload="metadata" controls
               src="https://23330471.s21v.faiusr.com/58/ABUIABA6GAAg5Z7S-QUojLXi2wQ.mp4"></video>
        <div class="title">《这！就是灌篮》联名款潮玩系列——Laura潮流水果系列盲盒 星星眼少女</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import 'swiper/swiper.min.css'

import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      bannerList: [
        {
          url: require('@/assets/image/ABUIABACGAAgtfu8QUowobjhgIwgA84lgY.jpg')
        },
        {
          url: require('@/assets/image/state.gif')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.photo {
  padding: 0 187px;

  .topBox {
    display: flex;

    .imgBox {
      width: 50%;
      margin: 10px;
      //padding: 10px;
      box-sizing: border-box;
      overflow: hidden;

      .img {
        display: block;
        width: 100%;
        &:hover {
          transform: scale(1.1);
          transition: all 0.5s;
        }
      }
    }
  }

  .bottomBox {
    width: 100%;

    .video {
      display: block;
      width: 100%;
    }

    .title {
      margin: 10px 0;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
    }

    & .video:hover + .title {
      margin: 20px 0 0 0;
      transition: all 0.5s;
    }
  }
}

</style>
