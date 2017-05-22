/**
 * 这里存放pc的根级别的 store mutation action 和组装模块并导出
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 引入type
import * as rootTypes from './../types/root'
// 引入模块
import home from './modules/home.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    [rootTypes.ROOT_S_COUNT]: 0
  },
  getters: {
    [rootTypes.ROOT_G_COUNT]: state => state[rootTypes.ROOT_S_COUNT]
  },
  mutations: {
    [rootTypes.ROOT_M_INCREMENT]: (state, payload) => {
      state[rootTypes.ROOT_S_COUNT] += payload.add
    }
  },
  actions: {
    [rootTypes.ROOT_A_INCREMENT]: ({commit}) => {
      commit({
        type: rootTypes.ROOT_M_INCREMENT,
        add: 2
      })
    }
  },
  modules: {
    home
  }
})
