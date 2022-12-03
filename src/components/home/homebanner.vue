<template>
  <div class="homeBanner">

    <swiper
      class="swiper"
      :modules="modules"
      :loop="true"
      :slides-per-view="1"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(item, index) in printList" :key="index" style="width: 100%; height: 850px;">
        <img style="width: 100%; height: 100%;" :src="item.url"/>
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
      printList: [
        {
          url: require('@/assets/image/ABUIABACGAAgtfu8QUowobjhgIwgA84lgY.jpg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAghJjS-QUotqng3wcwgA84lgY.jpg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAgyqiq-wUopKfU2wYwgA84uAg.jpg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAgv6qq-wUos7WClwcwgA84uAg.jpg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAgxrjj-AUoivflygMwgA84lgY.jpg')
        }
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
.homeBanner {
}

.container {
  width: 100%;
  height: 706px;
  position: relative;

  //.icon-left, .icon-right {
  //  display: block;
  //  position: absolute;
  //  top: 50%;
  //  transform: translateY(-50%);
  //  font-size: 40px;
  //  color: #fff;
  //  background: rgba(0, 0, 0, 0.1);
  //  margin: 0 10px;
  //  border-radius: 5px;
  //}
  //
  //.icon-left {
  //  left: 0;
  //  padding: 10px 10px 10px 5px;
  //}
  //
  //.icon-right {
  //  right: 0;
  //  padding: 10px 5px 10px 10px;
  //}
}
</style>
