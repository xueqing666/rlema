<template>
    <div class="lljiesuanpage">
      <!--配送地址-->
      <div class="sendaddr">
        <div @click="jiesuanback" class="backimg">
          <icon class="sendback" name="arrow_lift"></icon>
        </div>
        <div class="peisong">
          <span>外卖配送</span>
          <span>到店自取</span>
        </div>
        <div class="addr">
          <p>大连市沙河口区软件园10号楼蓝欧科技有限公司</p>
          <p>宋先生155328234791</p>
        </div>
        <div class="time">
          <div class="songda">
            <p>送达时间</p>
            <p>准时达服务:超时十分钟赔付</p>
            <p>尽快送达(15:48送达)</p>
            <icon class="sendright" name="keyboard_arrow_right"></icon>
          </div>
          <div class="zhifu">
            <span>支付方式</span>
            <span>支付宝</span>
            <icon class="sendright" name="keyboard_arrow_right"></icon>
          </div>
        </div>
      </div>
      <!--配送商品内容-->
      <ul class="sendcont">
        <li>
          商家门店
        </li>
        <li>
          <!--:style="{backgroundImage:'url('+avatar+')'}"-->
          <span>图片</span>
          <span>白领单人套餐</span>
          <span>*1</span>
          <span>￥20</span>
          <span>￥10</span>
        </li>
        <li>
          <span>包装费</span>
          <span>餐盒</span>
          <span>￥2</span>
        </li>
        <li>
          <span>配送费</span>
          <span>蜂鸟专送</span>
          <span></span>
          <span>￥4</span>
          <span>￥0</span>
        </li>
      </ul>
      <!--备注等信息-->
      <div class="sendother">
        <div class="hongbao">
          <div class="hb">
            <span>红包</span>
            <span>兑换红包再减￥4</span>
            <icon class="sendright" name="keyboard_arrow_right"></icon>
          </div>
          <div class="yh">
            <span>优惠说明</span>
            <span>小计:</span>
            <span>￥31</span>
          </div>
          <div class="zs">
            <div>
              <span>准时达PLUS</span>
              <span>配送增值服务</span>
            </div>
            <p>超时十分钟赔付，超时15分钟赔付9.3元，超时30分钟佩服21.7元</p>
            <span>￥0.62</span>
            <icon class="sendright" name="check_circle"></icon>
          </div>
        </div>
        <div class="dingdan">
          <div class="ddone">
            <span>订单备注</span>
            <span></span>
            <span>口味 偏好</span>
            <icon class="sendright" name="keyboard_arrow_right"></icon>
          </div>
          <div class="ddtwo">
            <span>餐具分数</span>
            <span>选无需餐具，用支付宝付款</span>
            <span>未选择</span>
            <icon class="sendright" name="keyboard_arrow_right"></icon>
          </div>
          <div class="ddthere">
            <span>发票信息</span>
            <span></span>
            <span>未选择</span>
            <icon class="sendright" name="keyboard_arrow_right"></icon>
          </div>
          <div class="ddfour">
            <span>号码保护</span>
            <p>选择号码保护后，将对商家旗手隐藏你的真实手机号</p>
            <span>anniu</span>
          </div>
        </div>
      </div>
      <div class="querenzhifu">
        <span>￥31</span>
        <span>已优惠￥5</span>
        <span @click="querenzhifu">确认支付</span>
      </div>
      <zhifupage v-show="payflag"></zhifupage>
    </div>
</template>

<script>
  import zhifupage from "./zhifupage";
  export default {
    name: "jiesuanpage",
    components:{zhifupage},
    data(){
      return {
        payflag:false
      }
    },
    methods:{
      jiesuanback(){
        this.$router.go(-1)
      },
      querenzhifu(){
        this.payflag = !this.payflag;
      }
    }
  }
</script>

