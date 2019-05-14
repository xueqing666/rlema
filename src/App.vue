<template>
  <div id="app">
    <!--头啊-->
    <Headers @shopclickbaba="shopclickbaba"></Headers>

    <!--大姐书写评价区域-->
    <mainmenu></mainmenu>

    <!--店铺信息-->
    <shopmes v-if="shopclick" @shopmesclosebaba="shopmesclosebaba"></shopmes>

    <!--每个商品详情页-->
    <detailpage v-if="llflag"></detailpage>

    <!--脚上-->
    <footercar></footercar>
    <Order></Order>
  </div>
</template>

<script>
  import Headers from "./components/public/Headers"
  import mainmenu from "./components/middlemain/mainmenu"
  import footercar from "./components/public/footercar";
  import shopmes from "./components/shopstore/shopmes"
  import detailpage from "./components/public/ll-xiangqing"
  import Order from "./components/Order/Order"
  export default {
    name: 'App',
    components: {
      Headers, mainmenu,footercar,shopmes,detailpage,Order
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
    },
    computed:{
      llflag(){

        return this.$store.state.llflag;
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
