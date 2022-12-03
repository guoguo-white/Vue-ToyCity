<template>
  <div>
    <div class="imgBox">
      <img class="img" src="@/assets/image/ABUIABACGAAgpcXY9gUo8JG0wMwtgc4ywU.jpeg"/>
    </div>
  </div>

  <ul class="list">
    <li class="item" v-for="(item, index) in newsList" :key="index">
      <div class="imgBox">
        <img class="img" :src="item.img" />
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

  <div class="button">
    <button class="btn">展开更多<i class="icon iconfont">&#xe625;</i></button>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      newsList: [
        {
          img: require('@/assets/image/ABUIABACGAAg0aCgAUosJ27kwcwoB84uBc700x700.jpg.webp'),
          title: '12只卡茜猫大合照，你pick哪只?',
          date: '2020-07-10',
          detail: '12只卡茜猫全部解锁完毕，说说你们想要它们身上那个周边吧？小助手真的好喜欢可乐的项链，你们最喜欢谁？超话社区一起讨论吧，听说有机会获得同款周边哦~',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgkoaaAUo4o2DzAQwuAg4gA8700x700.jpg.webp'),
          title: '今日份解锁，软萌的粉红鸡尾酒',
          date: '2020-07-09',
          detail: '卡茜猫夏日饮品系列之今日份解锁粉红鸡尾酒作为蓝色鸡尾酒的孪生妹妹，粉红鸡尾酒的性格跟样子看起来一样—是个一个软萌的女孩子 今天特意穿上了最喜欢的渐变色小裙子，但最怕热的它冰淇淋帽子已经融化了。刚刚高考结束，跟朋友们的狂欢开始了！12款卡茜猫...',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgrK379wUojyK9AIwgC04qBk700x700.jpg.webp'),
          title: '卡茜猫夏日饮品系列-可乐卡茜猫',
          date: '2020-07-03',
          detail: '卡茜猫夏日饮品系列-可乐卡茜猫追求刺激是可乐的日常，最近它又爱上跑酷了每天都会跟它的同道中人一起趁着夜深人静的时候去穿街走巷寻求刺激这样的可乐卡茜猫，你爱了吗！？',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgta7x9wUovIXxsAIw0Bc40Bc700x700.jpg.webp'),
          title: '加点香料的GURORO小鸡炖蘑菇会更好吃哦！',
          date: '2020-07-01',
          detail: '广东人看到小鸡炖蘑菇会不会都忍不住想要加点药材进去？！这样的小鸡炖蘑菇会不会看起来香一点~你看！躺着的屁股也太肉肉了！想上手撸一把吗',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAguvPm9wUo8aarkwUw0Bc40Bc700x700.jpg.webp'),
          title: '雨天，GURORO咕咯咯-叫花鸡的背影真叫人心疼啊',
          date: '2020-06-29',
          detail: '突然的狂风暴雨叫花鸡只好找个临时避雨的地方无奈还是有零散的雨滴飘落在叫花鸡身上叫花鸡的背影真让人心疼啊',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAglum9wUoyJkpgIw0Bc40Bc700x700.jpg.webp'),
          title: 'GURORO美味人生小剧场之咖喱鸡',
          date: '2020-06-29',
          detail: '(*^▽^*)GURORO美味人生小剧场(*^▽^*)梦想成为香水大师的GURORO近日在追求自然的体香它听说东南亚的咖喱散发着一股奇异的香味，决定尝试一下于是它把加入了土豆、胡萝卜的咖喱将自己的身体包裹起来咖喱鸡就这样出现了',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgmuzm9wUot5T82gQw0Bc40Bc700x700.jpg.webp'),
          title: '下雨天可谓是GURORO咕咯咯-荷叶鸡的最爱啦！',
          date: '2020-06-29',
          detail: '池塘边的荷叶鸡下雨天可谓是咕咯咯-荷叶鸡的最爱啦炎热的夏天让它都穿上小肚兜了嗯~清凉一夏~看着池塘里的小蝌蚪游啊游　　　咕咯咯-荷叶鸡都想跳进去了',
          butt1: '萌娃日常',
          butt2: ''
        }, {
          img: require('@/assets/image/ABUIABACGAAgya7m9wUotKCqlQYw0Bc40Bc700x700.jpg.webp'),
          title: '窗边的思考者-GURORO鸡肉卷宝宝',
          date: '2020-06-29',
          detail: '窗边的思考者-鸡肉卷宝宝今天终于有太阳了鸡肉卷宝宝在窗边思考着　　　究竟会是哪位主人来把它领走呢？！',
          butt1: '萌娃日常',
          butt2: ''
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

.button {
  margin-top: 10px;
  background: #fff;
  text-align: center;

  .btn {
    margin: 10px 0 24px;
    width: 160px;
    line-height: 42px;
    font-weight: 400;
    color: #444;
    font-size: 14px;
    background: #fff;
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
