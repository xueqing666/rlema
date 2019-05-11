<template>
  <div id="app">
    <!--头啊-->
    <Headers @shopclickbaba="shopclickbaba"></Headers>

    <!--大姐书写评价区域-->
    <mainmenu></mainmenu>

    <!--脚上-->
    <footercar></footercar>

    <!--店铺信息-->
    <shopmes v-if="shopclick" @shopmesclosebaba="shopmesclosebaba"></shopmes>

  </div>
</template>

<script>
  import Headers from "./components/public/Headers"
  import mainmenu from "./components/middlemain/mainmenu"
  import footercar from "./components/public/footercar";
  import shopmes from "./components/shopstore/shopmes"

  export default {
    name: 'App',
    components: {
      Headers, mainmenu,footercar,shopmes
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
    box-sizing: border-box;
  }
</style>
