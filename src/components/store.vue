<template>
    <div>
<!--      头-->
      <headers></headers>
<!--      中间-->
      <mainmenu></mainmenu>
<!--      脚上-->
      <footers></footers>
<!--      点击头显示的商家信息页(公告)-->
      <shopmsg v-if="ggflag" ></shopmsg>
<!--      每个商品详情页-->
      <everyfoodmsg v-if="llflag"></everyfoodmsg>

    </div>
</template>

<script>
    //头
    import headers from "./public/Headers"
    //中间
    import mainmenu from "./middlemain/mainmenu"
    //脚
    import footers from "./public/footercar"
    //店铺信息(点击头部图片显示的)
    import shopmsg from "./shopstore/shopmes"
    //每个商品详情页
    import everyfoodmsg from "./public/ll-xiangqing"


    export default {
        name: "store",
      components:{headers,mainmenu,footers,shopmsg,everyfoodmsg},
      data() {
        return {}
      },
      computed:{
        llflag(){
          return this.$store.state.llflag;
        },
        ggflag(){
          return this.$store.state.ggflag;
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
