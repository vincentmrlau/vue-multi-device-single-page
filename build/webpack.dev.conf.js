// 获取device
var device = process.env.DEVICE_ENV

var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 设置设备相关信息引入
var deviceList = require('./device-conf').deviceList
// 其他依赖
var extraPolyfill = require('./device-conf').polyfills || []

// 设置入口
var entry = {}
// 设置html插件模板入口和依赖
var htmlPluginConf = []
for(var x in deviceList){
  // 设置 入口
  entry[deviceList[x]] = extraPolyfill.concat(
    ['./build/dev-client'],
    './src/device/' + deviceList[x] + '/index.js'
  )
  var _htmlPlugin = new HtmlWebpackPlugin({
    filename: deviceList[x]+'/index.html',
    template: './src/device/' + deviceList[x] + '/index.html',
    chunks: [deviceList[x]]
  })
  htmlPluginConf.push(_htmlPlugin)
}




// add hot-reload related code to entry chunks
// 把热重载所需的代码也打包进去
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

// 删除的entry和output
try {
  delete baseWebpackConfig.entry
}catch (e){
  console.log(e)
}
try{
  delete baseWebpackConfig.output
}catch (e){
  console.log(e)
}

module.exports = merge(baseWebpackConfig, {
  // 设置入口
  entry: entry,
  // 设置出口
  output: {
    path: '/',
    filename: '[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: config.dev.htmlTemplate,
    //   inject: true
    // }),
    new FriendlyErrorsPlugin()
  ].concat(htmlPluginConf)
})
