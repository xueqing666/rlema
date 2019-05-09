<template>
  <div>
    <div class="left">
      <ul>
        <li v-for="(aa,index) in list" @click="ChangeWhite(index)" :class="{white:changeRed == index}">
          <div>
            <img v-if="aa.img" :src="aa.img" alt="">
            {{aa.name}}
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="classification">
        <div class="top">单人特色套餐</div>
        <div class="content">
          <div class="every">
            <div class="every_left">
              <img src="../../img/invoice_1@3x.png" alt="">
            </div>
            <div class="every_middle">
              <div class="every_middle_top">皮蛋瘦肉粥配包子套餐</div>
              <div class="every_middle_button">月售1132份 好评率100%</div>
              <div class="every_middle_foot">￥24<span>￥28</span></div>
            </div>
            <div class="every_right">
              <span><img src="../../img/remove_circle_outline.svg" alt=""></span>
              <span class="singletonNumber">1</span>
              <span><img src="../../img/add_circle.svg" alt=""></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import special from "../../img/special_3@2x.png"
  export default {
    name: "hot",
    data() {
      return {
        list: [
          {name: "热销榜"},
          {name: "单人特色套餐", img: special},
          {name: "特色粥品"},
          {name: "精选热菜"},
          {name: "爽口凉菜"},
          {name: "半成品"},
          {name: "饭类"},
          {name: "面类"}
        ],
        changeRed: -1
      };
    },
    methods: {
      ChangeWhite(index) {
        this.changeRed = index;
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .left {
    width: 160px;
    font-weight: 200;
    float: left;
    margin-top: 2px;
  }

  ul > li:nth-child(2) {
    line-height: 20px;
    padding-top: 20px;
  }

  ul > li {
    width: 100%;
    line-height: 84px;
    font-size: 22px;
    list-style: none;
    background-color: #f3f5f7;
  }

  li > div {
    width: 112px;
    margin: 0 auto;
    height: 84px;
  }

  li > div > img {
    width: 25px;
    height: 25px;
    vertical-align: top;
  }

  .right {
    width: 565px;
    float: left;
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
  }

  .every_middle_top {
    margin-top: 20px;
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
    float: left;
    margin-top: 100px;
    font-size: 26px;
    color: rgb(147, 153, 159);
  }

  .every_right span img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  .white {
    background-color: white;
  }
</style>
