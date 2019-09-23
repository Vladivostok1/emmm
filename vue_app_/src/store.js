import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color:"red",
    title:"电影",
  },
  mutations: {
    change(state,[color,title]){
      state.title = title;
      state.color = color;
    },

  },
  actions: {

  },
});
