<template>
  <div>
    <Headers />
    <router-view></router-view>
    <Contentfooter/>
    <Product/>
    <Footer/>
  </div>
</template>

<script>
  import Headers from '@/components/common/headers'
  import Contentfooter from '@/components/common/contentfooter'
  import Product from '@/components/common/product'
  import Footer from '@/components/common/footer'

  export default {
    components: {
      Headers,
      Contentfooter,
      Product,
      Footer
    }
  }
</script>
