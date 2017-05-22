// 这里写home这个模块的 store
import * as homeTypes from './../../types/home'
import * as rootTypes from './../../types/root'

export default {
  state: {
    [homeTypes.HOME_S_AUTH]: ''
  },
  getters: {
    [homeTypes.HOME_G_AUTH]: (states) => {
      return states[homeTypes.HOME_S_AUTH]
    }
  },
  mutations: {
    [homeTypes.HOME_M_AUTH]: (states, payload) => {
      states[homeTypes.HOME_S_AUTH] = payload.auth
    }
  },
  actions: {
    [homeTypes.HOME_A_ROOT_COUNT]: ({commit}) => {
      return commit({
        type: rootTypes.ROOT_M_INCREMENT,
        add: 3
      })
    }
  }
}
