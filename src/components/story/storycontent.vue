<template>
  <div class="storycontent">
    <div class="bg1">
      <p class="bg1-title">搜索全世界，寻找、签约、原创优质IP</p>
      <p class="bg1-across">——</p>
      <p class="bg1-detail">TOYCITY玩具城市签约、众创全球数百个优质IP，不断的为您打造更多潮而有趣的潮玩生活</p>
    </div>
    <ul class="module-content">
      <li class="item">
        <div class="left">
          <div class="left-title">原创设计，每一个IP都经过精心设计</div>
          <div class="left-across">——</div>
          <p class="left-detail">从用户喜好出发，匹配全球范围内适宜的设计师，培育三十多位内部设计团队与研发人员，一起精心为你打造大家所喜欢的IP角色，你喜欢的才是潮玩。</p>
        </div>
        <div class="right">
          <img class="pic" src="@/assets/image/ABUIABACGAAg7Mex9wUotMqqgYw3As45AU.jpg.webp"/>
        </div>
      </li>

      <li class="item">
        <div class="left">
          <div class="left-title">签约全球优质IP，甄选众创优质IP</div>
          <div class="left-across">——</div>
          <p class="left-detail">《TOYCITY玩具城市》签约了“Hot Wheel, 火影忍者，WWE，FOX ANIMATION，权力游戏，MY HERO
            ACADEMIA，SANRIO”等等国内外知名IP，在国内外发起联合设计师众创设计用户喜欢的原创IP</p>
        </div>
        <div class="right">
          <img class="pic" src="@/assets/image/ABUIABACGAAg6tKy9wUotseahQMw3As45AU.jpg.webp"/>
        </div>
      </li>
    </ul>
    <div class="bg2">
      <p class="bg2-title">高品质供应链资源：</p>
      <p class="bg2-across">——</p>
      <p class="bg2-detail">供应链资源整合，拥有20余家生产供应链体系。满足生产效率及上市时间的把控。</p>
      <p class="bg2-detail">当前月产能可达300万只玩具。拥有深厚的产品技术沉淀，对潮玩产品具备专业的制造流程，确保开发效率。</p>

    </div>
    <ul class="module-content1">
      <li class="item">
        <div class="padbox">
          <img class="padbox-pic" src="@/assets/image/ABUIABACGAAgzqi9QUojvLSYDCKBTjKAg.jpeg"/>
          <div class="padbox-title">严谨的玩具工程团队</div>
          <p class="padbox-detail">每一款玩具设计背后都由最专业的工程团队分析产品的拆件结构、出模方式、油色涂装等工艺环节力求最大程度还原产品设计的灵魂。</p>
        </div>
      </li>
      <li class="item">
        <div class="padbox">
          <img class="padbox-pic" src="@/assets/image/ABUIABACGAAgsIrA9QUooJXtWTCKBTjKAg.jpg"/>
          <div class="padbox-title">严苛的品质管控团队</div>
          <p class="padbox-detail">每家工厂都有专业人员跟踪每条产线的品质，以高标准出厂，让消费者获得高品质产品。</p>
        </div>
      </li>
    </ul>
    <div class="cool-box">
      <div class="cool-wrapper">
        <div class="cool-tit-title1">OUR PARTNER</div>
        <div class="cool-tit-title2">【合作伙伴】</div>
        <div class="cool-tit-title3">——</div>
      </div>
      <div class="cool-imgbox">
        <img class="cool-img" src="@/assets/image/ABUIABAEGAAgqPb59QUogJTM3QUw7Ao4ggU.png.webp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerImg: require('@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg1 {
  padding: 275.871px 118.023px 196.934px;
  background: url("~@/assets/image/ABUIABACGAAg3N6o9QUoq5bKOTCADzjaBg.jpg") no-repeat;
  background-size: 120%;
  color: #fff;

  .bg1-title {
    margin-top: 15px;
    font-weight: 600;
  }

  .bg1-title, .bg1-across {
    font-size: 30px;
    line-height: 42px;
  }

  .bg1-detail {
    font-size: 16px;
    line-height: 30px;
    margin: 10px 0;
  }
}

.module-content {
  padding: 0 117px 62px 117px;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;

  .item {
    display: flex;
    background: #fff;

    &:first-child .right {
      padding-top: 0;
    }

    .left {
      width: 50%;
      color: #333;
      padding: 0 42px;
      box-sizing: border-box;

      .left-title {
        font-size: 24px;
        line-height: 36px;
        font-weight: 600;
      }

      .left-across {
        font-size: 16px;
        line-height: 24px;
        color: #1f87e8;
        margin-bottom: 48px;
      }

      .left-detail {
        font-size: 18px;
        line-height: 1.7em;
      }
    }

    .right {
      width: 47%;
      padding: 40px 0;
      box-sizing: border-box;

      .pic {
        display: block;
        width: 100%;
      }
    }
  }
}

.bg2 {
  padding: 275.871px 118.023px 196.934px;
  background: url("~@/assets/image/ABUIABACGAAgtKo9QUoz4K9uQEwgA84pAY.jpeg") no-repeat;
  background-size: 120%;
  color: #fff;

  .bg2-title {
    margin-top: 15px;
    font-weight: 600;
  }

  .bg2-title, .bg2-across {
    font-size: 30px;
    line-height: 42px;
  }

  .bg2-detail {
    font-size: 16px;
    line-height: 30px;
    margin: 10px 0;
  }
}

.module-content1 {
  display: flex;
  padding: 0 117px 62px 117px;
  background: #f7f7f7;

  .item {
    width: 50%;
    padding: 15.5px 47.2px 39px;
    background: #fff;

    .padbox {
      display: flex;
      flex-direction: column;
      padding: 16px;

      .padbox-pic {
        display: block;
        width: 100%;
      }

      .padbox-title {
        font-size: 20px;
        font-weight: 600;
        margin: 20px 0;
      }

      .padbox-detail {
        font-size: 16px;
        line-height: 1.5em;
        margin-top: 20px;
      }
    }
  }
}

.cool-box {
  text-align: center;
  .cool-wrapper {
    padding: 40px 0;
    .cool-tit-title1 {
      font-size: 48px;
      font-weight: 600;
      line-height: 72px;
    }
    .cool-tit-title2 {
      font-size: 24px;
      line-height: 36px;
    }
    .cool-tit-title3 {
      font-size: 20px;
      color: #1f87e8;
      line-height: 45px;
    }
  }
  .cool-imgbox {
    width: 55%;
    margin: 0 auto;
    padding-bottom: 62px;
    .cool-img {
      display: block;
      width: 100%;
    }
  }

}

</style>
