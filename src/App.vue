<template>
  <div id="app">
    <Headers/>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld"
  import Headers from "./components/Headers"
  import ll_cont_pingjia from "./components/ll-cont-pingjia"
  export default {
    name: 'App',
    components: {
      HelloWorld, Headers,ll_cont_pingjia
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
</style>
