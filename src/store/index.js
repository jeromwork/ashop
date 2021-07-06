import Vue from 'vue'
import Vuex from 'vuex'


import Goods from './modules/Goods/Goods'


Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    Goods,
  }
})
// window._ = require('lodash');
