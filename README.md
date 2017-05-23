# vue-multi-device-single-page 

[![vue-cli](https://img.shields.io/badge/vueCli-v2.8.2-orange.svg)](https://cn.vuejs.org/) [![vue 2.0](https://img.shields.io/badge/vue-v2.2.6-green.svg)](https://cn.vuejs.org/) [![vue-resuorce](https://img.shields.io/badge/vueResource-v1.3.3-green.svg)](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md) [![vue-router](https://img.shields.io/badge/vueRouter-v2.3.1-green.svg)](https://cn.vuejs.org/) [![vuex](https://img.shields.io/badge/vuex-v2.3.1-green.svg)](https://cn.vuejs.org/) 

> 多端（默认pc+mobile+app）的单页应用的vue工程目录
> 
> 基于vue,整合了vuex vue-resuorece vue-router
>
> 整个基于vue-cli生成的目录进行修改

##	工具的工作表现
### build 打包
> npm run build 'device'
> device ： 接受的参数，在 `/build/device-conf.js`下有限制

1. 示例： `npm run build pc` 打一个pc端的包 
2. 表现： 
![build-pc示例图](https://github.com/vincentmrlau/vue-multi-device-single-page/blob/master/images/build-pc.png?raw=true)


##	整体目录
    
```
│  .babelrc
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .postcssrc.js
│  index.html
│  npm-debug.log
│  package.json
│  README.md
│  tree.txt
│          
├─build   # 这里是打包工具相关的
│      build-all.js # 通过打包所有端的代码
│      build.js		# 这里设定进程的环境变量
│      check-versions.js
│      dev-client.js  
│      dev-server.js	# 这里也需要对进程的环境变量进行设定
│      device-conf.js	# 这里面有关于多端开发、打包的相关设定
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js		# 修改了入口、出口等
│      webpack.dev.conf.js		# 修改了入口、出口等
│      webpack.prod.conf.js		# 修改了入口出口等
│      webpack.test.conf.js		# 测试相关还未完善
│      
├─config
│      dev.env.js
│      index.js					# 打包的入口和出口
│      prod.env.js
│      test.env.js
│      
├─dist		# 最后打包的目录 分端储存
│  ├─app
│  │  │  index.html
│  │  │  
│  │  └─static
│  │      └─js
│  │              index.0142f89e3523b3b0d16b.js
│  │              index.0142f89e3523b3b0d16b.js.map
│  │              manifest.57f6691c595e842abc95.js
│  │              manifest.57f6691c595e842abc95.js.map
│  │              vendor.cce790f63359fc27fa7d.js
│  │              vendor.cce790f63359fc27fa7d.js.map
│  │              
│  ├─mobile
│  │  │  index.html
│  │  │  
│  │  └─static
│  │      └─js
│  │              index.0142f89e3523b3b0d16b.js
│  │              index.0142f89e3523b3b0d16b.js.map
│  │              manifest.57f6691c595e842abc95.js
│  │              manifest.57f6691c595e842abc95.js.map
│  │              vendor.cce790f63359fc27fa7d.js
│  │              vendor.cce790f63359fc27fa7d.js.map
│  │              
│  └─pc
│      │  index.html
│      │  
│      └─static
│          ├─css
│          │      index.1e809171f3a961de951e3c8e6644435f.css
│          │      index.1e809171f3a961de951e3c8e6644435f.css.map
│          │      
│          └─js
│                  0.f3e74a76d92b3f6ca5ec.js
│                  0.f3e74a76d92b3f6ca5ec.js.map
│                  1.fb471d3425df8c16ac54.js
│                  1.fb471d3425df8c16ac54.js.map
│                  index.a2ba631673923f812cf1.js
│                  index.a2ba631673923f812cf1.js.map
│                  manifest.ab6461111db19541d04b.js
│                  manifest.ab6461111db19541d04b.js.map
│                  vendor.aeee805b1efff3748018.js
│                  vendor.aeee805b1efff3748018.js.map
│                  
├─images 		# 这个放点文档                        
├─sever			# 这里写点服务端程序，用于测试等
│      prod-view-server.js
│      
├─src			# 源文件目录
│  │  config.js
│  │  
│  ├─api		# 多端共用的 api
│  │      device-root.js
│  │      middleware.js
│  │      
│  ├─assets		# 多端共用的 资源
│  │      logo.png
│  │      
│  ├─components	# 多端共用的 组件
│  │      RootCommonComponent.vue
│  │      
│  └─device		# 设备入口 
│      ├─app	# 混合开发的放这里了，也可以分 ios 和 安卓
│      │      index.html	# app专用的html模板，打包好的东西会自动注入
│      │      index.js		# app的入口文件
│      │      
│      ├─mobile		# 这里放移动端的页面 ，下面的 index文件作用类似其他端
│      │      index.html	
│      │      index.js
│      │      
│      └─pc			# 这个目录下的都是pc端使用的，当然其他端要用也是可以的，哈哈
│          │  App.vue		# 入口组件
│          │  index.html	# 模板文件
│          │  index.js		# 入口文件
│          │  
│          ├─api			# 分离开接口
│          │      home.js	# home这个模块用的接口
│          │      middleware.js			# 一些公用的中间件
│          │      
│          ├─assets			# 资源
│          ├─components		# 组件
│          │  ├─commonComponents	# 公共组件
│          │  │      Header.vue
│          │  │      
│          │  ├─Home	# home这个模块用的组件
│          │  │      Body.vue
│          │  │      Index.vue
│          │  │      
│          │  └─Page404	# 404这个模块用的组件
│          │          Index.vue
│          │          
│          ├─router		# 路由
│          │      index.js
│          │      
│          ├─store		# vuex 的store
│          │  │  index.js	# 根级别的store + 模块组装
│          │  │  
│          │  └─modules		# store 模块
│          │          home.js	# home这个模块使用的store
│          │          
│          └─types			# 放类型名称
│                  home.js	# home这个模块使用的 types
│                  root.js	# 公用的types
│                  
├─static
│      .gitkeep
│      
└─test	# 测试相关 TODO
    
```



