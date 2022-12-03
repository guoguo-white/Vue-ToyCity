<template>
  <div>
    <Headers />
    <router-view></router-view>
    <Product/>
    <Footer/>
  </div>
</template>

<script>
  import Headers from '@/components/common/headers'
  import Product from '@/components/common/product'
  import Footer from '@/components/common/footer'

  export default {
    components: {
      Headers,
      Product,
      Footer
    }
  }
</script>
