<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>

    <!--tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <hot/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <llpingjia/>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import hot from "../../classification/hot/hot";
  import llpingjia from "./ll-cont-pingjia"

  export default {
    name: 'HelloWorld',
    components: {
      hot,llpingjia
    },
    data() {
      return {
        active: '1',
        selected: ''
      }
    },
  }
</script>

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
