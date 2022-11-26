<template>
  <div class="story">
    <Header/>
    <div class="banner">
      <img class="pic" :src="bannerImg"/>
    </div>
    <div class="about">
      <div class="title1">ABOUT TOYCITY</div>
      <div class="title2">【品牌介绍】</div>
      <div class="title3">——</div>
      <div class="detail">
        ToyCity玩具城市是一家中国原创潮流IP孵化平台，致力于让中国原创潮流文化从中国走出国门，通过潮玩文化传递“创造快乐，分享快乐”品牌理念；同时以潮玩IP为载体，融入当地城市文化，为城市打造潮流IP新地标；同时开创ATS潮玩空间，结合潮玩主题美陈，携手商业中心拓展新场景，塑造潮流主题商业中心新业态。重塑Z世代精神消费。
      </div>
    </div>
    <ul class="about-content">
      <li class="item">
        <img class="pic" src="@/assets/image/ABUIABAEGAAgpNmo9QUo7OviQQwsAk4sAk.png.webp"/>
        <p>使命</p>
        <span>用心为消费者创造每一份快乐</span>
      </li>

      <li class="item">
        <img class="pic" src="@/assets/image/ABUIABAEGAAgqdio9QUoKfDsQUwsAk4sAk.png.webp"/>
        <p>愿景</p>
        <span>让每个人都能找到属于自己的小确幸</span>
      </li>

      <li class="item">
        <img class="pic" src="@/assets/image/ABUIABAEGAAghdio9QUooLWHCTCwCTiwCQ.png.webp"/>
        <p>定位</p>
        <span>“帮助成年人找到快乐”为己任的年轻潮玩品牌</span>
      </li>

      <li class="item">
        <img class="pic" src="@/assets/image/ABUIABAEGAAg9deo9QUogJKrlQMwsAk4sAk.png.webp"/>
        <p>价值观</p>
        <span>让设计成为一种时尚；</span>
        <span>让设计成为一种艺术；</span>
        <span>让产品成为一种潮流；</span>
      </li>
    </ul>
    <story-content />
    <Info />
  </div>
</template>

<script>
import Header from '@/components/header/header'
import StoryContent from '@/components/story/storycontent'
import Info from '@/components/info/info'

export default {
  components: { Header, StoryContent, Info },
  data () {
    return {
      // bannerImg: require('@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpeg')
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

.about {
  padding: 78.9365px 236.047px;
  color: #333;

  .title1, .title2, .title3 {
    text-align: center;
  }

  .title2, .title3, .detail {
    font-size: 24px;
  }

  .title1 {
    font-size: 48px;
    margin: 12px 0;
  }

  .title2 {
    line-height: 36px;
  }

  .title3 {
    color: #1f87e8;
    line-height: 36px;
  }

  .detail {
    margin-top: 30px;
    line-height: 2em;
  }
}

.about-content {
  display: flex;
  padding: 32.5511px 189.852px 64.2885px;

  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2b2b2b;
    padding: 0 5px;
    box-sizing: border-box;
    border-right: 1px dotted #dedede;
    text-align: center;

    &:last-child {
      border: none;
    }

    .pic {
      width: 47.52px;
      height: 47.52px;
    }

    p {
      margin-top: 19px;
      line-height: 51px;
      font-size: 20px;
    }

    span {
      line-height: 30px;
      font-size: 14px;
    }
  }
}

</style>
