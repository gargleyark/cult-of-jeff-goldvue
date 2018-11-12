<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="./assets/jeffs/home.png" alt="home" @mouseover="setHeaderText('home')" @mouseleave="setHeaderText()"/></router-link>
      <router-link to="/shop"><img src="./assets/jeffs/billablejeff.png" alt="shop" @mouseover="setHeaderText('shop')" @mouseleave="setHeaderText()"/></router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  import { sort } from '@/helpers/array'
  import Footer from '@/components/Footer.vue'

  export default {
    "name": "Jeff-Goldvue-App",
    components: {
      Footer
    },
    mounted() {
      const data = [
        {
          "img": "merch-shower.jpg",
          "name": "Jeff Goldblum Custom Waterproof Shower Curtain",
          "price": "$19.55",
          "link": "https://www.amazon.com/Goldblum-Waterproof-Curtain-Curtains-LiangZP/dp/B01N3PNZDI",
          "stars": 4.5,
          "available": false
        },
        {
          "img": "merch-cushion.jpg",
          "name": "Dramatic Fade Resistant Jeff Goldblum Pillow Case",
          "price": "$12.03",
          "link": "https://www.amazon.com/40x60cm-pillow-Polyester-resistant-Goldblum/dp/B017K8IIDA",
          "stars": 3.5,
          "available": true
        },
        {
          "img": "merch-hat.jpg",
          "name": "Special Edition Jeff Goldblum Cap",
          "price": "£13.99",
          "link": "https://www.amazon.co.uk/Printed-Baseball-tsnapback-Praise-Goldblum/dp/B07K5VLTFS",
          "stars": 0,
          "available": true
        },
        {
          "img": "merch-poster.jpeg",
          "name": "Normal Size Silk Print Poster",
          "price": "€14,14",
          "link": "https://www.amazon.fr/Goldblum-24inch-36inch-Print-Poster/dp/B07C7QGRJG",
          "stars": 2,
          "available": true
        }
      ]
      const data1 = [
        {
          "img": 'badlydrawnjeff.png',
          "name": 'badlydrawnjeff'
        },
        {
          "img": 'jeffjeff.png',
          "name": 'jeffjeff'
        },
        {
          "img": 'bicyclejeff.png',
          "name": 'bicyclejeff'
        },
        {
          "img": 'jeffjobs.png',
          "name": 'jeffjobs'
        },
        {
          "img": 'billablejeff.png',
          "name": 'billablejeff'
        },
        {
          "img": 'jeffolantern.gif',
          "name": 'jeffolantern'
        },
        {
          "img": 'cerialjeff.png',
          "name": 'cerialjeff'
        },
        {
          "img": 'millenialjeff.png',
          "name": 'millenialjeff'
        },
        {
          "img": 'clockjeff.png',
          "name": 'clockjeff'
        },
        {
          "img": 'partyjeff.png',
          "name": 'partyjeff'
        },
        {
          "img": 'copjeff.png',
          "name": 'copjeff'
        },
        {
          "img": 'realjeff.png',
          "name": 'realjeff'
        },
        {
          "img": 'countjeffula.png',
          "name": 'countjeffula'
        },
        {
          "img": 'sadjeff.png',
          "name": 'sadjeff'
        },
        {
          "img": 'downwardstrendingjeff.png',
          "name": 'downwardstrendingjeff'
        },
        {
          "img": 'skelijeff.png',
          "name": 'skelijeff'
        },
        {
          "img": 'dramaticjeff.png',
          "name": 'dramaticjeff'
        },
        {
          "img": 'spookyjeff.png',
          "name": 'spookyjeff'
        },
        {
          "img": 'firemanjeff.png',
          "name": 'firemanjeff'
        },
        {
          "img": 'texasjeff.png',
          "name": 'texasjeff'
        },
        {
          "img": 'frankenjeff.png',
          "name": 'frankenjeff'
        },
        {
          "img": 'thornberryjeff.png',
          "name": 'thornberryjeff'
        },
        {
          "img": 'friarmanjeff.png',
          "name": 'friarmanjeff'
        },
        {
          "img": 'tremendousjeff.png',
          "name": 'tremendousjeff'
        },
        {
          "img": 'graveljeff.png',
          "name": 'graveljeff'
        },
        {
          "img": 'tumblejeff.png',
          "name": 'tumblejeff'
        },
        {
          "img": 'invisijeff.png',
          "name": 'invisijeff'
        },
        {
          "img": 'tumnusjeff.png',
          "name": 'tumnusjeff'
        },
        {
          "img": 'jeff.png',
          "name": 'jeff'
        },
        {
          "img": 'wiseoldjeff.png',
          "name": 'wiseoldjeff'
        }
      ]
      // fetch('products')
      //   .then(response => response.json())
      //   .then(data => {
          this.updateProducts(data);
      //   });
      // fetch('jeffs')
      //   .then(response => response.json())
      //   .then(data => {
          data1.sort((a, b) => sort(a, b, 'name'))
          this.updateJeffs(data1);
        // });
    },
    methods: {
      ...mapMutations(['updateProducts', 'updateJeffs', 'setHeaderText'])
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato|Slabo+27px');

  html {
    font-family: 'Lato', sans-serif;
    text-align: center;
  }

  body {
    margin: 0px;
  }

  a {
    text-decoration: none;
  }

  h1, h2 {
    font-family: 'Slabo 27px', serif;
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
