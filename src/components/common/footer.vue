<template>
  <div class="footer">
    <p>Copyright © 2020 TOYCITY玩具城市 All Rights Reserved. 城仕（东莞）文化科技有限公司 版权所有</p>
    <p>技术支持：
      <a href="javascript:;">商巨网络</a><span>|</span>
      <a href="javascript:;">管理登录</a><span>|</span>
      <a href="javascript:;">粤ICP备20028768号</a>
    </p>
    <a href="#" class="icon iconfont">&#xe605;</a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 20px;
  text-align: center;
  background: #1b1b1b;

  .icon {
    display: block;
    z-index: 11;
    padding: 14px;
    border-radius: 5px;
    position: fixed;
    bottom: 7%;
    right: 2%;
    color: #333;
    background: #fff;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0 0 5px #fff;
  }

  p {
    font-size: 12px;
    color: #999;
    margin: 8px 0;

    span {
      margin: 0 5px;
    }

    a {
      color: #999;

      &:hover {
        color: #1e50ae;
      }
    }
  }
}
</style>
