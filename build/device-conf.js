// 设备清单
var chalk = require('chalk')

var deviceList = [
  'pc',
  'mobile',
  'app'
]

// 检测是否在输入的参数是否在允许的list中
var checkDevice = function () {
  var device = process.env.DEVICE_ENV
  var result = false
  for(var i in deviceList){
    if(device === deviceList[i]){
      result = device
      break
    }
  }
  if(result === false){
    console.log(chalk.bgRed('参数错误，允许的参数为：'))
    console.log(chalk.bgRed(deviceList.toString()))
  }
  return result
}

exports.deviceList = deviceList
exports.checkDevice = checkDevice
// 其他依赖
exports.polyfills = ['babel-polyfill']
