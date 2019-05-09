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

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
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
