<template>
  <div class="news">
    <div class="imgBox">
      <img class="img" :src="imgUrl"/>
      <div class="spanBox">
        <span class="titleEn">Brand information</span>
        <span class="title">品牌资讯</span>
      </div>
    </div>

    <ul class="list">
      <li class="item" v-for="item in infoList" :key="item.id">
        <div class="img-box">
          <img class="pic" :src="item.img"/>
        </div>
        <span class="tit">{{ item.title }}</span>
        <span class="date">{{ item.time }}</span>
        <span class="detail" :style="{'display': item.detail ? 'block' : 'none'}">{{ item.detail }}</span>
        <span class="icon_box"><span class="icon iconfont">&#xea66;</span></span>
      </li>
    </ul>

    <div class="button">
      <button class="btn">展开更多<i class="icon iconfont">&#xe625;</i></button>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      imgUrl: require('@/assets/image/ABUIABACGAAgrOp9QUoytbk6wcwgA842AQ.jpeg'),
      infoList: [
        {
          id: 0,
          title: '人人潮玩 | 玩具城市太空舱，轻“潮”出发!',
          time: '2021-08-02',
          detail: '2021 TOYCITY潮玩新品类“玩具城市太空舱”发布会!',
          img: require('@/assets/image/ABUIABACGAAg2ZCeiAYokLKhgQEwuAg44AQ700x700.jpg.webp')
        },
        {
          id: 1,
          title: '给粉丝的一封致歉信!',
          time: '2021-08-02',
          detail: '',
          img: require('@/assets/image/ABUIABACGAAgtNDBhgYotLaqugYwuAg40QM700x700.jpg.webp')
        },
        {
          id: 2,
          title: '火出圈！“LAURA•篮球城市”带你一起360°放肆打卡！',
          time: '2021-05-12',
          detail: '一场集合超大体潮流雕塑、潮玩博物馆X11、“快乐星球”市集的潮玩盛会，等你一起360°放肆打CALL!',
          img: require('@/assets/image/ABUIABACGAAguZbthAYovPvnwQwhAc4ggo700x700.jpg.webp')
        },
        {
          id: 3,
          title: '劳拉第二弹—花卉时装系列盲盒  背后隐藏工匠精神',
          time: '2021-03-27',
          img: require('@/assets/image/ABUIABAEGAAg8dv6ggYoyo300gcw8go4ngc700x700.png.webp'),
          detail: '劳拉第二弹--花卉时装系列盲盒的首发亮相，令无数玩家为之疯狂，其精致的妆容、优雅的帽子、美丽的花瓣裙，无一不让众人惊艳，本系列的Laura妥妥地化身为一名时尚弄潮儿，仿佛她的出现，就是一本行走的时尚杂志。'
        },
        {
          id: 4,
          title: '重磅 | ANGEL BOY开年联名展空降宁波！',
          time: '2021-03-08',
          detail: '3月8日（下周一）-4月6日，鄞州印象城携手酷乐潮玩，带来「万事上好」ANGEL BOY开年联名展',
          img: require('@/assets/image/ABUIABADGAAgn7CXggYoktXszgQw9AM4mQI.gif.webp')
        },
        {
          id: 5,
          title: '牛年元宵，TOYCITY祝你花好月圆！',
          time: '2021-03-08',
          detail: '人月两团圆~',
          img: require('@/assets/image/ABUIABACGAAg7v6WggYowMDf2QMw7gU4vwI700x700.jpg.webp')
        },
        {
          id: 6,
          title: '宠粉福利 | 女神卡惊喜首发，全年新品盲盒免费送！',
          time: '2021-03-08',
          detail: '小程序抽选：已购买女神卡用户中，抽一名送免单权!',
          img: require('@/assets/image/ABUIABACGAAguLOWggYovv7ZmAQwsAk4wM700x700.jpg.webp')
        },
        {
          id: 7,
          title: 'ToyCity机器人商店空降你们的城市啦！',
          time: '2020-12-31',
          detail: 'ToyCity玩具城市线下抽盒机正式入驻各大城市啦！超多热门的盲盒等你来抽，让大家每天都能体验“盲盒纪念日”，赶紧拉上小伙伴们，把它们带回家吧！TOYCITY机器人商店正式上线惊喜活动强势来袭！ · 限时活动上新· ①在任意机器人商店下单满...',
          img: require('@/assets/image/ABUIABACGAAgiO1wUo4IGfAIwoAs4uAg700x700.jpg.webp')
        }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  background: #f5f5f5;
}
.imgBox {
  height: 472px;
  position: relative;

  .img {
    display: block;
    width: 100%;
  }

  .spanBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 30px;
    color: #fff;

    .titleEn, title {
      line-height: 42px;
    }

    .title {
      margin-top: 10px;
    }
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  padding: 78.9px 78.7px 0 78.7px;
  background: #f5f5f5;
  overflow: hidden;

  .item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: start;
    width: 48.5%;
    padding: 32.7px;
    background: #fff;
    font-size: 14px;
    cursor: pointer;
    margin: 24px 10px 0;

    &:hover .img-box .pic {
      transform: scale(1.1);
      transition: all 0.5s;
    }

    &:hover {
      transition: all 0.3s;
      box-shadow: 0 0 10px #ccc;
    }

    &:hover .tit {
      color: #1e50ae;
    }

    .img-box {
      width: 100%;
      height: 310px;
      overflow: hidden;

      .pic {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .tit {
      font-size: 16px;
      margin: 20px 0 9px;
    }

    .date {
      color: #999;
    }

    .detail {
      margin-top: 18px;
      color: #666;
      line-height: 2em;
    }

    .icon_box {
      margin-top: 20px;
      display: flex;
      justify-content: right;

      .icon {
        font-size: 25px;
        color: #999;
        padding-right: 10px;
      }
    }
  }
}

.button {
  margin-top: 10px;
  background: #f5f5f5;
  text-align: center;
  .btn {
    margin: 10px 0 74px;
    width: 160px;
    line-height: 42px;
    font-weight: 400;
    color: #444;
    font-size: 14px;
    background: #f5f5f5;
    border: 1px solid #efefef;
    cursor: pointer;
    .icon {
      font-size: 12px;
      margin-left: 5px;
      vertical-align: middle;
    }
    &:hover {
      color: #fff;
      background: #1e50ae;
      transition: all 0.3s;
    }
  }
}
</style>
