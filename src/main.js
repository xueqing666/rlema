// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from './App'
import router from './router'
import 'lib-flexible'
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI);
//ll-pingjia-style 引入自己的评价区域css样式
import "./assets/css/ll-pingjia-style.css"

import axios from "axios"
Vue.prototype.$axios = axios;

import Icon from "vue2-svg-icon/Icon"
Vue.component("icon",Icon);

Vue.config.productionTip = false;

//引入vuex
import store from "./store/index.js";

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
