import Vue from 'vue'
import Router from 'vue-router'
import mainmenu from '../components/middlemain/mainmenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainmenu',
      component: mainmenu
    }
  ]
})
