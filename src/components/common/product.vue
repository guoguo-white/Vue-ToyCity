<template>
  <div class="product">
    <div class="container">
      <ul>
        <li class="item" v-for="item in productList" :key="item.id">
          <img class="pic" :src="item.img"/>
          <p class="title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      productList: [
        {
          id: 0,
          title: '新品潮玩 | TOYCITY X《这！就是灌篮》联名限量款 Laura潮玩大娃 小樱',
          img: require('@/assets/image/ABUIABACGAAgsRQUosPyPgAYwoAY4oAY700x700.jpg.webp')
        }, {
          id: 1,
          title: '新品潮玩 | TOYCITY×《这！就是灌篮》联名限量款LAURA潮玩大娃-小枫',
          img: require('@/assets/image/ABUIABACGAAgnMzuhAYosOnnvgMw6Ac4mgU700x700.jpg.webp')
        }, {
          id: 2,
          title: '新品潮玩 | TOYCITY玩具城市 新品潮玩大娃 Laura奇迹曼曼',
          img: require('@/assets/image/ABUIABACGAAgoOmhgYosYy9mgEwoAY4oA700x700.jpg.webp')
        }, {
          id: 3,
          title: 'TOYCITY玩具城市 | 年度重磅原创IP 限量款潮玩大娃 Laura莓果布丁',
          img: require('@/assets/image/ABUIABACGAAg6uyhgYowPyzmQUwoAY4oAY700x700.jpg.webp')
        }, {
          id: 4,
          title: 'TOYCITY玩具城市 | 年度重磅原创IP 限量款潮玩大娃 Laura树莓布朗尼',
          img: require('@/assets/image/ABUIABACGAAguuhgYo2Pj6sAIwoAY4oAY700x700.jpg.webp')
        }, {
          id: 5,
          title: 'TOYCITY玩具城市 年度重磅原创IP 限量款潮玩大娃 Laura少女',
          img: require('@/assets/image/ABUIABACGAAgoeORwUoqtKHgwEwtgc4wAc700x700.jpg.webp')
        }, {
          id: 6,
          title: 'TOYCITY玩具城市 年度重磅原创IP 限量款潮玩大娃 Laura暗夜',
          img: require('@/assets/image/ABUIABACGAAgseORwUogLnRiAcwtgc4wgc700x700.jpg.webp')
        }, {
          id: 7,
          title: 'TOYCITY玩具城市 年度重磅原创IP 限量款潮玩大娃 Laura火焰',
          img: require('@/assets/image/ABUIABACGAAggeORwUokLagwMwtgc4wwc700x700.jpg.webp')
        }, {
          id: 8,
          title: 'TOYCITY玩具城市 年度重磅原创IP 限量款潮玩大娃 Laura僵尸新娘',
          img: require('@/assets/image/ABUIABACGAAgkOORwUowOWEsQUwtgc4wQc700x700.jpg.webp')
        }, {
          id: 9,
          title: '非卖品 | TOYCITY玩具城市 非卖品潮玩大娃 LAURA金色年华',
          img: require('@/assets/image/ABUIABACGAAgyumhgYogLjxwAEwoAY4oAY700x700.jpg.webp')
        }, {
          id: 10,
          title: 'TOYCITY玩具城市 热门潮玩 CASSY卡茜猫大号 银色电镀骷髅僵尸版招财猫',
          img: require('@/assets/image/ABUIABACGAAg35y29wUoos37yQQw7gU47gU700x700.jpg.webp')
        }, {
          id: 11,
          title: 'TOYCITY玩具城市 新品潮玩 CASSY开茜猫大号 可乐猫招财猫',
          img: require('@/assets/image/ABUIABACGAAgpqeqwUo0J27ZTDuBTjuBQ700x700.jpg.webp')
        }, {
          id: 12,
          title: 'TOYCITY玩具城市 热门潮玩大娃 Angel boy18K真金电镀限量款大娃',
          img: require('@/assets/image/ABUIABACGAAgwPXjAUoieKB6wEwgAY4gAY700x700.jpg.webp')
        }, {
          id: 13,
          title: 'TOYCITY玩具城市 热门潮玩大娃 Angel boy 18cm限量版原色梦',
          img: require('@/assets/image/ABUIABACGAAg6fXjAUonsCknwQwgAY4gAY700x700.jpg.webp')
        }, {
          id: 14,
          title: 'TOYCITY玩具城市 热门潮玩大娃 Angel boy 18cm限量版美冬、美夏',
          img: require('@/assets/image/ABUIABAEGAAgvMXuhAYotOfY7wcwgAQ44QM.png.webp')
        }, {
          id: 15,
          title: '新品潮玩 | TOYCITY玩具城市 新品潮玩大娃 Laura电话粥',
          img: require('@/assets/image/ABUIABACGAAgquehgYomvyZqgQwoAY4oAY700x700.jpg.webp')
        }, {
          id: 16,
          title: '新品潮玩 | TOYCITY玩具城市 新品潮玩大娃 Laura蜂蜜小熊',
          img: require('@/assets/image/ABUIABACGAAg2eqhgYomfKofTCgBjigBg700x700.jpg.webp')
        }, {
          id: 17,
          title: '新品潮玩 | TOYCITY玩具城市 新品潮玩大娃 LAURA铃兰',
          img: require('@/assets/image/ABUIABACGAAg8hgYohfq2gIwoAY4oAY700x700.jpg.webp')
        }, {
          id: 18,
          title: '新品潮玩 | TOYCITY玩具城市 新品潮玩大娃 Laura 电音少女',
          img: require('@/assets/image/ABUIABACGAAgvYSnggYojpfX9QUwhAc4tQc700x700.jpg.webp')
        }, {
          id: 19,
          title: 'TOYCITY玩具城市 潮玩新品类 玩具城市太空舱 Laura',
          img: require('@/assets/image/ABUIABACGAAg45yziAYojJrN9gIwoAY4oAY700x700.jpg.webp')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 5% 0 2%;
  background: #e6e6e6;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
    box-sizing: border-box;
    overflow: hidden;

    .item {
      box-sizing: border-box;
      width: 32%;
      padding: 24px;
      margin: 15px 0.66%;
      background: #fff;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 20px #000;
        transition: all 1s;
      }

      &:hover .title {
        color: #1e50ae;
      }

      .pic {
        display: block;
        width: 100%;
        height: 83.5%;
      }

      .title {
        margin: 15px 0 5px;
        font-size: 16px;
        color: #333;
        line-height: 2em;
      }
    }
  }
}

</style>
