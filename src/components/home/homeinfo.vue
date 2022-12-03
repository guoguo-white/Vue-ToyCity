<template>
  <div class="homeinfo">
    <div class="container">
      <div class="title">潮而有趣的资讯，就在这里</div>
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
      <div class="more">
        <span class="btn">更多资讯</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
          img: require('@/assets/image/ABUIABACGAAgtNDBhgYotLaqugYwuAg40QM700x700.jpg.webp')
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/variable.scss';

.container {
  padding: 0 6.3%;
  overflow: hidden;
  text-align: center;

  .title {
    padding-top: 4%;
    font-size: 30px;
    color: #333;
  }

  .list {
    display: flex;
    margin-top: 5%;

    .item {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      text-align: start;
      width: 50%;
      padding: 32.7109px;
      background: #fff;
      font-size: 14px;
      cursor: pointer;
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

      &:first-child {
        margin-right: 10px;
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

  .more {
    padding: 2%;
    .btn {
      display: inline-block;
      padding: 1.1% 5.9%;
      border: 1px solid #000;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background: #000;
        color: #fff;
        transition: all 0.3s;
      }
    }
  }
}
</style>
