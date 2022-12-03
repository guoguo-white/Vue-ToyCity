<template>
  <div class="tideplay">
    <swiper
        class="swiper"
        :modules="modules"
        :loop="true"
        :slides-per-view="1"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        navigation
        :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(item, index) in bannerList" :key="index" style="width: 100%; height: 470px;">
        <img style="width: 100%; height: 100%;" :src="item.img"/>
      </swiper-slide>
    </swiper>
    <ul>
      <li class="item" v-for="(item, index) in list" :key="index">
        <img class="img" :src="item.img" />
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'

// 引入swiper组件
// 引入swiper样式（按需导入）
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css' // 轮播图两边的左右箭头
import SwiperCore, { Autoplay, Pagination, EffectCoverflow, Navigation } from 'swiper'
SwiperCore.use([Autoplay, Pagination, EffectCoverflow, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      bannerList: [
        { img: require('@/assets/image/products/21.jpg') },
        { img: require('@/assets/image/products/22.jpg') },
        { img: require('@/assets/image/products/23.jpg') }
      ],
      list: [
        { img: require('@/assets/image/products/24.webp'), title: 'Laura睡衣派对系列盲盒产品质检报告' },
        { img: require('@/assets/image/products/25.webp'), title: 'Laura花卉时装系列盲盒产品质检报告' },
        { img: require('@/assets/image/products/26.webp'), title: 'Laura潮流水果系列盲盒产品质检报告' },
        { img: require('@/assets/image/products/27.webp'), title: '量子狗职业系列盲盒产品质检报告' }
      ]
    }
  },
  setup () {
    const modules = reactive([
      Autoplay,
      Pagination,
      Navigation
    ])
    return { modules }
  }
}
</script>

<style lang="scss" scoped>

ul {
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  margin: 30px 10px 0 10px;
  background-color: #fff;
  .item {
    //width: 339px;
    width: 22.67%;
    height: 425px;
    padding: 17px;
    margin-bottom: 10px;
    &:hover {
      color: #1e50ae;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(30,80,174);
      -webkit-filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, .2));
      transition: 0.5s;
      z-index: 1;
      background-color: #fff;
      display: block;
    }

    &:nth-child(4) {
      margin-right: 0;
    }
    .img {
      width: 100%;
      height: 305px;
      display: block;
      margin: auto;
    }
    .title {
      text-align: center;
      padding: 20px 10px;
      line-height: 1.715;
      font-size: 16px;
    }
  }
}
</style>
