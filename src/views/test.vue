<template>
  <div class="test">
    test首页
    <ul>
      <li v-for="item in arrList" :key="item.path">
        <router-link :to="item.path">{{ item.title }}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrList: [
        {
          path: '/test/two',
          title: '跳转2'
        },
        {
          path: '/test/three',
          title: '跳转3'
        }
      ]
    }
  }
}
</script>

<!--<style lang="scss" scoped>-->
<!--ul {-->
<!--  width: 652px;-->
<!--  height: 32px;-->
<!--  display: flex;-->

<!--  li {-->
<!--    width: 188px;-->
<!--    height: 32px;-->
<!--    text-align: center;-->
<!--    padding-right: 29px;-->
<!--    background-color: #ffe8d7;-->
<!--    background-image: url('https://www.ifabiao.com/theme/ifabiao.com/default/static/image/mycart.gif');-->
<!--    background-repeat: no-repeat;-->
<!--    background-position: right -82px;-->

<!--    span {-->
<!--      line-height: 32px;-->
<!--      display: block;-->
<!--    }-->

<!--    //&:hover {-->
<!--    //  background-color: #ed6807;-->
<!--    //}-->

<!--    &:nth-child(2) {-->
<!--      background-color: #ed6807;-->
<!--    }-->

<!--    &:last-child {-->
<!--      background-image: none;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</style>-->
