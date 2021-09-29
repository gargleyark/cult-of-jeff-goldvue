<template>
  <div class="download" :class="{ mobile: mobile }">
    <a href="jeffs.zip"> </a>
  </div>
</template>

<script>
export default {
  name: "Download",
  props: {
    mobile: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.download {
  text-align: center;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 80px;

  @media only screen and (min-width: 710px) {
    width: 500px;
  }
}

.download a {
  width: 75%;
  padding: 15px;
  background: #f50;
  transition: background 0.4s, width 0.4s;
  color: #fff;
  font-family: "Slabo 27px", serif;
  border-radius: 10px;
  text-decoration: none;
  display: block;
  margin: auto;
  font-size: 36px;

  @media only screen and (min-width: 710px) {
    width: 170px;
    font-size: 18px;
  }
}

.download a::after {
  content: "Jeff me up";
}

.download a:hover:after {
  content: "Life finds a way.";
}

.download a:hover {
  background: #0f5;
  width: 90%;

  @media only screen and (min-width: 710px) {
    width: 250px;
  }
}
</style>

