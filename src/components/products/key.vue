<template>
  <div>
    <ul class="top">
      <li class="item" v-for="item in imgList" :key="item.title">
        <img class="pic" :src="item.img"/>
        <div class="box">
          <span class="title">{{ item.title }}</span>
          <span class="btn">{{ item.btn }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          img: require('@/assets/image/ABUIABACGAAghojA9QUondiQlgEwgA842AQ.jpg'),
          title: '钥匙扣盲盒'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;

    .pic {
      display: block;
      width: 100%;
      height: 470px;
    }

    .box {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 12%;
      transform: translateY(-50%);

      .title {
        font-size: 36px;
        cursor: pointer;
      }
    }
  }
}

</style>
