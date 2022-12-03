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
      <swiper-slide v-for="(item, index) in bannerList" :key="index" style="width: 100%; height: 507px;">
        <img style="width: 100%; height: 100%;" :src="item.img"/>
      </swiper-slide>
    </swiper>
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
          { img: require('@/assets/image/ABUIABACGAAgobenggYouJ3SezCADziWBg.jpg') },
          { img: require('@/assets/image/ABUIABACGAAg3Ji29wUo1tusrAIwgA84lgY.jpg') },
          { img: require('@/assets/image/ABUIABACGAAgxrjj-AUoivflygMwgA84lgY.jpg') }
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
