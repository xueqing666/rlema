<template>
  <div class="xxlshoplist">
    <div class="wrap">
      <!--左边列表-->
      <div class="shop_left" ref="left">
        <ul>
          <li v-for="(aa,index) in list" :class="{current:currentIndex==index}" @click="selectItem(index,$event)">
            <div>
              {{aa.name}}
            </div>
          </li>
        </ul>
      </div>
      <!--右边图片和信息-->
      <div class="shop_right" ref="right">
        <ul>
          <li class="list right-item right-item-hook" v-for="bb in list">
            <!--各类名字-->
            <h1 class="top">{{bb.name}}</h1>
            <!--各类详情-->
            <ul>
              <li class="content" v-for="(cc,index) in bb.foods">
                <!--每个商品-->
                <div class="every">
                  <img class="photo fl" @click="llevjson(cc)" :src="bb.foods[index].icon" alt="">
                  <div class="every_r">
                    <div class="name">{{bb.foods[index].name}}</div>
                    <div class="sendnum">月售1132份 好评率100%</div>
                    <div class="pnum">
                      <div class="price fl">￥{{bb.foods[index].price}}<span>￥28</span></div>
                      <div class="drbtn">
                        <span @click="resbtn(cc)" v-if="bb.foods[index].flag"><icon class="resbtn" name="remove_circle_outline" :w="20"></icon></span>
                        <span v-if="bb.foods[index].flag">{{bb.foods[index].count}}</span>
                        <span @click="addbtn(cc)"><icon class="addbtn" name="add_circle" :w="20"></icon></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  //列表滚动
  import BScroll from "better-scroll"

  export default {
    name: "hot",
    component: {},
    data() {
      return {
        list: "",
        listHeight:[],
        scrollY:0, //实时获取当前Y轴的高度
        clickEvent:false,
        carArr: []
      };
    },
    created(){
      var _this = this;
      this.$axios.get("/api/sell/buyer/product/list")
        .then(function (res) {
          _this.list = res.data.data;
        })
    },
    mounted() {
      this.$nextTick(() => {
        this._initScroll();
        this._getHeight()
      })
    },
    methods: {
      _initScroll(){
        this.lefts = new BScroll(this.$refs.left,{
          click:true
        })
        this.rights = new BScroll(this.$refs.right,{
          probeType:3,
          click:true
        })
        this.rights.on("scroll",(pos)=>{
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _getHeight() {
        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook")
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < rightItems.length; i++) {
          let item = rightItems[i];
          height += item.clientHeight;
          this.listHeight.push(height)
        }
      },
      selectItem(index, event) {
        this.clickEvent = true;
        if (!event._constructed) {
          return
        } else {
          let rightItems = this.$refs.right.getElementsByClassName("right-item-hook")
          let el = rightItems[index];
          this.rights.scrollToElement(el, 300)
        }
      },
      //点击加好,添加到购物车
      addbtn:function (json) {
        //判断是否详情页添加
        //this.$store.state.carArr类型为string
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
        console.log("添加成功");
        //传值给vuex
        this.$store.commit("carArr",this.carArr)
      },
      //点击减号,减少购物车中的物件
      resbtn:function(json){
        if(json.count==1){
          json.flag = false;
          json.count=0
          for (let i = 0; i <this.carArr.length ; i++) {
            if(this.carArr[i].id==json.id){
              this.carArr.splice(i,1);
              i--
              break;
            }
          }
        }else{
          for (let i = 0; i <this.carArr.length ; i++) {
            if(this.carArr[i].id==json.id){
              this.carArr[i].count--;
              break;
            }
          }
        }
        //传值给vuex
        console.log("减少成功");
        this.$store.commit("carArr",this.carArr)
      },
      //物品详情页
      llevjson(data){
        this.$store.commit("llgetflag",{comflag:true,llevjson:data})
      }
    },
    computed: {
      //计算属性
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
            if (this.clickEvent) {
              return i + 1
            } else {
              return i
            }
          }
        }
        return 0
      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 924px;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .current {
    background-color: #ffffff;
  }

  .shop_left {
    width: 200px;
    font-weight: 200;
    float: left;
    margin-top: 2px;
  }

  ul,li{
    list-style: none;
  }
  .shop_left ul > li {
    width: 100%;
    line-height: 84px;
    font-size: 22px;
    list-style: none;
    background-color: #f3f5f7;
  }

  .shop_left > ul > li > div {
    width: 112px;
    margin: 0 auto;
    height: 84px;
  }

  .shop_right {
    width: 600px;
    left: 200px;
    height: 100%;
    margin-top: 2px;
    position: absolute;
    overflow: hidden;
  }

  .top {
    width: 102%;
    height: 52px;
    font-size: 24px;
    color: rgb(147, 153, 159);
    line-height: 52px;
    background-color: #f3f5f7;
    border-left: 5px solid #d9dde1;
    text-align: left;
    text-indent: 2em;
  }

  .content {
    width: 493px;
    margin: 36px auto;
    border-bottom: 1px solid gainsboro;
    list-style: none;
  }

  .fl {
    float: left;
  }

  .every {
    overflow: hidden;
  }

  .every .photo {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  .every_r .name {
    font-size: 28px;
    color: rgb(7, 17, 27);
    line-height: 28px;
    font-weight: 700;
  }

  .every_r .sendnum {
    font-size: 20px;
    line-height: 50px;
    color: rgb(147, 153, 159);
    text-align: left;
  }

  .every_r .price {
    font-size: 28px;
    color: rgb(240, 20, 20);
    font-weight: 700;
    line-height: 48px;
    text-align: left;
  }

  .every_r .price span {
    font-size: 20px;
    color: rgb(147, 153, 159);
    font-weight: 700;
    line-height: 48px;
    text-decoration: line-through;
    margin-left: 16px;
  }

  .every_r .drbtn {
    float: right;
  }

  .addbtn, .resbtn {
    color: #00a0dc;
  }
</style>
