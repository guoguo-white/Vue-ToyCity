<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item, index) in newsList" :key="index">
        <div class="imgBox">
          <img class="img" :src="item.img"/>
        </div>
        <p class="title">{{ item.title }}</p>
        <span class="date">{{ item.date }}</span>
        <p class="detail">{{ item.detail }}</p>
        <div class="btn-box">
          <span class="butt">{{ item.butt }}</span>
          <span class="icon iconfont">&#xea66;</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [
        {
          img: require('@/assets/image/ABUIABACGAAgiO1wUo4IGfAIwoAs4uAg700x700.jpg.webp'),
          title: 'ToyCity机器人商店空降你们的城市啦',
          date: '2020-12-31',
          detail: 'ToyCity玩具城市线下抽盒机正式入驻各大城市啦！超多热门的盲盒等你来抽，让大家每天都能体验“盲盒纪念日”，赶紧拉上小伙伴们，把它们带回家吧！TOYCITY机器人商店正式上线惊喜活动强势来袭！ · 限时活动上新· ①在任意机器人商店下单满...',
          butt: '公司新闻'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 24px 0;

  .item {
    box-sizing: border-box;
    padding: 17.8px;
    margin: 0 10px;
    width: 25%;
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
      transition: all 1s;
      transform: tr;
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

      .butt {
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