<style scoped>
  .lljiesuanpage{
    width:100%;
    background-color:cornflowerblue;
    position:fixed;
    top:0;
    left:0;
    z-index:3;
    font-size:20px;
  }
  .lljiesuanpage .sendaddr .backimg{
    height:30px;
    width:30px;
    margin:20px 0 20px 20px;
  }
  .lljiesuanpage .peisong{
    width:300px;
    height: 40px;
    border-radius:10px;
    margin-left:20px;
  }
  .lljiesuanpage .peisong span{
    display:inline-block;
    width:150px;
    line-height: 40px;
    text-align:center;
    border-radius:10px;
    background-color:white;
  }
  .lljiesuanpage .peisong span:last-child{
    margin-left:-10px;
  }
  .lljiesuanpage .addr{
    padding:20px;
  }
  .lljiesuanpage .addr p:first-child{
    font-size:30px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .lljiesuanpage .addr p:last-child{
    margin-top:10px
  }
  .lljiesuanpage .time{
    background-color:white;
    padding:20px;
    box-sizing:border-box;
  }
  .lljiesuanpage .time>div{
    position:relative;
  }
  .lljiesuanpage .time .songda p:nth-child(2){
    color:cornflowerblue;
    font-size:16px;
  }
  .lljiesuanpage .time .songda p:nth-child(3){
    position:absolute;
    top:20px;
    right:60px;
    color:cornflowerblue;
  }
  .lljiesuanpage .time .songda .sendright{
    height: 30px;
    width: 30px;
    position:absolute;
    top:20px;
    right:20px;
  }
  .lljiesuanpage .time .zhifu{
    line-height: 60px;
  }
  .lljiesuanpage .time .zhifu span:nth-child(2){
    position:absolute;
    right:60px;
    color:cornflowerblue
  }
  .lljiesuanpage .time .zhifu .sendright{
    height: 30px;
    width: 30px;
    position:absolute;
    top:20px;
    right:20px;
  }
  .lljiesuanpage .sendcont{
    background-color:white;
    margin-top:20px;
    padding:20px;
    list-style:none;
    box-sizing:border-box;
  }
  .lljiesuanpage .sendcont>li{
    position:relative;
    line-height: 50px;
  }
  .lljiesuanpage .sendcont li:nth-child(3) span:first-child{
    background-color: darkgrey;
    color:dimgray;
  }
  .lljiesuanpage .sendcont li:nth-child(4) span:first-child{
    background-color: blue;
    color:white;
  }
  .lljiesuanpage .sendcont li:nth-child(4){
    line-height: 50px;
  }
  .lljiesuanpage .sendcont li span:first-child{
    display:inline-block;
    width:90px;
    text-align:center;
    /*background-color:red;*/
  }
  .lljiesuanpage .sendcont li span:nth-child(2){
    margin-left:10px;
  }
  .lljiesuanpage .sendcont li span:nth-child(3){
    position:absolute;
    right:270px;
  }
  .lljiesuanpage .sendcont li span:nth-child(4){
    position:absolute;
    right:150px;
    color:gray;
    text-decoration: line-through;
  }
  .lljiesuanpage .sendcont li span:last-child{
    position:absolute;
    right:30px;
  }
  .lljiesuanpage .sendother{
    padding-top:20px;
    box-sizing:border-box;
  }
  .lljiesuanpage .hongbao>div{
    box-sizing:border-box;
    padding:20px;
  }
  .lljiesuanpage .hongbao .hb{
    height: 80px;
    position:relative;
    background-color: white;
  }
  .lljiesuanpage .hongbao .hb span:first-child{
     font-weight: bold;
    line-height: 80px;
   }
  .lljiesuanpage .hongbao .hb span:nth-child(2){
    position:absolute;
    top:20px;
    right:60px;
    height: 30px;
    background-color: black;
    color:gold;
    padding:0 5px;
  }
  .lljiesuanpage .hongbao .hb .sendright{
    width: 30px;
    height:30px;
    position:absolute;
    right:20px;
    top:25px;
  }
  .lljiesuanpage .hongbao .yh{
    line-height: 50px;
    position:relative;
    background-color: white;
    margin-top:-1px;
  }
  .lljiesuanpage .hongbao .yh span:first-child{
    color:gray;
  }
  .lljiesuanpage .hongbao .yh span:nth-child(2){
    position:absolute;
    right:80px;
  }
  .lljiesuanpage .hongbao .yh span:last-child{
    position:absolute;
    right:20px;
    font-size:25px;
    font-weight: bold;
  }
  .lljiesuanpage .hongbao .zs{
    margin-top:20px;
    background-color:white;
    position:relative;
  }
  .lljiesuanpage .hongbao .zs>div span:first-child{
    font-size:25px;
    color:blue;
  }
  .lljiesuanpage .hongbao .zs>div span:last-child{
    font-size:25px;
  }
  .lljiesuanpage .hongbao .zs>p{
    color:gray;
    width:500px;
  }
  .lljiesuanpage .hongbao .zs>span{
    position:absolute;
    top:30px;
    right:60px;
  }
  .lljiesuanpage .hongbao .zs .sendright{
    width:30px;
    height:30px;
    position:absolute;
    right:20px;
    top:30px;
    color:gray;
  }
  .lljiesuanpage .dingdan{
    margin-top:20px;
    background-color: white;
  }
  .lljiesuanpage .dingdan>div{
    position:relative;
    box-sizing:border-box;
    padding:20px;
  }
  .lljiesuanpage .dingdan>div:last-child{
    line-height: 40px;
  }
  .lljiesuanpage .dingdan>div span:first-child{
    font-weight:bold;
  }
  .lljiesuanpage .dingdan>div span:nth-child(2){
    color:green;
    margin-left:100px;
  }
  .lljiesuanpage .dingdan>div span:nth-child(3){
    position:absolute;
    right:60px;
  }
  .lljiesuanpage .dingdan .ddfour span:last-child{
    position:absolute;
    top:20px;
    right:20px;
  }
  .lljiesuanpage .dingdan>div .sendright{
    width:30px;
    height:30px;
    color:gray;
    position:absolute;
    top:20px;
    right:20px;
  }
  .lljiesuanpage .querenzhifu{
    width:100%;
    line-height: 100px;
    background-color:black;
    color:white;
    position:relative;
  }
  .lljiesuanpage .querenzhifu span:not(:last-child){
    margin-left:20px;
  }
  .lljiesuanpage .querenzhifu span:last-child{
    position:absolute;
    right:20px;
    background-color:blue;
    padding:0 10px;
  }
</style>
