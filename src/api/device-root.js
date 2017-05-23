/**
 * 这里放公用的api
 * 可以被不同的device使用
 */
import Vue from 'vue'
import vueResource from 'vue-resource'

// 引入中间件
import {SET_AUTHORIZATION} from './middleware'
// 引入配置端口
import {ROOT_HOST_NAME} from './../config'

Vue.use(vueResource)
Vue.http.options.crossOrigin = true

// 使用中间件
Vue.http.interceptors.push(SET_AUTHORIZATION)

// 输出方法
export const ROOT_API_GET_AUTH = function (data, options = {}) {
  return Vue.http.post(ROOT_HOST_NAME + '/getAuth', data, {
    ...options
  })
}
