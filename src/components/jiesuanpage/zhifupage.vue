<template>
    <div class="zhifupage">
      <p>支付金额</p>
      <p>￥{{this.$store.state.paymoney}}</p>
      <p @click="qr">确认支付</p>
    </div>
</template>

<script>
    export default {
      name: "zhifupage",
      methods:{
        qr(){
          alert("支付成功");
          this.$router.go(-1);
          this.$store.commit("xxlflag",false);
          this.$store.commit("carArr", "")
        }
      },
      // created() {
      //   this.$axios.post("/api/sell/buyer/order/create", {
      //     params: {name:"XQ",photo:123456789,address:"大连蓝鸥",openid:"ew3euwhd7sjw9diwkq",items:"1423113435324"}
      //   }).then(function (res) {
      //
      //   })
      // },
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
  .zhifupage p:nth-child(3){
    font-size:40px;
    font-weight: bold;
    background-color:darkblue;
    color:white;
  }
</style>
