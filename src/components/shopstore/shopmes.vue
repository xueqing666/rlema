<template>
    <div class="xq-shopmes">
        <div class="name">{{name}}</div>
        <star class="star" :llscoress="score"></star>
        <div class="yh">
          <span class="hh"></span>
          <span class="ff name">优惠信息</span>
          <span class="hh"></span>
        </div>
        <ul class="list">
          <li>
            <span class="photo p1"></span>
            <span class="intro">在线支付满28减5，满50减10</span>
          </li>
          <li>
            <span class="photo p2"></span>
            <span class="intro">单人精彩赛</span>
          </li>
          <li>
            <span class="photo p2"></span>
            <span class="intro">清肺雪梨汤8折抢购</span>
          </li>
          <li>
            <span class="photo p3"></span>
            <span class="intro">特价饮品八折抢购</span>
          </li>
          <li>
            <span class="photo p3"></span>
            <span class="intro">单人特色套餐</span>
          </li>
        </ul>
        <div class="yh">
          <span class="hh"></span>
          <span class="ff name">商家公告</span>
          <span class="hh"></span>
        </div>
        <div class="gg">{{bulletin}}</div>
        <div @click="disappear">
          <icon name="close"  :w="64" class="wrong"></icon>
        </div>

    </div>
</template>

<script>
  import star from "../public/star"

    export default {
        name: "shopmes",
        components:{star},
        data(){
            return {
              name:'',
              score:"",
              bulletin:''
            }
        },
        created() {
          var _this = this;
          this.$axios.get("/api/sell/shop/info?shopId=1544670774658295899")
            .then(function (res) {
              _this.name = res.data.data.name
              _this.score = res.data.data.score
              _this.bulletin = res.data.data.bulletin
            })
        },
      methods:{
        disappear:function () {
          this.$store.commit("ggflag",false)
        },
      }
    }
</script>

<style scoped lang="less">
.xq-shopmes{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  blur:10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding-top: 128px;
  box-sizing: border-box;
  text-align: center;
}
.xq-shopmes .name{
  font-size: 32px;
  font-weight: 700;
  color: white;
  line-height: 32px;
  margin-bottom: 32px;
}
/*星星*/
.xq-shopmes .star{
  line-height: 48px;
  margin-bottom: 56px;
}
/*横线等*/
.xq-shopmes .yh{
  margin-bottom: 48px;
}
.xq-shopmes .hh{
  display: inline-block;
  width: 224px;
  height: 2px;
  border-bottom: 2px solid rgba(255,255,255,.4);
}
.xq-shopmes .ff{
  vertical-align: middle;
  margin: 0 24px;
}
/*  小list*/
.xq-shopmes .list{
  list-style: none;
  margin-bottom: 56px;
}
.xq-shopmes .list li{
  list-style: none;
  font-size: 24px;
  font-weight: 200;
  color: white;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: left;
  margin-left: 96px;
}
.xq-shopmes .photo{
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: 100% 100%;
    vertical-align: middle;
    margin-right: 12px;
    margin-left: 24px;
  }
.xq-shopmes .p1{
    .bg-image("../../assets/decrease_2");
  }
.xq-shopmes .p2{
    .bg-image("../../assets/discount_2");
  }
.xq-shopmes .p3{
    .bg-image("../../assets/special_2");
  }
.xq-shopmes .intro{
    vertical-align: middle;
  }
/*  文字*/
.xq-shopmes .gg{
  padding: 0 96px;
  font-size: 24px;
  font-weight: 200;
  color: white;
  line-height: 48px;
  text-align: left;
  text-indent: 2em;
}
/*  叉号*/
  .wrong{
    position: absolute;
    bottom: 64px;
    left: 50%;
    margin-left: -64px;
    color: rgba(255,255,255,.5);
  }
</style>
