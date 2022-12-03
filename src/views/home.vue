<template>
  <div class="home">
    <home-banner/>
    <home-content/>
    <home-introduce/>
    <home-module/>
    <home-product/>
    <home-info/>
  </div>
</template>

<script>
import HomeBanner from '@/components/home/homebanner'
import HomeContent from '@/components/home/homecontent'
import HomeIntroduce from '@/components/home/homeintroduce'
import HomeModule from '@/components/home/homemodule'
import HomeProduct from '@/components/home/homeproduct'
import HomeInfo from '@/components/home/homeinfo'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeContent,
    HomeIntroduce,
    HomeModule,
    HomeProduct,
    HomeInfo
  }
}
</script>
