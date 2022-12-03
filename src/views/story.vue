<template>
  <div class="story">
    <div class="banner">
      <img class="pic" :src="bannerImg" />
    </div>
    <div class="about" v-for="(about, index) in aboutList" :key="index">
      <div class="title1">{{ about.title1 }}</div>
      <div class="title2">{{ about.title2 }}</div>
      <div class="title3">{{ about.title3 }}</div>
      <div class="detail">{{ about.detail }}</div>
    </div>
    <ul class="about-content">
      <li class="item" v-for="(item, index) in aboutContentList" :key="index">
        <img class="pic" :src="item.img"/>
        <p>{{ item.title }}</p>
        <span>{{ item.sp1 }}</span>
        <span>{{ item.sp2 }}</span>
        <span>{{ item.sp3 }}</span>
      </li>
    </ul>
    <story-content/>
  </div>
</template>

<script>
import StoryContent from '@/components/story/storycontent'

export default {
  components: { StoryContent },
  data () {
    return {
      bannerImg: require('@/assets/image/ABUIABACGAAg4ZWf9QUozJOWogMwgA842AQ.jpg'),
      aboutList: [
        {
          title1: 'ABOUT TOYCITY',
          title2: '【品牌介绍】',
          title3: '——',
          detail: 'ToyCity玩具城市是一家中国原创潮流IP孵化平台，致力于让中国原创潮流文化从中国走出国门，通过潮玩文化传递“创造快乐，分享快乐”品牌理念；同时以潮玩IP为载体，融入当地城市文化，为城市打造潮流IP新地标；同时开创ATS潮玩空间，结合潮玩主题美陈，携手商业中心拓展新场景，塑造潮流主题商业中心新业态。重塑Z世代精神消费。'
        }
      ],
      aboutContentList: [
        {
          img: require('@/assets/image/ABUIABAEGAAgpNmo9QUo7OviQQwsAk4sAk.png.webp'),
          title: '使命',
          sp1: '用心为消费者创造每一份快乐',
          sp2: '',
          sp3: ''
        }, {
          img: require('@/assets/image/ABUIABAEGAAgqdio9QUoKfDsQUwsAk4sAk.png.webp'),
          title: '愿景',
          sp1: '让每个人都能找到属于自己的小确幸',
          sp2: '',
          sp3: ''
        }, {
          img: require('@/assets/image/ABUIABAEGAAghdio9QUooLWHCTCwCTiwCQ.png.webp'),
          title: '定位',
          sp1: '“帮助成年人找到快乐”为己任的年轻潮玩品牌',
          sp2: '',
          sp3: ''
        }, {
          img: require('@/assets/image/ABUIABAEGAAg9deo9QUogJKrlQMwsAk4sAk.png.webp'),
          title: '价值观',
          sp1: '让设计成为一种时尚；',
          sp2: '让设计成为一种艺术；',
          sp3: '让产品成为一种潮流；'
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
