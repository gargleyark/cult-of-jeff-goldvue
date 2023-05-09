<template>
  <div class="header">
    <img src="../assets/jeffs/jeff.png" />
    <img src="../assets/jeffs/jeffjobs.png" />
    <div>{{ headerText }}</div>
    <img src="../assets/jeffs/copjeff.png" />
    <img src="../assets/jeffs/firemanjeff.png" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "page-header",
  computed: {
    ...mapState(["headerText"]),
  },
};
</script>

<style scoped lang="css">
.header {
  font-family: "Slabo 27px", serif;
  font-size: 32px;
  width: 100%;
  margin: auto;
  border-top: 1px solid #bbb;
  padding-bottom: 10px;
  margin-bottom: 10px;
  padding-top: 20px;
}

@media screen and (min-width: 710px) {
  .header {
    width: 500px;
  }
}

.header div {
  margin: 30px;
  display: inline;
}

.header img {
  display: none;

  @media screen and (min-width: 710px) {
    display: inline;
    width: 35px;
    height: auto;
  }
}
</style>
