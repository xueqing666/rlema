<template>
  <div>
    <div class="xxl_black">
      <div class="xxl_black_top"></div>
      <div class="xxl_black_bottom">
        <div class="xxl_shopCar_top">
          <span class="xxl_GWC">购物车</span>
          <span class="xxl_emptyAll">清空</span>
        </div>
        <div class="xxl_shopCar_content" ref="wrap">
          <div class="xxl_scrollDiv" >
            <ul>
              <li v-for="shoplist in 20">
                <div class="xxl_small">
                  <div class="xxl_name">莲子核桃黑米粥
                  </div>
                  <div class="xxl_money">￥<span>10</span></div>
                  <div class="xxl_operation">
                    <span><icon name="remove_circle_outline" class="xxl_remove"></icon></span>
                    <span class="xxl_singletonNumber">88</span>
                    <span><icon name="add_circle" class="xxl_add"></icon></span>
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
  import BScroll from "better-scroll";

  export default {
    name: "carlist",
    component: {},
    data() {
      return {
        products: this.$store.state.products,
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
    height: 800px;
    position: absolute;
    top: 0;
  }

  .xxl_black_top {
    width: 100%;
    height: 400px;
    background-color: rgba(7, 17, 27, 0.6);
    blur: 10px;
  }

  .xxl_black_bottom {
    height: 611px;
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
    height: 785px;
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
    border-bottom: 1px solid gainsboro;
    margin: 0 auto;
    list-style: none;
  }

  .xxl_small div {
    display: inline-block;
    float: left;
    margin-top: 24px;
  }

  .xxl_name {
    width: 400px;
    font-size: 28px;
    color: rgb(7, 17, 27);
    line-height: 48px;
    text-align: left;
    font-weight: 700;
  }

  .xxl_small .xxl_money {
    margin-left: 36px;
    font-size: 20px;
    color: rgb(240, 20, 20);
    margin-top: 36px;
  }

  .xxl_money span {
    font-size: 28px;
    font-weight: 700;
  }

  .xxl_small .xxl_operation {
    width: 146px;
    margin-left: 42px;
    margin-top: 28px;
    font-size: 32px;
  }

  .xxl_remove, .xxl_add {
    width: 50px;
    color: dodgerblue;
    float: left;
  }

  .xxl_singletonNumber {
    width: 46px;
    text-align: center;
    float: left;
    margin-top: 5px;
  }

</style>
