<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <div class="logo-box">
          <img class="pic" src="@/assets/image/logo.png"/>
        </div>
        <div class="nav">
          <ul>
            <li
              class="item"
              v-for="(item, index) in navList"
              @click="handleListClick(index)"
              :key="item.path"
            >
              <div class="item-box">
                <router-link
                  :to="item.path"
                  class="title"
                  :style="{ 'border-bottom': $route.path === item.path ? '2px solid #1c1f88' : 'none' }"
                >{{ item.title }}
                </router-link>
                <!--                <span></span>-->
                <span class="baffle"></span>
              </div>

              <ul class="two">
                <div class="two-box">
                  <!---->
                  <span class="space"></span>
                  <li class="two-item" v-for="item in item.secondList" :key="item.id">
                    <a class="two-item-title" href="javascript:;">{{ item.title }}</a>
                    <ul class="three">
                      <div class="three-box">
                        <!---->
                        <span class="space"></span>
                        <li class="three-item" v-for="item in item.ThirdList" :key="item.id">
                          <a class="three-item-title" href="javascript:;">{{ item.title }}</a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="marginBottom"></div>
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      active: 0,
      navList: [
        {
          id: 1,
          title: '首页',
          path: '/'
        },
        {
          id: 2,
          title: '品牌故事',
          path: '/story'
        },
        {
          id: 3,
          title: '品牌资讯',
          path: '/news',
          secondList: [
            {
              id: '3-1',
              title: '展会活动'
            },
            {
              id: '3-2',
              title: '新品发布'
            },
            {
              id: '3-3',
              title: 'IP活动'
            },
            {
              id: '3-4',
              title: '萌娃日常'
            }
          ]
        },
        {
          id: 4,
          title: '产品中心',
          path: '/product',
          secondList: [
            {
              id: '4-1',
              title: '潮玩'
            },
            {
              id: '4-2',
              title: '盲盒系列',
              ThirdList: [
                {
                  id: '4-2-1',
                  title: '标准盲盒'
                },
                {
                  id: '4-2-1',
                  title: '迷你盲盒'
                },
                {
                  id: '4-2-1',
                  title: 'BJD盲盒'
                },
                {
                  id: '4-2-1',
                  title: '钥匙扣盲盒'
                },
                {
                  id: '4-2-1',
                  title: '品牌联名'
                }
              ]
            },
            {
              id: '4-3',
              title: '产品质检报告'
            }
          ]
        },
        {
          id: 5,
          title: '商务合作',
          path: '/cooperation',
          secondList: [
            {
              id: '5-1',
              title: '线下专柜'
            }
          ]
        },
        {
          id: 6,
          title: '关于我们',
          path: '/contact',
          secondList: [
            {
              id: '6-1',
              title: '淘宝旗舰店'
            },
            {
              id: '6-2',
              title: '人才招聘'
            },
            {
              id: '6-3',
              title: '联系我们'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleListClick (type) {
      this.active = type
    }
  }
  // setup () {
  //   // const handleListClick = (type) => {
  //   //   this.active = type
  //   // }
  //   return { handleListClick }
  // }
}
</script>

<style lang="scss" scoped>
.marginBottom {
  margin-bottom: 135px;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #FFF;
  z-index: 111;

  .logo-box {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    .pic {
      //width: 16.846%;
      width: 252.18px;
      display: block;
      cursor: pointer;
    }
  }
}

.nav {
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    padding: 17px 0;
    background-color: #fff;

    .item {
      text-align: center;
      position: relative;

      &:last-child .item-box .baffle {
        display: none;
      }

      &:hover .two {
        display: block;
      }

      .item-box {
        display: flex;

        .title {
          box-sizing: border-box;
          display: block;
          min-width: 160px;
          height: 30px;
          line-height: 30px;
          font-size: 16px;

          &:hover {
            border-bottom: 2px solid #1c1f88 !important;
          }
        }

        .baffle {
          width: 2px;
          height: 15px;
          margin: 7.5px 10px 7.5px 10px;
          display: block;
          background: #e6e6e6;
        }
      }

      // 二级导航
      .two {
        width: 160px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 0;
        position: absolute;
        top: 47px;
        box-shadow: 0 0 1px #ccc;
        display: none;

        .two-box {
          position: relative;

          .space {
            position: absolute;
            top: -20px;
            display: block;
            width: 100%;
            height: 20px;
          }
        }

        & .two-item:last-child {
          border: none;
          border-radius: 5px;
        }

        .two-item {
          box-sizing: border-box;
          padding: 0 10px;
          border-bottom: 1px solid #f2f2f2;
          cursor: pointer;
          line-height: 50px;
          font-size: 14px;

          &:hover {
            background: #f7f7f7;
          }

          &:hover .two-item-title {
            color: #1d1f83;
          }

          &:hover .three {
            display: block;
          }

          // 三级导航
          .three {
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            position: absolute;
            top: 51px;
            left: 160px;
            border-radius: 5px;
            z-index: 110;
            padding: 0;
            //margin-left: 5px;
            display: none;

            .three-box {
              position: relative;

              .space {
                position: absolute;
                left: -30px;
                display: block;
                width: 30px;
                height: 100%;
              }
            }

            .three-item {
              padding: 0 10px;
              width: 100px;
              height: 50px;
              border-radius: 5px;

              &:hover {
                background: #f7f7f7;
              }

              &:hover .three-item-title {
                color: #1d1f83;
              }
            }
          }
        }
      }
    }
  }
}

</style>
