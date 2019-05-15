import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"*",
      redirect:"/"
    },
    {
      path:"/",
      name:"home",
      component: (resolve) => require(['../App.vue'],resolve)
    },
    // {
    //   path:"/hot",
    //   name:"hot",
    //   component: (resolve) => require(['../App.vue'],resolve)
    // }
  ]
})
