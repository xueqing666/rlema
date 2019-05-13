<template>
  <div class="ll-xiangqing">
    <div>
      <div class="llxq" @click="disappear" :style="{backgroundImage:'url('+llevjson.icon+')'}"></div>
      <div class="llxqjieshao">
        <p>{{llevjson.name}}</p>
        <span>月售1132份</span>
        <span>好评率100%</span>
        <div>
          <span>￥{{llevjson.price}}</span>
          {{llevjson.index}}
          <span>￥28</span>
        </div>
        <div class="llbuycar" @click="addbtn(llevjson)">加入购物车</div>
      </div>
      <div class="llspjs">
        <p>商品介绍</p>
        <div>
          我是商品介绍我是商品介绍我是商品介
          绍我是商品介绍我是商品介绍我是商品
          介绍我是商品介绍vv我是商品介绍
        </div>
      </div>
    </div>
    <div class="ll-pingjia-manyi">
      <div class="ll-pingjia-manyi-top">
        <button>全部 <span>10</span></button>
        <button>推荐 <span>10</span></button>
        <button>吐槽<span>10</span></button>
      </div>
      <div class="ll-pingjia-manyi-bot">
        <img src="../../assets/svg/check_circle.svg" alt="" style="height:24px;width:24px;">
        <span>只看有内容的评价</span>
      </div>
    </div>
    <!--详情循环区域-->
    <div class="llxqlist">
      <span>2011-1-1</span>
      <span>用户名</span>
      <span>图</span>
      <div class="llpj-list">
        <span>图</span>
        <span>一个人不够吃</span>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name:"ll-xiangqing",
    data(){
      return {
        flag:true,
        carArr:[]
      }
    },
    computed:{
      llevjson(){
        return this.$store.state.llevjson;
      }
    },
    methods:{
      addbtn:function (json) {
        //判断是否主页添加
        if(this.$store.state.carArr!=""){
          this.carArr = this.$store.state.carArr
        }
        //从未添加过
        if(!json.count){
          Vue.set(json,"flag",true)
          Vue.set(json,"count",1);
          this.carArr.push(json)
        }else{
          json.flag = true;
          //添加过.直接数量加一
          for (let i = 0; i <this.carArr.length ; i++) {
            if(this.carArr[i].id==json.id){
              this.carArr[i].count++;
              break;
            }
          }
        }
        // console.log("添加成功");
        //传值给vuex
        this.$store.commit("carArr",this.carArr)
      },
      disappear(){
        this.$store.commit("llgetflag",false);
      }
    }
  }
</script>
<style>
  .ll-xiangqing{
    width:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:#f3f5f7;
    z-index:3;
  }
  .ll-xiangqing .llxq{
    height:750px;
    width:100%;
    background-size:100% 100%;
    background-color:pink;
  }
  .ll-xiangqing  .llxqjieshao{
    padding:36px;
    box-sizing:border-box;
    position:relative;
    background-color: white;
  }
  .ll-xiangqing  .llxqjieshao>p:first-child{
    font-size:28px;
    font-weight:700;
    color:rgb(7,17,27);
    line-height:28px;
    margin-bottom:16px;
  }
  .ll-xiangqing  .llxqjieshao>span:nth-child(2){
    font-size:20px;
    line-height:20px;
    color:rgb(147,153,159);

  }
  .ll-xiangqing  .llxqjieshao>span:nth-child(3){
    font-size:20px;
    line-height:20px;
    color:rgb(147,153,159);
    margin-left:24px;
  }
  .ll-xiangqing  .llxqjieshao>div:nth-child(4){
    margin-top:36px;
  }
  .ll-xiangqing  .llxqjieshao>div:nth-child(4)>span:first-child{
    font-size:28px;
    font-weight:700;
    color:rgb(240,20,20);
    line-height:36px;
  }
  .ll-xiangqing  .llxqjieshao>div:nth-child(4)>span:last-child {
    font-size:20px;
    font-weight:700;
    color:rgb(147,153,159);
    line-height: 48px;
  }
  .ll-xiangqing  .llxqjieshao .llbuycar{
    width:148px;
    height:48px;
    background-color:deepskyblue;
    position:absolute;
    right:36px;
    bottom:72px;
    color:rgb(255,255,255);
    font-size:20px;
    line-height:48px;
    text-align:center;
    border-radius:24px;
  }
  .ll-xiangqing .llspjs{
    margin-top:32px;
    box-sizing:border-box;
    padding:36px;
    background-color:white;
  }
  .ll-xiangqing .llspjs p{
    font-size:28px;
    font-weight:700;
    color:rgb(7,17,27);
    line-height:28px;
    margin-bottom:12px;
  }
  .ll-xiangqing .llspjs div{
    font-size:24px;
    font-weight:200;
    color:rgb(77,85,93);
    line-height:48px;
    box-sizing:border-box;
    padding:0 16px;
  }
  .ll-xiangqing .ll-pingjia-manyi{
    margin-top:40px;
    background-color: white;
    border-top:1px solid rgb(147,153,159);
    border-bottom:1px solid rgb(147,153,159);
    padding:0 36px;
    box-sizing:border-box;
  }
  .ll-xiangqing .ll-pingjia-manyi button{
    font-size:30px;
    border:none;
    margin:36px auto;
    padding:10px;
  }
  .ll-xiangqing .ll-pingjia-manyi button span{
    font-size:25px;
  }
  .ll-xiangqing .ll-pingjia-manyi button:first-child{
    background-color: rgb(0,160,220);
  }
  .ll-xiangqing .ll-pingjia-manyi button:nth-child(2){
    background-color: rgb(204,236,247);
    margin-left:20px;
  }
  .ll-xiangqing .ll-pingjia-manyi button:last-child{
    background-color: rgb(234,235,237);
    margin-left:20px;
  }
  .ll-xiangqing .ll-pingjia-manyi-top{
    border-bottom:1px solid rgb(147,153,159);
  }
  .ll-xiangqing .ll-pingjia-manyi-bot{
    line-height:80px ;
    font-size:25px;
    color:rgb(147,153,159);
  }
  .ll-xiangqing .llxqlist{
    box-sizing:border-box;
    padding:32px;
    position:relative;
    background-color:white;
  }
  .llxqlist>span:first-child{
    font-size:20px;
    color:rgb(147,153,159);
    line-height: 24px;
  }
  .llxqlist>span:nth-child(2){
    font-size:20px;
    color:rgb(147,153,159);
    line-height:24px;
    position:absolute;
    top:32px;
    right:68px;
  }
  .llxqlist>span:nth-child(3){
    display:inline-block;
    height:24px;
    width:24px;
    background-color:red;
    position:absolute;
    top:32px;
    right:32px;
  }
  .llxqlist .llpj-list{
    margin-top:12px;
    border-top:rgba(7,17,27,0.1);

  }
  .llxqlist .llpj-list>span:first-child{
    background-color:red;
    width:48px;
    height:48px;
    color:rgb(147,153,159);
    line-height:48px;

  }
  .llxqlist .llpj-list>span:last-child{
    font-size:24px;
    color:rgb(7,17,27);
    line-height:32px;
  }
</style>
