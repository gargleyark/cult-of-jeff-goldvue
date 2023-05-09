<template>
  <div class="jeff-container">
    <img :src="getImgUrl(jeff.img)" v-bind:alt="jeff.name" class="jeff-small" />
    <div class="jeff-name">{{ jeff.name }}</div>
  </div>
</template>

<script>
export default {
  name: "jeff",
  props: {
    jeff: Object,
  },
  methods: {
    getImgUrl(src) {
      return require(`../assets/jeffs/${src}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.jeff-container {
  display: inline-block;
  padding: 0px;
}

.jeff-container .jeff-small {
  width: 100px;
  height: auto;
  margin: 10px;
}

.jeff-container .jeff-small:hover {
  -webkit-filter: invert(100%);
}

@media screen and (min-width: 710px) {
  .jeff-container .jeff-name {
    position: absolute;
    opacity: 0;
    top: -20px;
    width: 100%;
    text-align: center;
    left: 0px;
    transition: opacity 0.4s;
  }

  .jeff-container:hover .jeff-name {
    opacity: 1;
  }

  .jeff-container .jeff-small {
    width: 50px;
  }
}
</style>
