<template>
  <div class="homemodule">
    <div class="container">
      <div class="module-top">
        <p style="font-size: 36px;">BRAN CORE COMPETITIVENESS</p>
        <p style="font-size: 24px;">【品牌核心竞争力】</p>
        <p style="font-size: 30px; color: #d81b43">——</p>
      </div>
      <ul class="module-bottom">
        <li class="item" v-for="(item, index) in modulesList" :key="index">
          <div class="item-box-l">
            <h3><span>{{ item.enl }}</span>{{ item.titlel }}</h3>
            <p>{{ item.contentl1 }}</p>
            <p>{{ item.contentl2 }}</p>
          </div>

          <div class="picbox">
            <div class="item-box-img-l">
              <img class="pic" :src="item.pic1"/>
            </div>
            <div class="item-box-img-r">
              <img class="pic" :src="item.pic2"/>
            </div>
          </div>

          <div class="item-box-r">
            <h3><span>{{ item.enr }}</span>{{ item.titler }}</h3>
            <p>{{ item.contentr1 }}</p>
            <p>{{ item.contentr2 }}</p>
            <p :style="{'display': item.contentr3 ? 'block' : 'none' }">{{ item.contentr3 }}</p>
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modulesList: [
        {
          enl: 'A.',
          enr: 'B.',
          titlel: 'IP资源整合',
          titler: '产品开发',
          contentl1: '优质原创设计团队',
          contentl2: '品牌授权及艺术家签约',
          contentr1: '专业的3D模型开发团队',
          contentr2: '严谨的玩具工程团队',
          contentr3: '严格的品质管控团队',
          pic1: require('@/assets/image/ABUIABAEGAAgzN2x9wUohOGu8wIwyAE4yAE.png.webp'),
          pic2: require('@/assets/image/ABUIABAEGAAgzN2x9wUorriv1wQwyAE4yAE.png.webp')
        },
        {
          enl: 'C.',
          enr: 'D.',
          titlel: '供应链生产体系',
          titler: '全球分销渠道',
          contentl1: '高品质代工厂资源',
          contentl2: '每月产能超过300万只玩具',
          contentr1: '国内外分销渠道超过3000+',
          contentr2: '渠道品牌超过20+',
          pic1: require('@/assets/image/ABUIABAEGAAgyt2x9wUop5fQ_wUwyAE4yAE.png.webp'),
          pic2: require('@/assets/image/ABUIABAEGAAgyd2x9wUo6bXiYDDIATjIAQ.png.webp')
        },
        {
          enl: 'E.',
          enr: 'F.',
          titlel: '自主电商渠道',
          titler: '新媒体运营',
          contentl1: '淘宝/京东/微信商城/小程序商城/小红书',
          contentl2: '抖音小店/快手小店/Bilibili会员商城',
          contentr1: '微博、微信、抖音、快手、小红书、B站、豆瓣',
          contentr2: '知乎、微淘、直播平台等粉丝社群经济运营',
          pic1: require('@/assets/image/ABUIABAEGAAgyt2x9wUotvvCpwUwyAE4yAE.png.webp'),
          pic2: require('@/assets/image/ABUIABAEGAAgyt2x9wUo7_TuKDDIATjIAQ.png.webp')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 16%;
  background-color: #f5f5f5;

  .module-top {
    padding-top: 3%;
    text-align: center;
    overflow: hidden;

    p {
      margin-bottom: 2%;
    }
  }

  .module-bottom {
    overflow: hidden;

    .item {
      display: flex;
      justify-content: space-between;
      padding: 4.6% 0 2.3%;

      &:first-child {
        padding-bottom: 0;
      }

      .picbox {
        overflow: hidden;
        flex: 1;
        display: flex;
        justify-content: center;
        //width: 34%;
      }

      .item-box-img-l, .item-box-img-r {
        border-radius: 50%;
        width: 127.21px;
        height: 127.21px;
        margin: 0 6%;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .item-box-l, .item-box-r {
        overflow: hidden;
        width: 26%;

        h3 {
          color: #febf2c;
          font-size: 20px;

          span {
            margin-right: 10px;
            font-style: italic;
            font-size: 40px;
          }
        }

        p {
          line-height: 2em;
          margin: 4% 0 0 0;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>
