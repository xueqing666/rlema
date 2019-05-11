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

Vue.component("icon", Icon);

import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [
      {flag: true},
    ]
  },
  // getters: { //添加getters
  //   saleProducts: (state) => {
  //     let saleProducts = state.products.map(product => {
  //       return {
  //         price: product.price * 2,
  //         flag: false
  //       }
  //     })
  //     return saleProducts;
  //   }
  // },
  mutations: { //添加mutations
    minusPrice(state, payload) {
      let newPrice = state.products.forEach(product => {
        product.flag = payload
      })
    }
  },
  actions: { //添加actions
    minusPriceAsync(context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload); //context提交
      }, 2000)
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
