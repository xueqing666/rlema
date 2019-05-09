<template>
  <div id="app">
    <!--头啊-->
    <Headers></Headers>

    <!--大姐书写评价区域-->
    <!--<llcontpingjia></llcontpingjia>-->

    <!--脚上-->
    <footercar></footercar>

   <HelloWorld/>
    <!--闪电发货-->
  </div>
</template>

<script>
  import Headers from "./components/public/Headers"
  import footercar from "./components/public/footercar"

  import llcontpingjia from "./components/ll-cont-pingjia.vue";


  import HelloWorld from "./components/HelloWorld"
  export default {
    name: 'App',
    components:{
      Headers,footercar,llcontpingjia,
      HelloWorld
    },
    data(){
      return{

      }
    },
    methods:{
    }
  }
</script>

<style lang="less">
  .div2{
    width: 100%;
    height: 100px;
    .bg-image("./assets/brand")
  }
  *{
    margin:0;
    padding:0;
  }
#app {
  background-size: 100% 100%;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
</style>
