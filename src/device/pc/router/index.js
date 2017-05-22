import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require(['./../components/Home/Index.vue'], resolve)
const Page404 = resolve => require(['./../components/Page404/Index.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
