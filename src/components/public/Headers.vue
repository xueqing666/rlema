<template>
    <div class="xq-head" @click="appear" :style="{backgroundImage:'url('+avatar+')'}">
      <div class="wrap">
        <div class="main">
          <div class="gofirst" @click="goback"><icon name="arrow_lift" :w="20"></icon></div>
          <div class="left" :style="{backgroundImage:'url('+avatar+')'}"></div>
          <div class="right">
            <div class="r-top">
              <span class="pp"></span>
              <span class="name">{{shopname}}</span>
            </div>
            <div class="ps">{{send}}/ {{deliveryTime}}分钟送达</div>
            <div class="r-bottom">
              <span class="jian"></span>
              <span class="jianfont">在线支付满28减5 ,满50减10</span>
              <span class="jianphoto jianfont">&nbsp;5个 ></span>
            </div>
          </div>
        </div>
        <div class="h-foot">
          <span class="gg"></span>
          <span class="gg-font">{{bulletin}}</span>
          <span class="gd"> > </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Headers",
      data(){
          return{
            avatar:'',
            shopname:'',
            send:"",
            deliveryTime:'',
            bulletin:'',
            flag:false
          }
      },
      created() {
          var _this = this
          this.$axios.get("/api/sell/shop/info?shopId=1544670774658295899")
            .then(function (res) {
              _this.avatar = res.data.data.avatar
              _this.shopname = res.data.data.name
              _this.send = res.data.data.description
              _this.deliveryTime = res.data.data.deliveryTime
              _this.bulletin = res.data.data.bulletin
            })
      },
      methods:{
          appear:function () {
            this.flag = true
            this.$store.commit("ggflag",this.flag);
          },
          goback:function () {
            this.$router.push("/")
          }
      }
    }
</script>

<style lang="less">
.xq-head{
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.xq-head .gofirst{
  color: white;
}
.xq-head .wrap{
  width: 100%;
  height: 100%;
  background-color: rgba(7,17,27,.5);
  blur:10px;
  padding-top: 48px;
}
.xq-head .main{
  margin-left: 48px;
  overflow: hidden;
  margin-bottom: 36px;
}
.xq-head .left{
  width: 128px;
  height: 128px;
  border-radius: 4px;
  background-size: 100% 100%;
  float: left;
  margin-right: 32px;
}
.xq-head .right{
  padding-top: 4px;
  float: left;
}
.xq-head .r-top{
  margin-bottom: 16px;
}
.xq-head .r-top .pp{
  display: inline-block;
  width: 60px;
  height: 36px;
  background-size: 100% 100%;
  .bg-image("../../assets/brand");
  margin-right: 12px;
}
.xq-head .r-top .name{
    font-size: 32px;
    color: rgb(255,255,255);
    font-weight: bold;
    line-height: 36px;
  }
.xq-head .ps{
    font-size: 24px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 24px;
    margin-bottom: 20px;
  }
.xq-head .r-bottom .jian{
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: 100% 100%;
    .bg-image("../../assets/decrease_1");
    margin-right: 8px;
    margin-bottom: 4px;
  }
.xq-head .r-bottom .jianfont{
    font-size: 20px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 24px;
  }
.xq-head .r-bottom .jianphoto{
    display: inline-block;
    width: 80px;
    height: 48px;
    line-height: 48px;
    background-color: rgba(0,0,0,.4);
    border-radius: 25px;
    position: relative;
    top: 0;
    left: 80px;
  }
.xq-head .h-foot{
    width: 100%;
    height: 56px;
    background-color: rgba(7,17,27,.2);
    font-size: 20px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 56px;
  }
.xq-head .h-foot .gg{
    display: inline-block;
    width: 44px;
    height: 24px;
    background-size: 100% 100%;
    .bg-image("../../assets/bulletin");
    margin-left: 24px;
    margin-right: 8px;
    vertical-align: top;
    margin-top: 18px;
  }
.xq-head .h-foot .gg-font{
    display: inline-block;
    width: 80%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
.xq-head .h-foot .gd{
    vertical-align: top;
    margin-left: 20px;
  }
</style>
