<template>
  <div>
    <div class="shop_left">
      <ul>
        <li v-for="(aa,index) in list" @click="ChangeWhite(index)" :class="{white:changeRed == index}">
          <div>
            {{aa.name}}
          </div>
        </li>
      </ul>
    </div>
    <div class="shop_right" ref="shopBox">
      <div class="allcommodity">
        <div class="classification" v-for="bb in list">
          <div class="top">{{bb.name}}</div>
          <div class="content" v-for="(cc,index) in bb.foods">
            <div class="every">
              <div class="every_left">
                <img :src="bb.foods[index].icon" alt="">
              </div>
              <div class="every_middle">
                <div class="every_middle_top">{{bb.foods[index].name}}</div>
                <div class="every_middle_button">月售1132份 好评率100%</div>
                <div class="every_middle_foot">￥{{bb.foods[index].price}}<span>￥28</span></div>
              </div>
              <div class="every_right">
                <span><icon name="remove_circle_outline" class="remove"></icon></span>
                <span class="singletonNumber">1</span>
                <span><icon name="add_circle" class="add"></icon></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hot",
    component: {},
    data() {
      return {
        changeRed: -1,
        list: "",
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
    methods: {
      ChangeWhite(index) {
        this.changeRed = index;
        console.log(index);
      }
    }
  }
</script>

<style scoped>
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

  }

  .every {
    overflow: hidden;
  }

  .every_left {
    float: left;
  }

  .every_left img {
    width: 100px;
    height: 100px;
  }

  .every_middle {
    float: left;
    margin-left: 20px;
  }

  .every_middle_top {
    font-size: 28px;
    color: rgb(7, 17, 27);
    line-height: 28px;
    font-weight: 700;
  }

  .every_middle_button {
    font-size: 20px;
    line-height: 50px;
    color: rgb(147, 153, 159);
    text-align: left;
  }

  .every_middle_foot {
    font-size: 28px;
    color: rgb(240, 20, 20);
    font-weight: 700;
    line-height: 48px;
    text-align: left;
  }

  .every_middle_foot > span {
    font-size: 20px;
    color: rgb(147, 153, 159);
    font-weight: 700;
    line-height: 48px;
    text-decoration: line-through;
    margin-left: 16px;
  }

  .every_right {
    width: 110px;
    float: right;
    margin-top: 80px;
    font-size: 26px;
    color: rgb(147, 153, 159);
  }

  .remove,.add {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  .white {
    background-color: white;
  }
</style>
