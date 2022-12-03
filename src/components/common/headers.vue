<template>
  <div class="headers">
    <div class="wrapper">
      <div class="container">
        <div class="logo-box">
          <img class="pic" @click="handleIndexClick(0)" :src="logo" />
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
                  :style="{ 'borderBottom': active === index ? '2px solid #1c1f88' : 'none' }"
                >{{ item.title }}</router-link>
                <span class="baffle"></span>
              </div>

              <ul class="two">
                <div class="two-box">
                  <!--clicks-->
                  <span class="space"></span>
                  <li class="two-item" v-for="(item, index) in item.secondList" :key="index">
                    <router-link :to="item.path" class="two-item-title">{{ item.title }}</router-link>

                    <ul class="three">
                      <div class="three-box">
                        <!---->
                        <span class="space"></span>
                        <li class="three-item" v-for="(item, index) in item.ThirdList" :key="index">
                          <router-link :to="item.path" class="three-item-title">{{ item.title }}</router-link>
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
// import { useRouter } from 'vue-router'

import router from '@/router'

export default {
  data () {
    return {
      active: 0,
      logo: require('@/assets/image/logo.png'),
      navList: [
        {
          id: 1,
          title: '首页',
          path: '/home'
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
              title: '展会活动',
              path: '/news/exhibition'
            },
            {
              id: '3-2',
              title: '新品发布',
              path: '/news/topnew'
            },
            {
              id: '3-3',
              title: 'IP活动',
              path: '/news/ip'
            },
            {
              id: '3-4',
              title: '萌娃日常',
              path: '/news/wawa'
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
              title: '潮玩',
              path: '/product/tideplay'
            },
            {
              id: '4-2',
              title: '盲盒系列',
              path: '/product/blindbox',
              ThirdList: [
                {
                  id: '4-2-1',
                  title: '标准盲盒',
                  path: '/product/standard'
                },
                {
                  id: '4-2-1',
                  title: '迷你盲盒',
                  path: '/product/mini'
                },
                {
                  id: '4-2-1',
                  title: 'BJD盲盒',
                  path: '/product/bjd'
                },
                {
                  id: '4-2-1',
                  title: '钥匙扣盲盒',
                  path: '/product/key'
                },
                {
                  id: '4-2-1',
                  title: '品牌联名',
                  path: '/product/brand'
                }
              ]
            },
            {
              id: '4-3',
              title: '产品质检报告',
              path: '/product/inspect'
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
              title: '线下专柜',
              path: '/cooperation/offline'
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
              title: '淘宝旗舰店',
              path: '/contact/taobao'
            },
            {
              id: '6-2',
              title: '人才招聘',
              path: '/contact/recruit'
            },
            {
              id: '6-3',
              title: '联系我们',
              path: '/contact/us'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.active = Number(sessionStorage.getItem('__HEADER_UNDERLINE__')) || 0 // 如果sessionStorage 里面有值就取之前存的，如果没值就给一个默认值
  },
  methods: {
    handleListClick(active) {
      this.active = active
      sessionStorage.setItem('__HEADER_UNDERLINE__', active) // 每次选完后存到 sessionStorage 里面 名字起复杂点，后面可能会重复
    },
    handleIndexClick(active) {
      this.active = active
      router.push('/')
    }
    // handleTwoClick (type) {
    //   this.active = type
    // }
  }
  // setup () {
  //   const router = useRouter()
  //   const handleIndexClick = inde => {
  //     this.active = inde
  //     router.push('/')
  //   }
  //   return { handleIndexClick }
  // }

}
</script>

<style lang="scss" scoped>
.marginBottom {
  margin-bottom: 135px;
}

.wrapper {
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

          .two-item-title {
            display: block;
          }

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

              .three-item-title {
                display: block;
              }

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
