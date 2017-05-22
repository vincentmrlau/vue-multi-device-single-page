var execFileSync = require('child_process').execFileSync;
var path = require('path')
var deviceList = require('./device-conf').deviceList || []

var buildFile = path.join(__dirname, 'build.js')

for( var x in deviceList){
  console.log('building :',deviceList[x])
  execFileSync( 'node', [buildFile, deviceList[x]], {

  })
}

