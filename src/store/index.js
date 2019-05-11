import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    llflag:false,
    llevjson:"",
  },
  mutations: {
    llgetflag(state,data){
      // console.log(data);
      state.llflag = data.comflag;
      state.llevjson = data.llevjson;
    }
  },
});
export default store;
