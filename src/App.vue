<template>
  <div id="app">
    <!--头啊-->
    <Headers @shopclickbaba="shopclickbaba"></Headers>

    <!--中间切换区域-->
    <mainmenu></mainmenu>

    <!--脚上-->
    <footercar></footercar>

    <!--店铺信息-->
    <shopmes v-if="shopclick" @shopmesclosebaba="shopmesclosebaba"></shopmes>

    <!--商品详情页-->
    <detailpage></detailpage>
  </div>
</template>

<script>

  import Headers from "./components/public/Headers"
  import mainmenu from "./components/middlemain/mainmenu"
  import footercar from "./components/public/footercar";
  import shopmes from "./components/shopstore/shopmes"
  import detailpage from "./components/middlemain/ll-xiangqing"

  export default {
    name: 'App',
    components: {
      Headers, mainmenu,footercar,shopmes,detailpage
    },
    data() {
      return {
        shopclick:false
      }
    },
    methods: {
      shopclickbaba:function (flag) {
        this.shopclick = flag
      },
      shopmesclosebaba:function (flag) {
        this.shopclick = flag
      }
    }
  }
</script>

<style lang="less">
  *{
    margin:0;
    padding:0;
  }
</style>
