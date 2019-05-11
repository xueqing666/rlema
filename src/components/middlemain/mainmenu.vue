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
      <mt-tab-container-item id="3">
        <llonemas/>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import hot from "./hot";
  import llpingjia from "./ll-cont-pingjia"
  import llonemas from "./ll-onemas"

  export default {
    name: 'mainmenu',
    components: {
      hot,llpingjia,llonemas
    },
    data() {
      return {
        selected: '1'
      }
    },
  }
</script>

<style scoped></style>
