<template>
  <div class="homeproduct">
    <div class="title-container">
      <div class="title">
        <p style="font-size: 36px;">PRODUCT</p>
        <p style="font-size: 24px;">【产品中心】</p>
        <p style="font-size: 30px; color: #1f87e8">——</p>
      </div>
    </div>
    <div class="list-container">
      <ul>
        <li class="item" v-for="(item, index) in productList" :key="index">
          <div class="imgbox">
            <img class="pic" :src="item.img"/>
          </div>
          <p class="tit">{{ item.tit }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [
        {
          img: require('@/assets/image/ABUIABACGAAg45yziAYojJrN9gIwoAY4oAY700x700.jpg.webp'),
          tit: 'TOYCITY玩具城市 潮玩新品类 玩具城市太空舱 Laura'
        }, {
          img: require('@/assets/image/ABUIABACGAAgoOmhgYosYy9mgEwoAY4oAY700x700.jpg.webp'),
          tit: '新品潮玩 | TOYCITY玩具城市 新品潮玩大娃 Laura奇迹曼曼'
        }, {
          img: require('@/assets/image/ABUIABACGAAgpNvGhgYo4LH6sQQwoAY4oAY700x700.jpg.webp'),
          tit: '热卖 | TOYCITY玩具城市 回忆贩卖机第二代幻彩岛系列盲盒'
        }, {
          img: require('@/assets/image/ABUIABACGAAg3tXGhgYotXnkAYwoAY4oAY700x700.jpg.webp'),
          tit: '热卖 | TOYCITY玩具城市 KUNHN CAT困猫二代花花系列盲盒'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  padding: 0 16%;
  background-color: #fff;

  .title {
    padding-top: 3%;
    text-align: center;
    overflow: hidden;

    p {
      margin-bottom: 2%;
    }
  }
}

.list-container {
  padding: 0 6%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 25%;
      padding: 1%;
      box-sizing: border-box;

      &:hover {
        transition: all 1s;
        box-shadow: 0 0 5px #ccc;
      }

      .imgbox {
        overflow: hidden;

        &:hover .pic {
          transition: all 1s;
          transform: scale(1.1, 1.1);
        }
      }

      &:hover .tit {
        color: #1e50ae;
      }

      .pic {
        display: block;
        width: 100%;
        cursor: pointer;
      }

      .tit {
        line-height: 2em;
        margin: 5% 0 7%;
        text-align: center;
        font-size: 16px;
        color: #333;
        cursor: pointer;
      }
    }
  }
}
</style>
