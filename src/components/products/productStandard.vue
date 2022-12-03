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
      <swiper-slide v-for="(item, index) in printList" :key="index" style="width: 100%; height: 847px;">
        <img style="width: 100%; height: 100%;" :src="item.url"/>
      </swiper-slide>
    </swiper>
    <ul class="showProduct">
      <li class="item" v-for="(item, index) in showProductList" :key="index">
        <img class="img" :src="item.img"/>
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
    <div class="base">已经到底了~</div>

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
          url: require('@/assets/image/ABUIABACGAAgv6qqwUos7WClwcwgA84uAg.jpeg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAga8QUovMTs5QUwgA84lgY.jpeg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAgqa8QUo0KTHgAIwgA84lgY.jpeg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAghJjSQUotqng3wcwgA84lgY.jpeg')
        },
        {
          url: require('@/assets/image/ABUIABACGAAgxrjj-AUoivflygMwgA84lgY.jpg')
        }
      ],
      showProductList: [
        {
          img: require('@/assets/image/ABUIABACGAAg4fmhgYo8orQgwUwoAY4oAY700x700.jpg.webp'),
          title: '原创新品 |  Laura第三代睡衣派对系列盲盒 TOYCITY玩具城市年度重磅原创IP'
        },
        {
          img: require('@/assets/image/ABUIABACGAAg8vahgYovNL7GzCgBjigBg700x700.jpg.webp'),
          title: '联名新品 | 《同在屋檐下》联名款Laura花卉时装系列盲盒 TOYCITY玩具城市年度重磅原创IP'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgga8QUoppzHpQIwgAY4gAY700x700.jpg.webp'),
          title: '联名新品 |《这！就是灌篮》联名款 Laura潮流水果系列盲盒 TOYCITY玩具城市年度重磅原创IP'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgjIzAhgYo1sPhvgEwoAY4oAY700x700.jpg.webp'),
          title: '热卖 | TOYCITY玩具城市    Sueno顽童玩耍系列盲盒'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgn4HAhgYo8KSC9gEwoAY4oAY700x700.jpg.webp'),
          title: '原创新品 | TOYCITY玩具城市  Cassy卡茜猫第三代星座系列盲盒'
        },
        {
          img: require('@/assets/image/ABUIABACGAAg1oTAhgYo4KXgzAcwoAY4oAY700x700.jpg.webp'),
          title: '原创新品 | TOYCITY玩具城市  量子狗职业系列盲盒'
        },
        {
          img: require('@/assets/image/ABUIABACGAAg6fXjAUonsCknwQwgAY4gAY700x700.jpg.webp'),
          title: '热卖 | TOYCITY玩具城市 新品盲盒 Angel boy童心系列'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgeO8QUos466mAYwgAY4gAY700x700.jpg.webp'),
          title: '热卖 | TOYCITY玩具城市 CASSY卡茜猫夏日饮品系列盲盒'
        },
        {
          img: require('@/assets/image/ABUIABACGAAg5tLGhgYoq8zsfDCgBjigBg700x700.jpg.webp'),
          title: '热卖 | TOYCITY玩具城市 PAN缤纷乐园系列盲盒'
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
.showProduct {
  padding: 0 78.68px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 33.33%;
    box-sizing: border-box;
    padding: 22.48px;
    cursor: pointer;
    text-align: center;

    &:hover {
      box-shadow: 0 0 10px #ccc;
      transition: all 0.5s;
    }
    &:hover .title {
      color: #1e50ae;
    }

    .img {
      display: block;
      width: 404.59px;
      height: 404.59px;
    }

    .title {
      display: block;
      margin: 15px 0 5px;
      font-size: 16px;
      color: #333;
      line-height: 1.7em;
    }
  }
}

.base {
  text-align: center;
  line-height: 60px;
  margin-top: 10px;
  color: #666;
  font-size: 14px;
}

</style>
