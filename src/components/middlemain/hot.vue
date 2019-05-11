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
                <div class="every" @click="llevjson(cc)">
                  <img class="photo fl" :src="bb.foods[index].icon" alt="">
                  <div class="every_r">
                    <div class="name">{{bb.foods[index].name}}</div>
                    <div class="sendnum">月售1132份 好评率100%</div>
                    <div class="pnum">
                      <div class="price fl">￥{{bb.foods[index].price}}<span>￥28</span></div>
                      <div class="drbtn">
                        <span v-if="btnflag"><icon class="resbtn" name="remove_circle_outline" :w="20"></icon></span>
                        <span v-if="btnflag">1</span>
                        <span @click="addbtn"><icon class="addbtn" name="add_circle" :w="20"></icon></span>
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
        changeRed: -1,
        list: "",
        btnflag: false,
        listHeight: [],
        scrollY: 0, //实时获取当前Y轴的高度
        clickEvent: false,
      };
    },
    created() {
      var _this = this;
      this.$axios.get("/api/sell/buyer/product/list")
        .then(function (res) {
          _this.list = res.data.data;
          console.log(_this.list);
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
          click:true
        })
        this.rights = new BScroll(this.$refs.right,{
          probeType:3
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

      addbtn: function () {
        this.btnflag = true;
      },
      llevjson(data){
        // console.log(data);
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

  .shop_left > ul > li {
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
