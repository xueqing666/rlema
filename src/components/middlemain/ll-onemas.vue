<template>
  <div class="ll-onemas">
    <div class="ll-onemas-shangjia">
      <!--商家收藏-->
      <div>
        <p>{{lljson.name}}</p>
        <star :llscoress="lljson.score"></star>
        <span>(661)</span>
        <span>月售690单</span>
        <icon name="favorite" class="llsjicon"></icon>
        <span>已收藏</span>
      </div>
      <!--起送价区域-->
      <div>
        <div>
          <p>起送价</p>
          <span>20</span>
          <span>元</span>
        </div>
        <div>
          <p>商家配送</p>
          <span>4</span>
          <span>元</span>
        </div>
        <div>
          <p>平均配送时间</p>
          <span>39</span>
          <span>分</span>
        </div>
      </div>
    </div>
    <!--公告与活动区域-->
    <div class="ll-onemas-gonggao">
      <p>公告与活动</p>
      <span>{{lljson.bulletin}}</span>
      <ul class="list">
        <li>
          <span class="photo p1"></span>
          <span class="intro">在线支付满28减5</span>
        </li>
        <li>
          <span class="photo p2"></span>
          <span class="intro">单人精彩赛</span>
        </li>
        <li>
          <span class="photo p2"></span>
          <span class="intro">清肺雪梨汤八折抢购</span>
        </li>
        <li>
          <span class="photo p3"></span>
          <span class="intro">特价饮品八折抢购</span>
        </li>
        <li>
          <span class="photo p3"></span>
          <span class="intro">单人特色套餐</span>
        </li>
        <li>
          <span class="photo p4"></span>
          <span class="intro">该商家支持发票</span>
        </li>
        <li>
          <span class="photo p4"></span>
          <span class="intro">已加入"外卖宝"计划</span>
        </li>
      </ul>
    </div>
    <!--商家图片实景区域-->
    <div class="ll-onemas-shijin">
      <p>商家实景</p>
      <div v-for="ite in lljson.pics" :style="{backgroundImage:'url('+ite.url+')'}"></div>
    </div>
    <!--底部商家信息-->
    <ul class="ll-onemas-xinxi">
      <li>商家信息</li>
      <li>该商家支持开发票</li>
      <li>品类</li>
      <li>地址：该商家支持开发票该商家支持开发票该商家支持开发票该商家支持开发票该商家支持开发票</li>
      <li>营业时间</li>
    </ul>
  </div>
</template>

<script>
  import star from "../public/star"

  export default {
    name: "shopmes",
    components:{star},
    data(){
      return {
        lljson:"",
      }
    },
    created() {
      var _this = this;
      this.$axios.get("/api/sell/shop/info?shopId=1544670774658295899")
        .then(function (res) {
          _this.lljson = res.data.data;
        })
    },
  }
</script>

<style scoped lang="less">
  .ll-onemas{
    background-color:rgb(147,153,159);
  }
  .ll-onemas .ll-onemas-shangjia{
    box-sizing:border-box;
    padding:36px;
    overflow:hidden;
    background-color: white;
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child{
    border-bottom:1px solid rgb(147,153,159);
    position:relative;
    padding-bottom:36px;
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child  p{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
    font-weight:bold;
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child>div{
    margin-top:16px;
    display:inline-block;
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child  span:first-of-type{
    font-size:20px;
    color:rbg(77,85,93);
    line-height:36px;
    margin-left:16px;
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child  span:nth-of-type(2){
    font-size:20px;
    color:rbg(77,85,93);
    line-height:36px;
    margin-left:24px
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child .llsjicon{
    width:48px;
    height:48px;
    position:absolute;
    top:0;
    right:0;
    color:red;
  }
  .ll-onemas .ll-onemas-shangjia>div:first-child  span:nth-of-type(3){
    font-size:20px;
    color:rgb(77,85,93);
    line-height:20px;
    position:absolute;
    top:56px;
    right:0;
  }
  .ll-onemas .ll-onemas-shangjia>div:nth-child(2){
    padding:36px 0;
    box-sizing:border-box;
  }
  .ll-onemas .ll-onemas-shangjia>div:nth-child(2)>div{
    float:left;
    width:calc(99% / 3);
    text-align:center;
  }
  .ll-onemas .ll-onemas-shangjia>div:nth-child(2)>div:not(:first-child){
    border-left:1px solid rgb(147,153,159);
  }
  .ll-onemas .ll-onemas-shangjia>div:nth-child(2)>div>p:first-child{
    font-size:20px;
    color:rgb(147,153,159);
    line-height:20px;
    margin-bottom:8px;
  }
  .ll-onemas .ll-onemas-shangjia>div:nth-child(2)>div>span:nth-child(2){
    font-size:48px;
    font-weight:200;
    color:rgb(7,17,27);
    line-height:48px;
  }
  /*<!--公告与活动区域-->*/
  .ll-onemas-gonggao{
    background-color:white;
    margin-top:30px;
    box-sizing:border-box;
    padding:36px 24px 0 24px;
  }
  .ll-onemas-gonggao>p{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
    font-weight:bold;
    margin-bottom:16px;
  }
  .ll-onemas-gonggao>span{
    text-indent:5px;
    font-size:24px;
    font-weight:200;
    color:rgb(240,20,20);
    line-height:40px;
  }
  /*小list*/
  .ll-onemas .list{
    list-style: none;
    background-color:white;
    margin-top:32px;
  }
  .ll-onemas .list li{
    list-style: none;
    font-size: 24px;
    font-weight: 200;
    color:rgb(7,17,27);
    line-height: 32px;
    box-sizing:border-box;
    padding:32px 24px;
    border-top:1px solid rgb(147,153,159);
  }
  .ll-onemas .photo{
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: 100% 100%;
    vertical-align: middle;
  }
  .ll-onemas .p1{
    .bg-image("../../assets/decrease_2");
  }
  .ll-onemas .p2{
    .bg-image("../../assets/discount_2");
 }
  .ll-onemas .p3{
    .bg-image("../../assets/special_2");
 }
  .ll-onemas .p4{
    .bg-image("../../assets/special_2");
  }
  .ll-onemas .intro{
    vertical-align: middle;
  }
  /*商家实景区域*/
  .ll-onemas .ll-onemas-shijin{
    margin-top:32px;
    background-color: white;
    font-size:0;
  }
  .ll-onemas .ll-onemas-shijin p{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
    font-weight:bold;
    padding:36px 0 24px 36px;
    overflow:hidden;
  }
  /*.ll-onemas-shijin>div:nth-child(2){*/
    /*margin-left:36px;*/
  /*}*/
  .ll-onemas-shijin>div{
    display:inline-block;
    height: 180px;
    width:240px;
    color:red;
    margin-left:12px;
    background-size:100% 100%;
  }
  .ll-onemas .ll-onemas-xinxi{
    box-sizing:border-box;
    margin-top:30px;
    padding:36px;
    list-style:none;
    background-color:white;
  }
  .ll-onemas .ll-onemas-xinxi li:first-child{
    font-size:28px;
    color:rgb(7,17,27);
    line-height:28px;
    font-weight:bold;
    padding-bottom:24px;
  }
  .ll-onemas .ll-onemas-xinxi li:not(:first-child){
    font-size:24px;
    font-weight:200;
    color:rgb(7,17,27);
    line-height:32px;
    box-sizing:border-box;
    padding:32px 24px;
    border-top:1px solid rgb(147,153,159);
  }
</style>
