<template>
  <div class="product">
    <ul class="top">
      <li class="item" v-for="item in imgList" :key="item.title">
        <img class="pic" :src="item.img"/>
        <div class="box">
          <span class="title">{{ item.title }}</span>
          <span class="btn">{{ item.btn }}</span>
        </div>
      </li>
    </ul>

    <ul class="bottom">
      <li class="item" v-for="(item, index) in list" :key="index">
        <img class="img" :src="item.img"/>
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    <span class="p1">已经到底了~</span>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      imgList: [
        {
          img: require('@/assets/image/products/31.jpg'),
          title: '迷你盲盒'
        }
      ],
      list: [
        {
          img: require('@/assets/image/products/32.webp'),
          title: '热卖 | TOYCITY玩具城市 KUNHN CAT困猫二代花花系列盲盒'
        },
        {
          img: require('@/assets/image/products/33.webp'),
          title: '热卖 | TOYCITY玩具城市 回忆贩卖机第二代幻彩岛系列盲盒'
        },
        {
          img: require('@/assets/image/products/34.webp'),
          title: '热卖 | TOYCITY玩具城市 新品徽章盲盒 Laura花卉时装系列'
        },
        {
          img: require('@/assets/image/products/35.webp'),
          title: '热卖 | 超萌新品 GURORO美味人生系列盲盒 TOYCITY玩具城市'
        },
        {
          img: require('@/assets/image/products/36.webp'),
          title: '热卖 | TOYCITY玩具城市 新品徽章盲盒 Laura花卉时装系列'
        },
        {
          img: require('@/assets/image/products/37.webp'),
          title: '联名新品 | 《同在屋檐下》联名款Laura花卉时装系列盲盒 TOYCITY玩具城市年度重磅原创IP'
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

.bottom {
  display: flex;
  flex-wrap: wrap;
  margin: 50px 10px 30px 10px;
  padding: 0 45px;
  background-color: #fff;

  .item {
    width: 428px;
    height: 505px;
    padding: 17px;

    //&:nth-child(1) {
    //  margin-left: 90px;
    //}
    //
    //&:nth-child(4) {
    //  margin-left: 90px;
    //}

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
      height: 385px;
      display: block;
    }

    .title {
      text-align: center;
      padding: 20px 20px;
      line-height: 1.715;
      font-size: 17px;
    }
  }
}

.p1 {
  display: block;
  font-size: 14px;
  color: #666666;
  text-align: center;
  margin: 20px 0;
}

</style>
