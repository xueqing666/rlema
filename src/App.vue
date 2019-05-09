<template>
  <div id="app">
    <!--头啊-->
    <Headers></Headers>

    <!--大姐书写评价区域-->
    <HelloWorld/>

    <!--脚上-->
    <footercar></footercar>


  </div>
</template>

<script>

  import HelloWorld from "./components/middlemain/HelloWorld"
  import Headers from "./components/public/Headers"
  import ll_cont_pingjia from "./components/middlemain/ll-cont-pingjia"
  import footercar from "./components/public/footercar";

  export default {
    name: 'App',
    components: {
      HelloWorld, Headers, ll_cont_pingjia,footercar,
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  *{
    margin:0;
    padding:0;
  }
</style>
