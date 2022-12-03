<template>
  <div class="contact">
    <div class="imgBox">
      <img class="img" src="@/assets/image/ABUIABACGAAgPGp9QUopaXIvwcwgA842AQ.jpeg"/>
      <div class="spanBox">
        <span class="titleEn">Contact US</span>
        <span class="title">联系我们</span>
      </div>
    </div>

    <div class="info">
      <div class="company">
        <img src="@/assets/image/logo.png" class="logo"/>
        <span class="title">城仕（东莞）文化科技有限公司</span>
        <span class="En1">TOYCITY （DONGGUAN）CULTURE</span>
        <span class="En2">TECHNOLOGY CO. LTD</span>
        <span class="ji">——————————————————————</span>
        <span class="site">地   址：东莞市创意产业园中心园区9栋101</span>
        <span class="site">Email ：toy@toycity.vip</span>
        <span class="site">电   话：0769-28689980</span>
      </div>
      <div class="area"></div>
    </div>

    <div class="message">
      <div class="left">
        <span class="title">您的建议</span>
        <span class="ji">_____________________</span>
        <span class="detail">&ensp;</span>
        <span class="detail">您的建议是我们前进的动力，留下您的联系方式，</span>
        <span class="detail">我们的工作人员会在第一时间处理您的问题。</span>
      </div>
      <div class="right">
        <div class="nameAndMail">
          <div class="nameBox">
            <span class="nameTit">姓名 <span style="color: red">*</span></span>
            <input class="name" type="text" placeholder="请输入姓名"/>
          </div>
          <div class="mailBox">
            <span class="mailTit">邮箱</span>
            <input class="mail" type="text" placeholder="请输入邮箱"/>
          </div>
        </div>
        <div class="phoneBox">
          <span class="phoneTit">电话</span>
          <input class="phone" type="text" placeholder="请输入电话"/>
        </div>
        <div class="detailBox">
          <span class="detailTit">内容</span>
          <textarea class="detail" type="text" maxlength="1000" placeholder="留言需审核才会显示"/>
        </div>
        <button class="button">提交留言</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      titList: [
        {
          imgUrl: require('@/assets/image/ABUIABACGAAgPGp9QUopaXIvwcwgA842AQ.jpeg'),
          titEn: 'Contact US',
          tit: '联系我们'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.imgBox {
  height: 472px;
  position: relative;

  .img {
    display: block;
    width: 100%;
  }

  .spanBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 30px;
    color: #fff;

    .titleEn, title {
      line-height: 42px;
    }

    .title {
      margin-top: 10px;
    }
  }
}

.info {
  display: flex;
  padding: 90px 197.6px 40px;

  .company {
    display: flex;
    flex-direction: column;
    width: 45%;
    padding-right: 5%;
    color: #333;

    .logo {
      display: block;
      width: 222.68px;
      height: 53.86px;
    }

    span {
      display: inline-block;
    }

    .title {
      font-size: 36px;
      line-height: 2em;
    }

    .En1, .En2 {
      font-size: 20px;
      line-height: 35px;
    }

    .ji {
      font-size: 16px;
      color: #d81b43;
    }

    .site {
      line-height: 35px;
      font-size: 16px;
    }
  }

  .area {
    width: 50%;
    height: 320px;
    background: pink;
  }
}

.message {
  margin: 0 197px 40px;
  display: flex;
  border: 1px solid #dedede;

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10% 5% 20%;

    .title {
      line-height: 42px;
      font-size: 30px;
      color: #d81b43;
    }

    .ji {
      color: #a9a9a9;
      font-size: 20px;
      margin-bottom: 8px;
    }

    .detail {
      line-height: 30px;
      color: #777;
      font-size: 18px;
    }

  }

  .right {
    width: 50%;
    padding: 30px 20px;

    .nameBox, .mailBox, .phoneBox, .detailBox {
      display: flex;
      flex-direction: column;
      padding: 0 6px;
      margin-bottom: 20px;
      box-sizing: border-box;
    }

    .nameTit, .mailTit, .phoneTit, .detailTit {
      display: inline-block;
      margin-bottom: 12px;
      line-height: 21px;
      font-size: 14px;
      color: #666;
    }

    .name, .mail, .phone {
      padding-left: 18px;
      width: 214.33px;
      height: 44px;
      line-height: 44px;
      background: #F7F7F7;
      font-size: 13px;
      color: #333;
      border: none;
      outline: none;
    }

    .nameAndMail {
      display: flex;
    }

    .detail {
      width: 481px;
      height: 100px;
      padding: 9px 14px;
      background: #F7F7F7;
      color: #333;
      font-size: 13px;
      border: none;
      outline: none;
      resize: none;
    }

    .button {
      margin-top: 15px;
      width: 300px;
      height: 44px;
      line-height: 44px;
      background: #1e50ae;
      color: #fff;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
}

</style>
