/**
 * 用于预览打包后的产品的服务器
 */
'use strict'
const express = require('express')
const opn = require('opn')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser())
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

app.post('/getAuth', (req, res, next) => {
  res.json({
    'Auth': 'Vincent-sever-coder',
    'recHeader': req.get('Authorization')
  })
})

app.get('/count', (req, res, next) => {
  res.json({
    count: 10
  })
})

app.listen('3000', () => {
  console.log('listen AT :3000')
  opn('http://localhost:3000/')
})
