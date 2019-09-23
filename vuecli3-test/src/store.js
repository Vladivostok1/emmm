import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      num :2
  },
  mutations: {
    add(state,num){
      state.count+=num;
    },
    reduce(state,num){
      state.count-=num;
    }
  },getters:{
    sum(state){
      return state.count*state.num;
    }
  },
  actions: {

  }
})
