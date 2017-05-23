/*
* 这里是pc的home这个模块的api
* */

import Vue from 'vue'
import vueResource from 'vue-resource'

// 引入中间件
import {SET_AUTHORIZATION} from './middleware'
// 引入配置端口
import {ROOT_HOST_NAME} from './../../../config'

Vue.use(vueResource)
Vue.http.options.crossOrigin = true

// 使用根级别的中间件
Vue.http.interceptors.push(SET_AUTHORIZATION)

// 输出方法
export const HOME_API_COUNT = function (params, options = {}) {
  return Vue.http.get(ROOT_HOST_NAME + '/count', {
    params: params,
    ...options
  })
}
