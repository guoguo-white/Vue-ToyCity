<template>
  <div class="home">
    <Header/>
    <home-banner/>
    <home-content/>
    <home-introduce/>
    <home-module/>
    <home-product/>
    <home-info/>
    <Info />
  </div>
</template>

<script>
import Header from '@/components/header/header'
import HomeBanner from '@/components/home/homebanner'
import HomeContent from '@/components/home/homecontent'
import HomeIntroduce from '@/components/home/homeintroduce'
import HomeModule from '@/components/home/homemodule'
import HomeProduct from '@/components/home/homeproduct'
import HomeInfo from '@/components/home/homeinfo'
import Info from '@/components/info/info'

export default {
  name: 'Home',
  components: {
    Header,
    HomeBanner,
    HomeContent,
    HomeIntroduce,
    HomeModule,
    HomeProduct,
    HomeInfo,
    Info
  }
}
</script>
