import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode:'history', //地址中不出现"#"
  routes: [
    {
      //首页,显示所有店铺(其实就一家)
      path: '/',
      name: 'first',
      component: (resolve)=>require(['../components/first/first'],resolve)
    },
    {
      //点击商家,进入该商家主页面
      path:"/storemain",
      name:'storemain',
      component: (resolve) => require(['../components/store'],resolve)
    },
    {
      //订单跳转,显示所有店铺(其实就一家)
      path: '/order',
      name: 'order',
      component: (resolve)=>require(['../components/first/Order'],resolve)
    },
    {
      //点击结算,跳转到结算页
      path:'/payfor',
      name:'payfor',
      component:(resolve)=>require(['../components/jiesuanpage/jiesuanpage'],resolve)
    }
  ]
})
