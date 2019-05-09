<template>
  <div id="app">
    <!--头啊-->
    <Headers></Headers>

    <!--大姐书写评价区域-->
    <!--<llcontpingjia></llcontpingjia>-->
    <HelloWorld/>

    <!--脚上-->
    <footercar></footercar>


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
}
</style>
