<template>
  <div class="center">
    <RootCommonComp/>
    <_Header/>
    <_Body/>
    <h3>{{msg}}</h3>
    <h4>根级别的STORE的状态count:{{count}}</h4>
    <button v-on:click="add2">点我触发根级别的action，count加2</button>
    <br>
    <br>
    <button v-on:click="homeAdd2">点我触发home的action,这个action触发了根的+mutation,这里改变了参数，加的是3</button>
    <br>
    <h4>这里是home模块的属性,auth: {{auth}}</h4>
    <button v-on:click="getAuth">点我发起一个root级别的api（获取服务端的author），这个接口可以给多于一个端(pc+mobile)使用</button>
    <br>
    <br>
    <button v-on:click="serverCount">点我发起一个pc/home这个模块的api（服务端告诉我count要加多少（设置为+10）），这个api指定给这个模块使用</button>
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
</style>
