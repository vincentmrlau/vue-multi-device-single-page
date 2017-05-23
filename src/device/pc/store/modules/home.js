// 这里写home这个模块的 store
import * as homeTypes from './../../types/home'
import * as rootTypes from './../../types/root'

// 引入一个全局的api
import {ROOT_API_GET_AUTH} from './../../../../api/device-root'
// 引入一个属于这个模块的api
import {HOME_API_COUNT} from './../../api/home'
export default {
  state: {
    [homeTypes.HOME_S_AUTH]: '不存在的'
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
    },
    [homeTypes.HOME_A_GET_AUTH]: ({commit}) => {
      console.log('HOME_A_GET_AUTH')
      ROOT_API_GET_AUTH({'TEST': 'BODY_STR'}).then(response => {
        // 请求成功
        console.log('ROOT_API_GET_AUTH done!', response)
        commit({
          type: homeTypes.HOME_M_AUTH,
          auth: response.body.Auth
        })
      }, response => {
        console.log('ROOT_API_GET_AUTH fail!', response)
      })
    },
    [homeTypes.HOME_A_SERVER_COUNT]: ({commit}) => {
      HOME_API_COUNT({'PRAMA_TEST': 'PRAMA1_STR'}).then(response => {
        // 成功
        console.log('HOME_API_COUNT done', response)
        commit({
          type: rootTypes.ROOT_M_INCREMENT,
          add: response.body.count
        })
      }, response => {
        // 失败
        console.log('HOME_API_COUNT fail', response)
      })
    }
  }
}
