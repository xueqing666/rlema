<template>
  <div id="app">
    <Headers/>
    <HelloWorld/>

    <!--脚上-->
    <footercar></footercar>
    <!--佳佳-->


  </div>
</template>

<script>
  import Headers from "./components/Headers"
  import HelloWorld from "./components/HelloWorld"
  import footercar from "./components/public/footercar"
  export default {
    name: 'App',
    components: {
      HelloWorld, Headers, footercar
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
    background-size: 100% 100%;
  }

  *{
    margin:0;
    padding:0;
  }
</style>
