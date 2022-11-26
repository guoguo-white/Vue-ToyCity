<template>
  <div class="info">
    <Contentfooter/>
    <Product/>
    <Footer/>
  </div>
</template>

<script>
import Contentfooter from '@/components/contentfooter/contentfooter'
import Product from '@/components/product/product'
import Footer from '@/components/footer/footer'

export default {
  components: {
    Contentfooter,
    Product,
    Footer
  }
}
</script>
