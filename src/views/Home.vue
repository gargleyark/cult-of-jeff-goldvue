<template>
  <article>
    <Header />
    <Intro />
    <div v-if="!jeffs.length">
      <Loader />
    </div>
    <div v-else>
      <Download :mobile="true" />
      <section class="content">
        <div class="container">
          <Jeff v-for="jeff in jeffs" :key="jeff.name" :jeff="jeff" />
        </div>
      </section>
      <Download :mobile="false" />
      <Links />
      <Merchandise :isHomepage="true" />
    </div>
  </article>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Merchandise from '@/components/Merchandise.vue'
import Links from '@/components/Links.vue'
import Jeff from '@/components/Jeff.vue'
import Download from '@/components/Download.vue'
import Intro from '@/components/Intro.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Cult-of-Jeff-Goldvue',
  components: {
    Header,
    Footer,
    Merchandise,
    Links,
    Download,
    Intro,
    Jeff,
    Loader,
  },
  computed: {
    ...mapState(['jeffs']),
  },
}
</script>

<style scoped lang="scss">
.content {
  margin: auto;
  text-align: center;
  margin-top: 50px;
  width: 90%;
  border-left: 3px solid #f50;
  border-right: 3px solid #0f5;
  transition: width 0.5s;
  @media screen and (min-width: 710px) {
    width: 500px;
    position: relative;

    &:hover {
      width: 700px;
    }
  }
}

.content .container {
  width: 90%;
  margin: auto;

  @media screen and (min-width: 710px) {
    width: 500px;
    height: 360px;
  }
}
</style>
