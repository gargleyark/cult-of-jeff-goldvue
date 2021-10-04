<template>
  <a class="product" :href="product.available && product.link" :class="{oos: !product.available}">
    <div class="product-name">{{product.name}}</div>
    <img :src="getImgUrl(product.img)" v-bind:alt="product.name"/>
    <div class="product-price">{{product.price}}</div>
  </a>
</template>

<script>
export default {
  name: 'product',
  props: {
    product: Object,
  },
  methods: {
    getImgUrl(src) {
      return require(`../assets/imgs-not-jeffs/${src}`)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product {
    width: 90%;
    margin: 10px;
    display: inline-block;
    color: black;
    opacity: 1;
    transition: opacity 0.4s;
    border-bottom: 3px solid #f50;
    padding-bottom: 30px;
    margin-bottom: 30px;

    @media screen and (min-width: 710px) {
      width: 220px;
      border-bottom: none;
      padding-bottom: 0px;
      margin-bottom: 40px;

      &:hover {
        opacity: 0.7;
      }
    }

    img {
      width: 100%;
    }

    .product-price {
      color: #777;
    }

    .product-name {
      font-size: 24px;

      @media screen and (min-width: 710px) {
        font-size: 16px;
      }
    }

    &.oos {
      color: gray;
      cursor: default;

      &:hover {
        opacity: 1;
      }

      @media screen and (min-width: 710px) {
        position: relative;
      }

      img {
        opacity: 0.5;
        position: relative;
      }

      .product-name:after {
        font-family: 'Slabo 27px', serif;
        content: 'unavailable';
        color: white;
        position: absolute;
        text-align: center;
        width: 96%;
        left: 0px;
        z-index: 1;
        margin-top: 50%;
        font-size: 24px;
        transform: rotate(10deg);
        background: rgba(200,40,40,0.4);
        padding: 2%;

        @media screen and (min-width: 710px) {
          font-size: 20px;
          margin-top: 100px;
        }
      }
    }
  }
</style>

