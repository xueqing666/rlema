<template>
  <div>
    <div class="xxl_black">
      <div class="xxl_black_bottom">
        <div class="xxl_shopCar_top">
          <span class="xxl_GWC">购物车</span>
          <span class="xxl_emptyAll" @click="clearAll">清空</span>
        </div>
        <div class="xxl_shopCar_content" ref="wrap">
          <div class="xxl_scrollDiv">
            <ul>
              <li v-for="item in carArr">
                <span class="fname fl"><b>{{item.name}}</b></span>
                <div class="rig" style="float: right">
                  <span class="xxl_money fl">￥<span>{{item.price}}</span></span>
                  <div class="drbtn" style="float: right">
                    <span @click="resbtn(item)"><icon class="resbtn" name="remove_circle_outline" :w="20"></icon></span>
                    <span>{{item.count}}</span>
                    <span @click="addbtn(item)"><icon class="addbtn" name="add_circle" :w="20"></icon></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //列表滚动
  import BScroll from "better-scroll"

  export default {
    name: "carlist",
    component: {},
    computed: {
      carArr() {
        return this.$store.state.carArr
      }
    },
    data() {
      return {
        listHeight: [],
        scrollY: 0,//实时获取当前Y轴的高度
      }
    },
    methods: {
      _initScroll() {
        this.wraps = new BScroll(this.$refs.wrap, {
          probeType: 3,
          click: true
        });
        //this.rights这个对象监听事件,时时获取位置pos.y
        this.wraps.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _getHeight() {
        let rightItems = this.$refs.wrap.getElementsByClassName('xxl_shopCar_content');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < rightItems.length; i++) {
          let item = rightItems[i];
          height += item.clientHeight;
          this.listHeight.push(height)
        }
      },
      //点击加好,添加到购物车
      addbtn:function (json) {
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
      clearAll(){
        for (let i = 0; i <this.carArr.length ; i++) {
          this.carArr[i].flag = false
          this.carArr[i].count = 0;
          this.carArr.splice(i,1);
          i--
        }
        console.log("清空");
        this.$store.commit("carArr","")
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._initScroll();
        this._getHeight()
      })
    },
  }
</script>

<style scoped>
  .xxl_black {
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    blur: 10px;
  }
  /*内容*/
  .xxl_black_bottom {
    width: 100%;
    height: 600px;
    position: fixed;
    bottom: 100px;
  }

  .xxl_shopCar_top {
    width: 100%;
    background-color: #f3f5f7;
    height: 80px;
    border-bottom: 2px solid rgba(7, 17, 27, 0.1);
  }

  .xxl_GWC {
    margin-left: 36px;
    font-size: 28px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 80px;
    float: left;
  }

  .xxl_emptyAll {
    font-size: 24px;
    color: rgb(0, 160, 220);
    line-height: 80px;
    float: right;
    margin-right: 36px;
  }

  .xxl_shopCar_content {
    width: 100%;
    position: relative;
    height: 520px;
    overflow: hidden;
    background-color: palevioletred;
  }

  .xxl_scrollDiv {
    width: 100%;
    position: absolute;
    background-color: white;
  }

  .xxl_scrollDiv > ul > li {
    width: 700px;
    height: 96px;
    line-height: 96px;
    border-bottom: 1px solid gainsboro;
    margin: 0 auto;
    list-style: none;
  }
  .fl{
    float: left;
  }
  .xxl_scrollDiv .rig{
    width: 30%;
  }
  .xxl_scrollDiv .fname{
    display: inline-block;
    font-size: 28px;
    color: rgb(7,17,27);
    line-height: 96px;
  }
  .addbtn, .resbtn {
    color: #00a0dc;
  }
  .xxl_money{
    font-size: 28px;
    font-weight: 700;
    color: red;
  }
</style>
