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
      <swiper-slide style="width: 100%; height: 470px;">
        <div class="pic1"/>
      </swiper-slide>
      <swiper-slide style="width: 100%; height: 470px;">
        <div class="pic2"/>
      </swiper-slide>
      <swiper-slide style="width: 100%; height: 470px;">
        <div class="pic3"/>
      </swiper-slide>
    </swiper>
    <List />
  </div>
</template>

<script>
import List from '@/components/cooperation/list'
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
    SwiperSlide,
    List
  },
  data () {
    return {
      bannerList: [
        { img: require('@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpg') },
        { img: require('@/assets/image/ABUIABACGAAg96XpQUo8yupgQw0A84rwo.jpeg') },
        { img: require('@/assets/image/ABUIABACGAAgq5iuQUogDD4gYwmxk46RA.jpeg') }
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
.pic1 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpg") no-repeat 100%;
  background-size: cover;
}
.pic2 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAg96XpQUo8yupgQw0A84rwo.jpeg") no-repeat 100%;
  background-size: cover;
}
.pic3 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAgq5iuQUogDD4gYwmxk46RA.jpeg") no-repeat 100%;
  background-size: cover;
}

</style>
