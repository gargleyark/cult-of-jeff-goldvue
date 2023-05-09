<template>
  <div class="merchandise">
    <h2>Not available on merchandise</h2>
  </div>
</template>

<script>
export default {
  name: "merchandise",
  props: {
    isHomepage: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.merchandise {
  width: 100%;
  margin: auto;
}

@media only screen and (min-width: 710px) {
  .merchandise {
    width: 500px;
    margin: auto;
  }
}

.merchandise h2 {
  font-size: 32px;
  padding-top: 15px;
}

@media only screen and (min-width: 710px) {
  .merchandise h2 {
    font-size: 24px;
  }
}
</style>
