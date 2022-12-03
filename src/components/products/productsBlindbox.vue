<template>
  <div>
    <div class="dt">
      <img :src="imgUrl"/>
    </div>
    <div class="main">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img class="img" :src="item.img"/>
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: require('@/assets/image/products/101.jpg'),
      list: [
        {
          img: require('@/assets/image/products/102.jpg'),
          title: '联名新品 |《这！就是灌篮》联名款 Laura潮流水果系列盲盒 TOYCITY玩具城市年度重磅原创IP'
        },
        {
          img: require('@/assets/image/products/103.jpg'),
          title: '热卖 | TOYCITY玩具城市 新品盲盒 Angel boy童心系列'
        },
        {
          img: require('@/assets/image/products/104.jpg'),
          title: '原创新品 | 回忆贩卖机系列第一代盲盒 TOYCITY玩具城市'
        },
        {
          img: require('@/assets/image/products/105.jpg'),
          title: '原创新品 | TOYCITY玩具城市 蓬蓬怪第一代系列盲盒'
        },
        {
          img: require('@/assets/image/products/106.jpg'),
          title: '热卖 | TOYCITY玩具城市  新品徽章盲盒  Laura花卉时装系列'
        },
        {
          img: require('@/assets/image/products/107.jpg'),
          title: '联名新品 | 《同在屋檐下》联名款Laura花卉时装系列盲盒 TOYCITY玩具城市年度重磅原创IP'
        },
        {
          img: require('@/assets/image/products/108.jpg'),
          title: '原创新品 |  Laura第三代睡衣派对系列盲盒 TOYCITY玩具城市年度重磅原创IP'
        },
        {
          img: require('@/assets/image/products/109.jpg'),
          title: '原创新品 | TOYCITY玩具城市  Cassy卡茜猫第三代星座系列盲盒'
        },
        {
          img: require('@/assets/image/products/110.jpg'),
          title: '原创新品 | TOYCITY玩具城市  量子狗职业系列盲盒'
        },
        {
          img: require('@/assets/image/products/111.jpg'),
          title: '热卖 | TOYCITY玩具城市    Sueno顽童玩耍系列盲盒'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dt {
  img {
    width: 100%;
    display: block;
  }
}
.main {
  display: flex;
  flex-wrap: wrap;
  margin: 50px 10px 0 10px;
  background-color: #ffffff;

  .item {
    display: flex;
    flex-direction: column;
    width: 22.67%;
    //width: 339px;
    height: 425px;
    padding: 17px;
    margin-bottom: 10px;

    &:hover {
      color: #1e50ae;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(30, 80, 174);
      -webkit-filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, .2));
      transition: 0.5s;
      z-index: 1;
      background-color: #fff;
      display: block;
    }

    .img {
      width: 100%;
      height: 305px;
      display: block;
      margin: auto;
    }

    .title {
      text-align: center;
      padding: 20px 20px;
      line-height: 1.715;
      font-size: 16px;
    }
  }
}

</style>
