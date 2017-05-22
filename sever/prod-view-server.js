/**
 * 用于预览打包后的产品的服务器
 */
'use strict'
const express = require('express')
const opn = require('opn')

let app = express()
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use('/',express.static('./dist/'))

app.post('/post', (req, res, next) => {
  res.json({
    'postRes': 'OK'
  })
})

app.listen('3000', () => {
  console.log('listen AT :3000')
  opn('http://localhost:3000/')
})
