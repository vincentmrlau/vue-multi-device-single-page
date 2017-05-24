<template>
  <div class="center">
    <RootCommonComp/>
    <_Header/>
    <_Body/>
    <h3>{{msg}}</h3>
    <h4>来自/pc/store/index.js的state 通过/pc/store/index.js的getter获取，<span>count:{{count}}</span></h4>
    <button v-on:click="add2">触发/pc/store/index.js的action,提交/pc/store/index.js里一个改变count的mutation</button>
    <br>
    <br>
    <button v-on:click="homeAdd2">触发/pc/store/home.js的action，提交的是/pc/store/index.js里一个改变count的mutation</button>
    <br>
    <h4>来自/pc/store/home.js的state,通过/pc/store/home.js的getter获取，<span> auth: {{auth}}</span></h4>
    <button v-on:click="getAuth">>触发/pc/store/home.js的action，发起一个来自/src/api/device-root.js的请求方法，这个方法使用了来自/src/api/middleware.js的中间件setAuth，请求完成后，提交的是/pc/store/home.js里一个改变auth的mutation</button>
    <br>
    <br>
    <button v-on:click="serverCount">触发/pc/store/home.js的action，发起一个来自/src/device/pc/home.js的请求方法，这个方法使用了来自/src/api/middleware.js的中间件setAuth，请求完成后，提交的是/pc/store/index.js里一个改变count的mutation</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import RootCommonComp from './../../../../components/RootCommonComponent.vue'
  import _Header from './../commonComponents/Header.vue'
  import _Body from './Body.vue'
  import * as rootTypes from './../../types/root'
  import * as homeTypes from './../../types/home'

  export default {
    data: function () {
      return {
        msg: '来自PC/Home/index的私有data.msg'
      }
    },
    computed: {
      ...mapGetters({
        count: rootTypes.ROOT_G_COUNT,
        auth: homeTypes.HOME_G_AUTH
      })
    },
    methods: {
      ...mapActions({
        add2: rootTypes.ROOT_A_INCREMENT,
        homeAdd2: homeTypes.HOME_A_ROOT_COUNT,
        getAuth: homeTypes.HOME_A_GET_AUTH,
        serverCount: homeTypes.HOME_A_SERVER_COUNT
      })
    },
    components: {
      _Header,
      _Body,
      RootCommonComp
    }
  }
</script>

<style lang="scss" scoped>
  .center{
    text-align: center;
  }
  button{
    font-size: 16px;
    letter-spacing: 1px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  span{
    background-color: yellow;
  }
</style>
