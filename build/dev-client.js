/* eslint-disable */
// 补充浏览器支持的缺陷
require('eventsource-polyfill')
// noInfo:控制台不输出
// reload:webpack卡住的时候刷新浏览器
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

// 当event,action === reload的时候刷新浏览器
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
