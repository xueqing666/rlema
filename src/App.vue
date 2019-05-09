<template>
  <div id="app">
    <HelloWorld/>
    <!--<mt-header title="多个按钮">-->
    <!--<router-link to="/" slot="left">-->
    <!--<mt-button icon="back">返回</mt-button>-->
    <!--<mt-button @click="handleClose">关闭</mt-button>-->
    <!--</router-link>-->
    <!--<mt-button icon="more" slot="right"></mt-button>-->
    <!--</mt-header>-->

    <!--    <router-view/>-->
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld"

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return{}
    },
    methods: {},
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }
</style>
