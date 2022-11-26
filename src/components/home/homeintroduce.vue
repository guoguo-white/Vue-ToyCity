<template>
  <div class="homeintroduce">
    <div class="container">
      <div class="box-l">
        <img class="pic" src="@/assets/image/ABUIABAEGAAgyt2x9wUooKrGkQQwpRs4kws.png.webp"/>
      </div>
      <div class="box-r">
        <div class="about-top">
          <span style="font-size: 36px; line-height: 36px;">ABOUT  TOYCITY</span>
          <span style="font-size: 30px; line-height: 30px">品牌介绍</span>
          <span style="font-size: 24px; line-height: 24px;">——</span>
        </div>
        <div class="about-centre">
          《TOYCITY玩具城市》是一个以“帮助年轻人创造快乐，分享快乐为己任的年轻潮玩品牌。我们主张让每个人都能找到属于自己的小确幸的生活理念，通过搜罗全球优质IP资源、链接优秀设计师、对接高端品质生产厂家，为广大潮流爱好者打造丰富而有趣的“潮玩”产品。
        </div>
        <span class="about-bottom">了解更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  padding: 10% 10% 3%;
  display: flex;
  background: #000;

  .box-l {
    width: 50%;
    padding-right: 9%;
    box-sizing: border-box;
    overflow: hidden;
    .pic {
      display: block;
      width: 100%;
      cursor: pointer;
      &:hover {
        transform: scale(1.1, 1.1);
        transition: all 0.5s;
      }
    }
  }
  .box-r {
    width: 50%;
    padding-left: 3%;
    box-sizing: border-box;
    .about-top {
      display: flex;
      flex-direction: column;
      span {
        color: #fff;
        margin-bottom: 3%;
      }
    }
    .about-centre {
      margin-top: 5%;
      color: #fff;
      font-size: 16px;
      margin-bottom: 20px;
      line-height: 2.2em;
    }
    .about-bottom {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      padding: 2.5% 4%;
      border: 1px solid #fff;
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>
