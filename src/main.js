import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  watch: {
    $route(to, from) {
      window.gtag('event', 'pageview', { value: to })
    },
  },
}).$mount('#app')
