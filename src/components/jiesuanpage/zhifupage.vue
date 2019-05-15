<template>
    <div class="zhifupage">
      <p>支付金额</p>
      <p>31</p>
      <p @click="qr">确认支付</p>
    </div>
</template>

<script>
    export default {
      name: "zhifupage",
      methods:{
        qr(){
          alert("支付成功")
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .zhifupage{
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    background-color:deepskyblue;
  }
  .zhifupage>p{
    line-height:100px;
    text-align:center;
    font-size:30px;
  }
  .zhifupage p:nth-child(2){
    font-size:40px;
    font-weight: bold;
  }
</style>
