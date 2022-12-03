<template>
  <div>
    <swiper
        class="swiper"
        :loop="true"
        :slides-per-view="1"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
    >
      <swiper-slide style="width: 100%; height: 550px;">
        <div class="pic1"/>
      </swiper-slide>
      <swiper-slide style="width: 100%; height: 550px;">
        <div class="pic2"/>
      </swiper-slide>
      <swiper-slide style="width: 100%; height: 550px;">
        <div class="pic3"/>
      </swiper-slide>
      <swiper-slide style="width: 100%; height: 550px;">
        <div class="pic4"/>
      </swiper-slide>
    </swiper>

    <ul class="list">
      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="img"></div>
        </div>
        <div class="right">
          <p class="title">新品 | 搭乘太空舱，与LAURA开启夏日狂欢~</p>
          <p class="detail">地球上连续好几天阴雨天气，LAURA GIRLS早已按耐不住焦躁的心情，要提前沁爽一“夏”。那就逃离地球，把泳池大作战的狂欢带到外太空，一场精彩的夏日战斗即将打响...</p>
          <span class="button">新品发布</span>
        </div>
      </li>
    </ul>

    <div class="pageBox">
      <button class="btn ccc">上一页</button>
      <ul class="page">
        <li class="item">
          <span class="blue">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>6</span>
        </li>
      </ul>
      <button class="btn">下一页</button>
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
        { img: require('@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpg') },
        { img: require('@/assets/image/ABUIABACGAAg96XpQUo8yupgQw0A84rwo.jpeg') },
        { img: require('@/assets/image/ABUIABACGAAgq5iuQUogDD4gYwmxk46RA.jpeg') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.pic1 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAgv6qq-wUos7WClwcwgA84uAg.jpg") no-repeat 100%;
  background-size: cover;
}

.pic2 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAgqa8QUo0KTHgAIwgA84lgY.jpeg") no-repeat 100%;
  background-size: cover;
}

.pic3 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAga8QUovMTs5QUwgA84lgY.jpeg") no-repeat 100%;
  background-size: cover;
}

.pic4 {
  width: 100%;
  height: 470px;
  background: url("~@/assets/image/ABUIABACGAAgmva8QUojIWqgwEwgA84lgY.jpeg") no-repeat 100%;
  background-size: cover;
}

.list {
  //margin-top: 75px;
  padding: 0 186.7px;

  .item {
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    //margin-bottom: 10px;

    &:last-child {
      border: none;
    }

    &:hover {
      transition: all 0.5s;
      box-shadow: 0 0 10px #ccc;
    }

    &:hover .title {
      color: #1e50ae;
    }

    .left {
      width: 407px;
      height: 240px;
      margin-right: 35px;
      overflow: hidden;
    }

    .img {
      width: 100%;
      height: 100%;
      background: url("~@/assets/image/ABUIABACGAAg85HekgYolPLCiwMwuAg40QM700x700.jpg.webp") no-repeat 50%;
      background-size: cover;

      &:hover {
        transition: all 0.5s;
        transform: scale(1.1);
      }
    }

    .right {
      flex: 1;

      .title {
        margin-top: 20px;
        line-height: 24px;
        font-size: 16px;
      }

      .detail {
        margin-top: 18px;
        color: #666;
        font-size: 14px;
        line-height: 2em;
      }

      .button {
        display: inline-block;
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        line-height: 28px;
        margin: 12px 15px 0 0;
        padding: 0 8px;
        color: #999;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}

.pageBox {
  margin: 10px 0 20px;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  .ccc {
    color: #ccc !important;
  }
  .blue {
    color: #1e50ae;
  }

  .btn {
    padding: 0 14px;
    line-height: 28px;
    color: #666;
    font-size: 14px;
    border: none;
    background: #fff;
    cursor: pointer;

    &:hover {
      color: #1e50ae;
    }
  }

  .page {
    .item {
      display: flex;

      span {
        text-align: center;
        display: inline-block;
        width: 35px;
        line-height: 28px;
        cursor: pointer;

        &:hover {
          color: #1e50ae;
        }
      }
    }
  }
}

</style>
