<template>
  <div id="app">
    <Headers/>
    <HelloWorld/>

    <!--脚上-->
    <footercar></footercar>


  </div>
</template>

<script>

  import HelloWorld from "./components/HelloWorld"
  import Headers from "./components/Headers"
  import ll_cont_pingjia from "./components/ll-cont-pingjia"
  export default {
    name: 'App',
    components: {
      HelloWorld, Headers, ll_cont_pingjia, Headers
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
