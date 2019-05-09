// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from './App'
import router from './router'
import 'lib-flexible'
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
//ll-pingjia-style 引入自己的评价区域css样式
import "./assets/css/ll-pingjia-style.css"

import axios from "axios"
Vue.prototype.$axios = axios


Vue.config.productionTip = false

//11111111
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
