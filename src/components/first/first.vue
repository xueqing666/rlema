<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">外卖</mt-tab-item>
      <mt-tab-item id="2">订单</mt-tab-item>
      <mt-tab-item id="3">我的</mt-tab-item>
    </mt-tabbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!--商铺信息-->
        <whichstore></whichstore>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!--订单信息-->
        <order></order>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!--我的-->
        <h1>我的个人信息</h1>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

</template>

<script>
  import order from "./Order"
  import whichstore from "./whichstore"

    export default {
        name: "first",
      components:{whichstore,order},
      data(){
          return{
            selected:'1'
          }
      }
    }
</script>

<style scoped>

</style>
