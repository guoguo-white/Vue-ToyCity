<template>
  <div>
    <div class="banner">
      <img class="pic" :src="bannerImg"/>
    </div>

    <div class="order">
      <div class="us">
        <span class="tit">联系我们</span>
        <span class="titUs">contact us</span>
      </div>
      <ul>
        <li class="item" v-for="item in usList" :key="item.title">
          <img class="img" :src="item.img"/>
          <span class="title">{{ item.title }}</span>
          <span class="detail">{{ item.detail }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerImg: require('@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpg'),
      usList: [
        {
          img: require('@/assets/image/AD0Is9qRCRAEGAAg1umN5wUow8L8AEwsAk4sAk.png.webp'),
          title: '地址',
          detail: '广东省东莞市莞城街道莞太路南城段34号9号楼101室'
        },
        {
          img: require('@/assets/image/AD0Is9qRCRAEGAAg4emN5wUotsKpgwEwsAk4sAk.png.webp'),
          title: '电话',
          detail: '4008088330'
        },
        {
          img: require('@/assets/image/AD0Is9qRCRAEGAAg7emN5wUourCr4AUwsAk4sAk.png.webp'),
          title: '邮箱',
          detail: 'toy@toycity.vip.com'
        },
        {
          img: require('@/assets/image/ABUIABAEGAAgiP69QUohJzjmwIwswM48wI.png.webp'),
          title: '联系微信',
          detail: 'toycity001'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  .pic {
    display: block;
    width: 100%;
  }
}

.order {
  padding: 0 200px;

  .us {
    display: flex;
    flex-direction: column;
    padding: 23.5px 0 31px;
    text-align: center;

    .tit {
      line-height: 36px;
      font-size: 24px;
      color: #333;
    }

    .titUs {
      line-height: 30px;
      color: #999;
      font-size: 14px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    .item {
      width: 21.49%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 16px 19.2px;
      padding: 47px 0;
      box-shadow: 0 0 10px #ccc;

      &:last-child img {
        display: block;
        width: 71.5px;
        height: 61px;
      }

      .img {
        display: block;
        width: 62.3px;
        height: 62.3px;
        //width: 26.07%;
        //height: 32.74%;
      }

      .title, .detail {
        line-height: 36px;
        color: #333;
        font-size: 14px;
      }

      .title {
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
}

</style>
