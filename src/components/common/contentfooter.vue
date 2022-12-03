<template>
  <div class="contentfooter">
    <div class="container">
      <div class="contfooter-left">
        <p class="tit-box">TOYCITY玩具超市</p>
        <div class="info-box">
          <div class="img-box" v-for="(item, index) in imgList" :key="index">
            <img :src="item.url"/>
          </div>
        </div>
      </div>
      <div class="contfooter-center">
        <div class="one">
          <div class="col-title">
            <span>关于TOYCITY</span>
            <span>——</span>
          </div>
          <span>品牌故事</span>
          <span>品牌资讯</span>
          <span>联系我们</span>
        </div>
        <div class="two">
          <div class="col-title">
            <span>服务合作</span>
            <span>——</span>
          </div>
          <span>商务合作</span>
          <span>人才招聘</span>
          <span>联系我们</span>
        </div>
        <div class="three">
          <div class="col-title">
            <span>产品展示</span>
            <span>——</span>
          </div>
          <span>标准盲盒系列</span>
          <span>迷你盲盒系列</span>
          <span>钥匙扣盲盒系列</span>
          <span>BJD盲盒系列</span>
        </div>
      </div>
      <div class="contfooter-right">
        <div class="col-title">
          <span>联系我们</span>
          <span>——</span>
        </div>
        <div class="phone_and_date">
          <span class="phone">4008088330 <span class="date">（9：00-18：30）</span></span>
        </div>
        <span class="btn">在线客服</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {
          url: require('@/assets/image/ABUIABAEGAAgi4yK9QUouKnD3wIwLTgt.png')
        }, {
          url: require('@/assets/image/ABUIABAEGAAgi4yK9QUouKnD3wIwLTgt.png')
        }, {
          url: require('@/assets/image/ABUIABAEGAAgi4yK9QUouKnD3wIwLTgt.png')
        }, {
          url: require('@/assets/image/ABUIABAEGAAgi4yK9QUouKnD3wIwLTgt.png')
        }, {
          url: require('@/assets/image/ABUIABAEGAAgi4yK9QUouKnD3wIwLTgt.png')
        }, {
          url: require('@/assets/image/ABUIABAEGAAgi4yK9QUouKnD3wIwLTgt.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  //padding: 47.1991px 78.6797px;
  padding: 2.1% 2.25%;
  background: #1b1b1b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .contfooter-left {
    width: 30%;
    padding: 5.7% 5.7% 5.7% 3%;
    border-right: 1px solid #4b4b4b;
    box-sizing: border-box;

    .tit-box {
      font-size: 30px;
      color: #fff;
      font-weight: 600;
    }

    .info-box {
      display: flex;
      margin-top: 23px;

      .img-box {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        cursor: pointer;

        img {
          display: block;
          width: 100%;
        }
      }
    }
  }

  .contfooter-center {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 40%;
    padding: 1.2%;
    border-right: 1px solid #4b4b4b;
    color: #a9a9a9;
    overflow: hidden;

    .one .col-title, .two .col-title, .three .col-title {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      margin-bottom: 20px;

      span {
        font-size: 16px;
      }
    }

    .two .col-title {
      margin-bottom: 50% !important;
    }

    .one, .two, .three {
      display: flex;
      flex-direction: column;
      margin: 5%;

      span {
        display: block;
        margin: 7% 0;
        font-size: 14px;
      }
    }
  }

  .contfooter-right {
    width: 30%;
    padding: 3.2% 3%;
    box-sizing: border-box;
    .col-title {
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        font-size: 16px;
        line-height: 30px;
        color: #a9a9a9;
      }
    }
    .phone_and_date {
      margin-top: 8%;
      .phone {
        font-size: 20px;
        line-height: 30px;
        .date {
          font-size: 14px;
          color: #dedede;
          margin-left: 9%;
        }
      }
    }
    .btn {
      display: inline-block;
      border-radius: 20px;
      border: 1px solid #fff;
      padding: 3.5% 6%;
      margin-top: 10%;
    }
  }
}
</style>
