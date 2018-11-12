import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  plugins: [vuexLocal.plugin],
});
