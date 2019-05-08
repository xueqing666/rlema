<template>
  <div>
    <mt-header title="饿了么">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>

    <!--tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!--<mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />-->
        <hot/>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import hot from "../classification/hot/hot"
  export default {
    name: 'HelloWorld',
    components:{
      hot
    },
    data() {
      return {
        active: '1',
        selected: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*h1, h2 {*/
    /*font-weight: normal;*/
  /*}*/

  /*ul {*/
    /*list-style-type: none;*/
    /*padding: 0;*/
  /*}*/

  /*li {*/
    /*display: inline-block;*/
    /*margin: 0 10px;*/
  /*}*/

</style>
