require('./check-versions')()

process.env.NODE_ENV = 'production'

var chalk = require('chalk')
// 设置process.env.DEVICE_ENV参数
// 没有则返回错误
var device = process.argv[2]
var checkDevice = require('./device-conf').checkDevice
if(device){
  process.env.DEVICE_ENV = device
  if(!checkDevice()){
    return false
  }
}else {
  console.log(chalk.bgRed('  错误：缺少参数，详情请看readme.md  '))
  return false
}

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')

var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening pc.html over file:// won\'t work.\n'
    ))
  })
})
