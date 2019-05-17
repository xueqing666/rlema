<template>
  <div class="HistoricalOrder" ref="wrap">
    <div class="gofirst" @click="goback"><icon name="arrow_lift" :w="20"></icon>back</div>
    <header>历史订单</header>
    <div class="Order" v-for="value in list">
      <p class="Order_state">{{value.orderStatus}}</p>
      <p class="Order_name">姓名:{{value.buyerName}}</p>
      <p class="Order_number">订单号:{{value.orderId}}</p>
      <p class="Order_Cell_phone_number">手机号:{{value.buyerPhone}}</p>
      <p class="Order_price">总计:￥{{value.orderAmount}}</p>
      <p class="Order_address">地址:{{value.buyerAddress}}</p>
      <p class="Order_Creation_time">创建时间:{{value.createTime}}</p>
      <p><button>查看详情</button></p>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  export default {
    name: "Order",
    data() {
      return {
        list: "",
        listHeight: [],
        scrollY: 0,//实时获取当前Y轴的高度
      };
    },
    created() {
      var _this = this;
      this.$axios.get("/api/sell/buyer/order/list", {
        params: {openid: "ew3euwhd7sjw9diwkq", page: 0, size: 10}
      }).then(function (res) {
        _this.list = res.data.data;
        for (var i = 0; i < _this.list.length; i++) {
          if (_this.list[i].orderStatus === 1) {
            _this.list[i].orderStatus = "已完成";
          } else {
            _this.list[i].orderStatus = "未完成"
          }
        }
      })
    },
    methods:{
      _initScroll() {
        this.wraps = new BScroll(this.$refs.wrap, {
          probeType: 3,
          click: true
        });
        this.wraps.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _getHeight() {
        let rightItems = this.$refs.wrap.getElementsByClassName('HistoricalOrder');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < rightItems.length; i++) {
          let item = rightItems[i];
          height += item.clientHeight;
          this.listHeight.push(height)
        }
      },
      goback:function () {
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
  .HistoricalOrder {
    color: white;
    background: linear-gradient(top, blue, deepskyblue);
    /*height: 1004px;*/
    /*overflow: hidden;*/
  }
  .HistoricalOrder .gofirst{
    color: white;
  }
  header {
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 30px;
    margin-left: 15px;
    padding-top: 20px;
  }

  .Order {
    width: 96%;
    background-color: white;
    margin: 0 auto;
    border-radius: 5px;
  }

  .Order > p {
    color: black;
    font-size: 26px;
    width: 100%;
    text-indent: 1em;
    display: block;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid gainsboro;
  }

  .Order_state {
    font-weight: 700;
  }

  button {
    background-color: dodgerblue;
    color: white;
    border: 0;
    width: 140px;
    height: 60px;
    font-size: 20px;
    border-radius: 5px;
    float: right;
    margin-top: 25px;
    margin-right: 25px;
  }
</style>
