<template>
  <div>
    <div class="imgBox">
      <img class="img" src="@/assets/image/ABUIABACGAAg7Mex9wUotMqqgYw3As45AU.jpeg" />
    </div>
  </div>

  <ul class="list">
    <li class="item" v-for="(item, index) in newsList" :key="index">
      <div class="imgBox">
        <img class="img" :src="item.img"/>
      </div>
      <p class="title">{{ item.title }}</p>
      <span class="date">{{ item.date }}</span>
      <p class="detail">{{ item.detail }}</p>
      <div class="btn-box">
        <div class="l">
          <span class="butt">{{ item.butt1 }}</span>
          <span class="butt" :style="{'display': item.butt2 ? 'block' : 'none'}">{{ item.butt2 }}</span>
        </div>
        <span class="icon iconfont">&#xea66;</span>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      newsList: [
        {
          img: require('@/assets/image/ABUIABACGAAgyY38kAYovIfE3QIwuAg40QM700x700.jpg.webp'),
          title: '百熊计划 | 国喜福福中国汉字系列全国巡展首站——成都！',
          date: '2022-03-02',
          detail: '“南方有兽，名曰啮铁。”国喜福福来自中国，猫朋熊友叫他福福（FUFU）。FUFU结合中国汉字、书法、水墨风等元素，以憨态可掬的熊猫为载体，用艺术为表现形式，通过文化的深度交流与融合所诞生的艺术IP。',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgrr7kAYohsn0iAUwuAg4zAM700x700.jpg.webp'),
          title: '城市IP第四站 | 巨型雕塑ANGEL BOY·WHITE治愈杭州！',
          date: '2022-03-02',
          detail: 'ANGEL BOY·WHITE（怀特）整体设计以融入自然、保护环境的环保理念为主，他通体纯白，闭眼吹着治愈气球、手捧西湖画舫游船，化作大自然的守护者，以8米坐姿男孩形象，矗立在世界文化遗产——西湖一隅，随时和你来一场自然与潮流碰撞的邂逅。',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgoLGziAYozYVTjDoBzjuBQ700x700.jpg.webp'),
          title: 'ToyCity×广州正佳 | ANGEL BOY “时空奇遇”全国首展来啦！',
          date: '2021-08-06',
          detail: '8月5日，遇见正佳，开启奇幻的时空之旅~',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgobKziAYo8930nwcw4Co4wBw700x700.jpg.webp'),
          title: 'ChinaJoy直击 |「玩具城市太空舱」轻“潮”登陆！',
          date: '2021-08-06',
          detail: '玩具城市太空舱全球首展！',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgv6eziAYo1LXTejDoBzjNAw700x700.jpg.webp'),
          title: '潮玩新宇宙登陆ChinaJoy，轻“潮”之风席卷夏日魔都！',
          date: '2021-08-06',
          detail: '速来围观【玩具城市太空舱】全球首展！',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgw6KziAYor7jFqgIwgA84uAg700x700.jpg.webp'),
          title: '人人潮玩 | 玩具城市太空舱，轻“潮”出发！',
          date: '2021-08-06',
          detail: '7月30日，【 2021 ToyCity潮玩新品类“玩具城市太空舱”发布会】于上海正式发布，设计师为大家展示产品的最新设计细节，全面呈现品牌及产品的轻潮进化。',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAg3dDohwYo8YLmDjC4CDjRAw700x700.jpg.webp'),
          title: '打卡新地标！14米巨型潮玩 “ANGEL BOY•美好愿望”星球登陆',
          date: '2021-07-23',
          detail: 'ToyCity 城市IP ： 一个ToyCity，100座玩具城市！',
          butt1: 'IP活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAg7NzAhgYo5KD5jwEwhAc4lgQ700x700.jpg.webp'),
          title: '【Call Me Laura】| 6月6日，由“TA”向你讲述星星眼少女的故事',
          date: '2021-06-21',
          detail: 'Laura，不仅是给玩家们的一份礼物，也是一张”邀请函“。以“星星眼少女”之名，邀请更多的朋友一起感受潮玩的快乐，互相只需一句“好可爱”便能传达彼此情感。',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAglNzAhgYo4dzGQQwsgU41AI.jpg.webp'),
          title: 'CALL ME ！6月6日，Laura设计师首签会空降魔都！',
          date: '2021-06-21',
          detail: '6月6日，Laura设计师大田在上海淮海路华狮广场X11店举行首签会，向你讲述Laura的有趣故事。同时签售Laura电话粥，现货约200体~',
          butt1: '新品发布',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAguZbthAYovPvnwQwhAc4ggo700x700.jpg.webp'),
          title: '火出圈！“LAURA•篮球城市”带你一起360°放肆打卡！',
          date: '2021-05-12',
          detail: '一场集合超大体潮流雕塑、潮玩博物馆X11、“快乐星球”市集的潮玩盛会，等你一起360°放肆打CALL！',
          butt1: '公司新闻',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAghZLthAYosy0AYwuAg4qgY700x700.jpg.webp'),
          title: '展会回顾 | Toycity的QQ潮玩展之旅，完美收官！',
          date: '2021-05-12',
          detail: 'ToyCity圆满完成了为期3天的第二届【QTX】QQ潮玩展之旅，感谢主办方的大力支持，让ToyCity认识了很多有趣好玩的朋友...',
          butt1: '展会活动',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABADGAAgn7CXggYoktXszgQw9AM4mQI.gif.webp'),
          title: '重磅 | ANGEL BOY开年联名展空降宁波！',
          date: '2021-03-08',
          detail: '3月8日（下周一）-4月6日，鄞州印象城携手酷乐潮玩，带来「万事上好」ANGEL BOY开年联名展',
          butt1: '公司新闻',
          butt2: '展会活动'
        }, {
          img: require('@/assets/image/ABUIABAEGAAgsYauQUojIn1GzCIFzjpCg700x700.png.webp'),
          title: 'TOYCITY携众多原创IP隆重亮相CLE中国国际授权展',
          date: '2020-11-11',
          detail: 'TOYCITY玩具城市一座非凡的玩具之城成年人有一种热爱生活的表达方式——收藏和分享心仪的潮流玩具。 ',
          butt1: '公司新闻',
          butt2: '展会活动'
        }, {
          img: require('@/assets/image/ABUIABACGAAg2itQUo9L3PxQYwgAo47QU700x700.jpg.webp'),
          title: '全国巡游第四站 ▏新品潮玩Laura重磅来袭！（文末送福利）',
          date: '2020-11-11',
          detail: '全国巡游的第四站——上海潮玩造物展 Laura的精彩，将在魔都继续绽放',
          butt1: '公司新闻',
          butt2: '展会活动'
        }, {
          img: require('@/assets/image/ABUIABACGAAg7XkAUohsjiqAUwuAg40AU700x700.jpg.webp'),
          title: '北京潮玩造物展回顾丨深信这个世界五彩缤纷，谁也无法动摇',
          date: '2020-10-28',
          detail: '',
          butt1: '行业资讯',
          butt2: '展会活动'
        }, {
          img: require('@/assets/image/ABUIABACGAAg96XpQUo8yupgQw0A84rwo700x700.jpg.webp'),
          title: 'ChinaJoy展回顾丨线下首秀圆满结束，感谢大家的支持',
          date: '2020-08-18',
          detail: '上一周 ToyCity圆满完成了线下展首秀为期4天的第一届ChinaJoyToyShow感谢主办方的大力支持 让ToyCity得以认识这么多喜欢潮玩的你们还有很多因为其他原因没有办法到场的朋友先给大家回顾一下CJTS2020现场的盛况 CJ...',
          butt1: '行业资讯',
          butt2: '展会活动'
        }, {
          img: require('@/assets/image/ABUIABAEGAAggL2cgUo1pPBhQIw2Q04gQc700x700.png.webp'),
          title: 'Bilibili World X MCTS展会回顾',
          date: '2020-08-18',
          detail: '2020Bilibili World展会现场',
          butt1: '行业资讯',
          butt2: '展会活动'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.imgBox {
  .img {
    display: block;
    width: 100%;
  }
}

ul {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0;

  .item {
    box-sizing: border-box;
    padding: 17.8px;
    margin: 24px 10px 0;
    width: 23.67%;
    //height: 504px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px #ccc;
      transition: all 0.5s;
    }

    &:hover .img {
      transition: all 1s;
      transform: scale(1.2);
    }

    &:hover .title {
      color: #1e50ae;
    }

    &:hover .icon {
      transition: all 0.5s;
      transform: translateX(50%);
    }

    .imgBox {
      overflow: hidden;

      .img {
        display: block;
        width: 100%;
        height: 168.85px;
      }
    }

    .title {
      margin-top: 20px;
      line-height: 24px;
      font-size: 16px;
      color: #000;
    }

    .date {
      display: inline-block;
      margin-top: 9px;
      color: #999;
      font-size: 14px;
    }

    .detail {
      margin-top: 18px;
      line-height: 1.7em;
      font-size: 14px;
      color: #666;
      font-weight: 350;
    }

    .btn-box {
      display: flex;
      justify-content: space-between;
      margin-top: 22px;

      .l {
        display: flex;
      }

      .butt {
        display: inline-block;
        margin-right: 15px;
        padding: 0 8px;
        line-height: 28px;
        border-radius: 5px;
        border: 1px solid #E5E5E5;
        font-size: 12px;
        color: #999;
      }

      .icon {
        display: inline-block;
        line-height: 30px;
        font-size: 24px;
        color: #999;
        margin-right: 10px;
      }
    }
  }
}

</style>
