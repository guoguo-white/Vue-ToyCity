<template>
  <div class="product">
    <ul>
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
  components: {
  },
  data () {
    return {
      imgList: [
        {
          img: require('@/assets/image/ABUIABAEGAAg6Ou9QUoruu0AQwgA84jAY.png.webp'),
          title: '标准盲盒系列',
          btn: '> MORE'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgp8bjAUo8OP0lwIwgA84lgY.jpg.webp'),
          title: '潮玩手办系列',
          btn: '> MORE'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgh4jA9QUowIKkAUwgA84jAY.jpg.webp'),
          title: '迷你盲盒系列',
          btn: '> MORE'
        },
        {
          img: require('@/assets/image/ABUIABACGAAghojA9QUorO6Z9wQwgA84jAY.jpg.webp'),
          title: '钥匙扣盲盒系列',
          btn: '> MORE'
        },
        {
          img: require('@/assets/image/ABUIABACGAAgh4jA9QUovtjojQQwgA84jAY.jpg.webp'),
          title: 'BJD盲盒系列',
          btn: '> MORE'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-direction: column;

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;

    .pic {
      display: block;
    }

    .box {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 30%;
      left: 10%;

      .title {
        font-size: 60px;
        cursor: pointer;
      }

      .btn {
        box-sizing: border-box;
        width: 114px;
        height: 46px;
        line-height: 46px;
        padding: 0 8px;
        margin-top: 20px;
        border: 1px solid #fff;
        border-radius: 10px;
        font-size: 20px;
        color: #fff;
        background: transparent;
        cursor: pointer;
        text-align: center;
        &:hover {
          color: #4b4b4b;
          background: #fff;
          transition: all 0.5s;
        }

      }
    }
  }
}
</style>
