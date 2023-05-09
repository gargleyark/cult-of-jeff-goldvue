<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/"
        ><img
          src="./assets/jeffs/home.png"
          alt="home"
          @mouseover="setHeaderText('home')"
          @mouseleave="setHeaderText()"
      /></router-link>
      <router-link to="/shop"
        ><img
          src="./assets/jeffs/billablejeff.png"
          alt="shop"
          @mouseover="setHeaderText('shop')"
          @mouseleave="setHeaderText()"
      /></router-link>
    </div> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { sort } from "@/helpers/array";
import Footer from "@/components/Footer.vue";

export default {
  name: "Jeff-Goldvue-App",
  components: {
    Footer,
  },
  mounted() {
    const products = [
      {
        img: "merch-shower.jpg",
        name: "TalentHover Goldblum Bath Shower Curtain Waterproof Fabric Shower Curtains",
        price: "$25.01",
        link: "https://www.amazon.com/TalentHover-Goldblum-Curtain-Waterproof-Curtains/dp/B07V3RKDM3",
        stars: 4.5,
        available: true,
      },
      {
        img: "merch-poster.jpeg",
        name: "Jeff Goldblum wine glass",
        price: "$25.00",
        link: "https://www.amazon.com/Custom-Creations-by-Danielle-Goldblum/dp/B07CTTWBNC",
        stars: 5,
        available: true,
      },
      {
        img: "merch-cushion.jpg",
        name: "Jeff Goldblum Sexy Pullover Hoodie Adult/Children Puzzle 500 Pieces",
        price: "$16.67",
        link: "https://www.amazon.com/Goldblum-Pullover-Children-Landscape-Picture/dp/B09C1HNXQG",
        stars: 3.5,
        available: true,
      },
      {
        img: "merch-hat.jpg",
        name: "THE GEARY STOP Jeff Goldblum - 18X24 Poster",
        price: "$22.88",
        link: "https://www.amazon.com/GEARY-STOP-Jeff-Goldblum-GGG337737/dp/B09HFXZ563",
        stars: 0,
        available: true,
      },
    ];
    const jeffs = [
      {
        img: "badlydrawnjeff.png",
        name: "badlydrawnjeff",
      },
      {
        img: "jeffjeff.png",
        name: "jeffjeff",
      },
      {
        img: "bicyclejeff.png",
        name: "bicyclejeff",
      },
      {
        img: "jeffjobs.png",
        name: "jeffjobs",
      },
      {
        img: "billablejeff.png",
        name: "billablejeff",
      },
      {
        img: "jeffolantern.gif",
        name: "jeffolantern",
      },
      {
        img: "cerialjeff.png",
        name: "cerialjeff",
      },
      {
        img: "millenialjeff.png",
        name: "millenialjeff",
      },
      {
        img: "clockjeff.png",
        name: "clockjeff",
      },
      {
        img: "partyjeff.png",
        name: "partyjeff",
      },
      {
        img: "copjeff.png",
        name: "copjeff",
      },
      {
        img: "realjeff.png",
        name: "realjeff",
      },
      {
        img: "countjeffula.png",
        name: "countjeffula",
      },
      {
        img: "sadjeff.png",
        name: "sadjeff",
      },
      {
        img: "downwardstrendingjeff.png",
        name: "downwardstrendingjeff",
      },
      {
        img: "skelijeff.png",
        name: "skelijeff",
      },
      {
        img: "dramaticjeff.png",
        name: "dramaticjeff",
      },
      {
        img: "spookyjeff.png",
        name: "spookyjeff",
      },
      {
        img: "firemanjeff.png",
        name: "firemanjeff",
      },
      {
        img: "texasjeff.png",
        name: "texasjeff",
      },
      {
        img: "frankenjeff.png",
        name: "frankenjeff",
      },
      {
        img: "thornberryjeff.png",
        name: "thornberryjeff",
      },
      {
        img: "friarmanjeff.png",
        name: "friarmanjeff",
      },
      {
        img: "tremendousjeff.png",
        name: "tremendousjeff",
      },
      {
        img: "graveljeff.png",
        name: "graveljeff",
      },
      {
        img: "tumblejeff.png",
        name: "tumblejeff",
      },
      {
        img: "invisijeff.png",
        name: "invisijeff",
      },
      {
        img: "tumnusjeff.png",
        name: "tumnusjeff",
      },
      {
        img: "jeff.png",
        name: "jeff",
      },
      {
        img: "wiseoldjeff.png",
        name: "wiseoldjeff",
      },
      {
        img: "jefffromhome.png",
        name: "jefffromhome",
      },
      {
        img: "trophyjeff.png",
        name: "trophyjeff",
      },
      {
        img: "paintyjeff.png",
        name: "paintyjeff",
      },
      {
        img: "jeffwiseau.png",
        name: "jeffwiseau",
      },
      {
        img: "braveheartjeff.png",
        name: "braveheartjeff",
      },
      {
        img: "boatjeff.png",
        name: "boatjeff",
      },
      {
        img: "gravyboatjeff.png",
        name: "gravyboatjeff",
      },
      {
        img: "gravyboatboatjeff.png",
        name: "gravyboatboatjeff",
      },
      {
        img: "coastguardjeff.png",
        name: "coastguardjeff",
      },
      {
        img: "jeff-with-peas.png",
        name: "jeff-with-peas",
      },
      {
        img: "pooljeff.png",
        name: "pooljeff",
      },
      {
        img: "britishjeff.png",
        name: "britishjeff",
      },
    ];

    this.updateProducts(products);
    jeffs.sort((a, b) => sort(a, b, "name"));

    this.updateJeffs(jeffs);
  },
  methods: {
    ...mapMutations(["updateProducts", "updateJeffs", "setHeaderText"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato|Slabo+27px");

html {
  font-family: "Lato", sans-serif;
  text-align: center;
}

body {
  margin: 0px;
}

a {
  text-decoration: none;
}

h1,
h2 {
  font-family: "Slabo 27px", serif;
}

#nav {
  padding: 15px;

  @media screen and (min-width: 710px) {
    padding: 30px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    text-decoration: underline;
    margin: 0px 10px;
    padding: 0px 10px;

    &.router-link-exact-active {
      color: #42b983;
    }

    img {
      width: 40px;
      height: auto;

      @media screen and (min-width: 710px) {
        width: 60px;
      }
    }
  }
}

@media screen and (min-width: 710px) {
  .mobile {
    display: none;
  }
}
</style>
