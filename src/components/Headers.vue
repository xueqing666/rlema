<template>
    <div class="head">
      <div class="main">
        <div class="left">
          <img :src="avatar" style="width: 128px;height: 128px;border-radius: 4px">
        </div>
        <div class="right"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Headers",
      data(){
          return{
            avatar:''
          }
      },
      created() {
          var _this = this
          this.$axios.get("/api/sell/shop/info?shopId=1544670774658295899")
            .then(function (res) {
              _this.avatar = res.data.data.avatar
            })
      }
    }
</script>

<style lang="less">
.head{
  color: rgba(7,17,27,.5);
  blur:10px;
  padding-top: 48px;
  padding-left: 48px;
}
  .right{
    width: 100%;
    height: 100px;
    background: #66CDAA;
    .bg-image("../assets/decrease_1");
  }
</style>
