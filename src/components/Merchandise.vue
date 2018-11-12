<template>
  <div class="merchandise">
    <h2>Now available on merchandise</h2>
      <Product v-for="(product, index) in products" v-if="index < 2 || !isHomepage" :key="index"  :product="product"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Product from './Product.vue';

  export default {
    name: 'merchandise',
    props: {
      isHomepage: Boolean,
    },
    computed: {
      ...mapState(['products'])
    },
    components: {
      Product,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .merchandise {
    width: 100%;
    margin: auto;

    @media only screen and (min-width: 710px) {
      width: 500px;
      margin: auto;
    }
  }

  .merchandise h2 {
    font-size: 32px;
    padding-top: 15px;

    @media only screen and (min-width: 710px) {
      font-size: 24px;
    }
  }
</style>
