import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//给定位初始化值
let localcity=localStorage.getItem('cityname')
let cityname=localcity===null ? '广州': localcity 

export default new Vuex.Store({
  state: {
    city:cityname
  },
  mutations: {
    setcityname(state,cityname){
      state.city=cityname
    }
  },
  actions: {
  },
  modules: {
  }
})
