import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//设置的全局访问的state对象
const state = {
    llflag:false,
    llevjson:"",
    carArr:"",
    xxlflag:"",
    ifclearall:0
};

const store = new Vuex.Store({
  state,
  //实时监听state值得变化
  mutations: {
    llgetflag(state,data){
      state.llflag = data.comflag;
      state.llevjson = data.llevjson;
    },
    carArr(state,data){
      state.carArr = data;
    },
    xxlflag(state,data){
      state.ifclearall = 0;
      state.xxlflag = data;
    },
    ifclearall(state,data){
      state.ifclearall = data;
    }
  }
});

export default store;
