<template>
  <div>
    <div class="xq-foot" @click="carlistAppear">
      <div class="photo fl">
        <div class="how">{{hownum}}</div>
        <icon class="cc" name="shopping_cart" :w="40"></icon>
      </div>
      <div class="much fl">￥ {{howmuch}}</div>
      <div class="ss fl"></div>
      <div class="send much fl">另需配送费 ￥4元</div>
      <div class="pay" v-if="payflag">￥20起送</div>
      <div class="pay1" v-else="payflag" @click="sendfood">去结算</div>
    </div>

    <carlist v-if="flag"></carlist>
    <jiesuanpage v-if="jiesuanflag"></jiesuanpage>

  </div>
</template>

<script>

  import carlist from "../thing/carlist"
  import jiesuanpage from "../jiesuanpage/jiesuanpage";

  export default {
    name: "footercar",
    components: {carlist,jiesuanpage},
    computed: {
      hownum() {
        var sum = 0;
        for (var i = 0; i < this.$store.state.carArr.length; i++) {
          sum += Number(this.$store.state.carArr[i].count)
        }
        return sum;
      },
      howmuch() {
        var much = 0;
        // console.log(this.$store.state.carArr);
        for (var i = 0; i < this.$store.state.carArr.length; i++) {
          much += Number(this.$store.state.carArr[i].count * this.$store.state.carArr[i].price)
        }
        return much;
      },
      payflag(){
        if(this.$store.state.carArr.length != 0){
          return false;
        }else{
          return true;
        }
      },
      xxlflag(){
        return this.$store.state.xxlflag;
      }
    },
    data() {
      return {
        flag: false,
        jiesuanflag:false
      }
    },
    methods: {
      carlistAppear() {
        this.flag = !this.flag
        this.$store.commit("xxlflag",this.flag);
      },
      sendfood(){
        this.jiesuanflag = true;
        console.log("xianshi");
      }
    },
  }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .xq-foot {
    width: 100%;
    height: 100px;
    background-color: black;
    padding-left: 36px;
    box-sizing: border-box;
  }

  .xq-foot .fl {
    float: left;
  }

  .xq-foot .photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(128, 133, 138, 0.4);
    position: relative;
    bottom: 16px;
    margin-right: 36px;
    z-index: 2;
  }

  .xq-foot .photo .cc {
    color: rgba(255, 255, 255, .3);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -35px;
    margin-top: -25px;
  }

  .xq-foot .photo .how {
    width: 35px;
    height: 35px;
    font-size: 20px;
    border-radius: 50%;
    background-color: red;
    color: white;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 60px;
    z-index: 1;
  }

  .xq-foot .much {
    font-size: 27px;
    font-weight: 700;
    color: rgb(255, 255, 255, .4);
    line-height: 100px;
    margin-right: 24px;
  }

  .xq-foot .ss {
    width: 2px;
    height: 80px;
    border-right: 1px solid rgb(255, 255, 255, .1);
    margin-right: 24px;
    margin-top: 10px;
  }

  .xq-foot .send {
    font-weight: lighter;
  }

  .xq-foot .pay {
    width: 200px;
    height: 100%;
    font-size: 24px;
    color: rgb(255, 255, 255, .4);
    font-weight: 700;
    line-height: 100px;
    text-align: center;
    background-color: #2b333b;
    float: right;
  }
  .xq-foot .pay1 {
    width: 200px;
    height: 100%;
    font-size: 24px;
    color: rgb(255, 255, 255, .4);
    font-weight: 700;
    line-height: 100px;
    text-align: center;
    background-color: green;
    float: right;
  }

  .xq-foot .pay-active {
    width: 200px;
    height: 100%;
    font-size: 24px;
    color: rgb(255, 255, 255, .4);
    font-weight: 700;
    line-height: 100px;
    text-align: center;
    background-color: green;
    float: right;
  }
</style>
