<template>
  <div class="banner">
    <div class="container">
      <ul>
        <li class="item">
          <!--<img class="pic" :src="pic" />-->
          <span class="icon-left iconfont"></span>
          <span class="icon-right iconfont"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: 'banner',
  components: {
  },
  data () {
    return {
      picList: [
        {
          id: 0,
          src: '@/assets/image/ABUIABACGAAg3Ji29wUo1tusrAIwgA84lgY.jpg'
        }
      ]
      // pic: require('@/assets/image/ABUIABACGAAg3Ji29wUo1tusrAIwgA84lgY.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;

  ul {
    .item {
      width: 100%;
      height: 420px;
      background-image: url("~@/assets/image/ABUIABACGAAg3Ji29wUo1tusrAIwgA84lgY.jpg");
      background-position: 50% 50%;
      background-size: cover;
      position: relative;

      .icon-left, .icon-right {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        margin: 0 10px;
        border-radius: 5px;
      }

      .icon-left {
        left: 0;
        padding: 10px 10px 10px 5px;
      }

      .icon-right {
        right: 0;
        padding: 10px 5px 10px 10px;

      }
    }
  }
}

</style>
