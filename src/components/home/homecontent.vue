<template>
  <div class="homeContent">
    <div class="container">
      <div class="text">
        <h1 class="text-title">创造快乐，分享快乐</h1>
        <span class="text-btn">年轻•就要玩的快乐</span>
      </div>
      <div class="bar">
        <h1 class="bar-title-en">TIDE PLAY NEW</h1>
        <p class="bar-title-cn">潮玩新品</p>
        <span class="bar-icon">——</span>
      </div>
      <div class="showing">
        <div class="showing-l">
          <img :src="pic1"/>
        </div>
        <div class="showing-r">
          <div class="pic1">
            <img :src="pic2"/>
          </div>
          <div class="pic2">
            <img :src="pic3"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hemocontent',
  data () {
    return {
      pic1: require('@/assets/image/ABUIABACGAAgpzSQUosNvWqgYwtgY4lgY.jpg.webp'),
      pic2: require('@/assets/image/ABUIABACGAAgyfRQUogPiMtQEw7gU4mAM.jpg (1).webp'),
      pic3: require('@/assets/image/ABUIABACGAAgtfu8QUouv7SkQQwgA84lgY.jpg.webp')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .text {
    padding: 2% 15% 0;
    text-align: center;

    .text-title {
      width: 100%;
      font-size: 40px;
    }

    .text-btn {
      display: inline-block;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 18px;
      background: #000;
      color: #fff;
      margin-top: 2.4%;
      padding: 1% 1.8%;
      border-radius: 20px;
    }
  }

  .bar {
    padding: 2% 4.2% 0;
    display: flex;
    flex-direction: column;

    .bar-title-en, .bar-title-cn, .bar-icon {
      line-height: 45px;
    }

    .bar-title-en {
      font-size: 30px;
    }

    .bar-title-cn {
      font-size: 24px;
    }

    .bar-icon {
      display: block;
      font-size: 24px;
      color: #1f87e8;
    }
  }

  .showing {
    display: flex;
    padding: 0 4.2%;
    margin-top: 0.7%;
    margin-bottom: 4%;

    img {
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform .5s ease-out;
      }
    }

    .showing-l {
      width: 100%;
      height: 100%;
      margin-right: 0.5%;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
      }
    }

    .showing-r {
      width: 100%;
      height: 100%;

      .pic1 {
        box-sizing: border-box;
        margin-bottom: 1%;
        height: 49%;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
        }
      }

      .pic2 {
        overflow: hidden;
        height: 50%;

        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>
