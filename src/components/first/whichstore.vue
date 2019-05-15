<template>
  <div>
    <div class="xq-store" @click="enter">
      <div class="storeImg fl" :style="{backgroundImage:'url('+avatar+')'}"></div>
      <div class="storeMsg">
        <h2 style="margin-bottom: 5px">{{storename}}</h2>
        <p style="margin-bottom: 5px">{{send}}/ {{deliveryTime}}分钟送达</p>
        <p style="color:red;">{{score}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "whichstore",
    data(){
      return{
        avatar:'',
        storename:'',
        send:'',
        deliveryTime:'',
        score:'',
        storemainflag:false
      }
    },
    created() {
      var _this = this
      this.$axios.get("/api/sell/shop/info?shopId=1544670774658295899")
        .then(function (res) {
          _this.avatar = res.data.data.avatar
          _this.storename = res.data.data.name
          _this.send = res.data.data.description
          _this.deliveryTime = res.data.data.deliveryTime
          _this.score = res.data.data.score
        })
    },
    methods:{
      enter:function () {
        this.$router.push("/storemain")
      }
    }
  }
</script>

<style scoped>
  .xq-store{
    padding: 10px;
    overflow: hidden;
  }
  .fl{
    float: left;
  }
  /*  左边图片*/
  .storeImg{
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 20px;
  }
  /*  右边信息*/
  .storeMsg{
    padding: 20px;
  }
</style>
