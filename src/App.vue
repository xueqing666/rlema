<template>
  <div id="app">
    <!--头部区域-->
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!--大姐书写评价区域-->
    <llcontpingjia></llcontpingjia>


  </div>
</template>

<script>
  import llcontpingjia from "./components/ll-cont-pingjia.vue";


  export default {
    name: 'App',
    components:{
      llcontpingjia,
    },
    data(){
      return{
        // active:'1',
      }
    },
    methods:{

    }
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
