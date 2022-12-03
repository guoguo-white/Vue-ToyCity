<template>
  <div>
    <ul class="top">
      <li class="item" v-for="item in imgList" :key="item.title">
        <img class="pic" :src="item.img"/>
        <div class="box">
          <span class="title">{{ item.title }}</span>
          <span class="btn">{{ item.btn }}</span>
        </div>
      </li>
    </ul>

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
export default {
  data() {
    return {
      imgList: [
        {
          img: require('@/assets/image/ABUIABACGAAgjIjA9QUowJ2u8AYwgA842AQ.jpg'),
          title: 'BJD盲盒'
        }
      ],
      showProductList: [
        {
          img: require('@/assets/image/ABUIABACGAAgwaO9QUosblgAcwgAo4gAo700x700.jpg.webp'),
          title: '正版GAME OF THRONES盲盒系列 | TOYCITY玩具城市'
        },
        {
          img: require('@/assets/image/ABUIABACGAAg55y9QUo1Kjm3wIwgAo4gAo700x700.jpg.webp'),
          title: '正版FOX ANIMATION盲盒系列 | TOYCITY玩具城市'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgkJu9QUovK9wcwgAo4sQk700x700.jpg.webp'),
          title: '正版WWE盲盒系列 | TOYCITY玩具城市'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  flex-direction: column;

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;

    .pic {
      display: block;
      width: 100%;
      height: 470px;
    }

    .box {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 12%;
      transform: translateY(-50%);

      .title {
        font-size: 36px;
        cursor: pointer;
      }
    }
  }
}

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
