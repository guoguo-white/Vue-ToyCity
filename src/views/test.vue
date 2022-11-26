<template>
  <div class="test">

    <ul>
      <li>
        <span>1、查看购物车</span>
      </li>

      <li>
        <span>2、填写核对订单信息</span>
      </li>

      <li>
        <span>3、成功提交订单</span>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
ul {
  width: 652px;
  height: 32px;
  display: flex;

  li {
    width: 188px;
    height: 32px;
    text-align: center;
    padding-right: 29px;
    background-color: #ffe8d7;
    background-image: url('https://www.ifabiao.com/theme/ifabiao.com/default/static/image/mycart.gif');
    background-repeat: no-repeat;
    background-position: right -82px;

    span {
      line-height: 32px;
      display: block;
    }

    //&:hover {
    //  background-color: #ed6807;
    //}

    &:nth-child(2) {
      background-color: #ed6807;
    }

    &:last-child {
      background-image: none;
    }
  }
}

</style>
