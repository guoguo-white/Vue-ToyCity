import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import('@/views/index')

const Home = () => import('@/views/home')
const Story = () => import('@/views/story')

// News
const News = () => import('@/views/news')
const NewsExhibition = () => import('@/components/news/newsExhibition')
const NewsTopnew = () => import('@/components/news/newsTopnew')
const NewsIp = () => import('@/components/news/newsIp')
const NewsWawa = () => import('@/components/news/newsWawa')

// Product
const Product = () => import('@/views/product')
const ProductTideplay = () => import('@/components/products/productsTideplay')
const ProductBlindbox = () => import('@/components/products/productsBlindbox')
const ProductInspect = () => import('@/components/products/productsInspect')

// product 下三级菜单
const ProductStandard = () => import('@/components/products/productStandard')
const ProductMini = () => import('@/components/products/mini')
const ProductBjd = () => import('@/components/products/bjd')
const ProductKey = () => import('@/components/products/key')
const ProductBrand = () => import('@/components/products/brand')

// Cooperation
const Cooperation = () => import('@/views/cooperation')
const CooperationOffline = () => import('@/components/cooperation/cooperationOffline')

// Contact
const Contact = () => import('@/views/contact')
const ContactTaobao = () => import('@/components/contact/contactTaobao')
const ContactRecruit = () => import('@/components/contact/contactRecruit')
const ContactUs = () => import('@/components/contact/contactUs')

// Test
const Test = () => import('@/views/test')
const TestTwo = () => import('@/components/test/two')
const TestThree = () => import('@/components/test/three')

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }, {
        path: '/story',
        component: Story
      }, {
        path: '/news',
        component: News
      }, {
        path: '/product',
        component: Product
      }, {
        path: '/cooperation',
        component: Cooperation
      }, {
        path: '/contact',
        component: Contact
      },
      // product
      {
        path: '/product/standard',
        component: ProductStandard
      }, {
        path: '/product/mini',
        component: ProductMini
      }, {
        path: '/product/bjd',
        component: ProductBjd
      }, {
        path: '/product/key',
        component: ProductKey
      }, {
        path: '/product/brand',
        component: ProductBrand
      }
    ]
  },
  {
    path: '/second',
    component: () => import('@/views/second'),
    children: [
      // news
      {
        path: '/news/exhibition',
        component: NewsExhibition
      }, {
        path: '/news/topnew',
        component: NewsTopnew
      }, {
        path: '/news/ip',
        component: NewsIp
      }, {
        path: '/news/wawa',
        component: NewsWawa
      },
      // product
      {
        path: '/product/tideplay',
        component: ProductTideplay
      }, {
        path: '/product/blindbox',
        component: ProductBlindbox
      }, {
        path: '/product/inspect',
        component: ProductInspect
      },
      // cooperation
      {
        path: '/cooperation/offline',
        component: CooperationOffline
      },
      // contact
      {
        path: '/contact/taobao',
        component: ContactTaobao
      }, {
        path: '/contact/recruit',
        component: ContactRecruit
      }, {
        path: '/contact/us',
        component: ContactUs
      }
    ]
  }, {
    path: '/test',
    component: Test,
    children: [
      {
        path: 'two',
        component: TestTwo
      }, {
        path: 'three',
        component: TestThree
      }
    ]
  }
]

// const routes = [
//   {
//     path: '/',
//     component: Home
//   }, {
//     path: '/story',
//     component: Story
//   }, {
//     path: '/news',
//     component: News,
//     children: [
//       {
//         path: 'exhibition',
//         component: NewsExhibition
//       }, {
//         path: 'topnew',
//         component: NewsTopnew
//       }, {
//         path: 'ip',
//         component: NewsIp
//       }, {
//         path: 'wawa',
//         component: NewsWawa
//       }
//     ]
//   }, {
//     path: '/product',
//     component: Product,
//     children: [
//       {
//         path: 'tideplay',
//         component: ProductTideplay
//       }, {
//         path: 'blindbox',
//         component: ProductBlindbox
//       }, {
//         path: 'inspect',
//         component: ProductInspect
//       }
//     ]
//   }, {
//     path: '/cooperation',
//     component: Cooperation,
//     children: [
//       {
//         path: 'offline',
//         component: CooperationOffline
//       }
//     ]
//   }, {
//     path: '/contact',
//     component: Contact,
//     children: [
//       {
//         path: 'taobao',
//         component: ContactTaobao
//       }, {
//         path: 'recruit',
//         component: ContactRecruit
//       }, {
//         path: 'us',
//         component: ContactUs
//       }
//     ]
//   },
//   {
//     path: '/test',
//     component: Test,
//     children: [
//       {
//         path: 'two',
//         component: TestTwo
//       },
//       {
//         path: 'three',
//         component: TestThree
//       }
//     ]
//   }
//
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
