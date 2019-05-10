<template>
  <!--评价区域的页面-->
  <div class="ll-pingjia-style">
    <!--评价-->
      <div>
        <div class="ll-pingjia-fenshu">
          <div class="ll-pingfen-fs-left">
            <p>3.9</p>
            <p>综合评分</p>
            <p>高于周边商家69.2%</p>
          </div>
          <div class="ll-pingfen-fs-right">
            <div>
              <span>商品口感</span>
              <starcomponent :llscoress="3.9"></starcomponent>
              <span>3.9</span>
            </div>
            <div>
              <span>服务态度</span>
              <starcomponent :llscoress="4"></starcomponent>
              <span>4.0</span>
            </div>
            <div class="sdsj">
              <span>送达时间</span>
              <span>44分钟</span>
            </div>
          </div>
        </div>
          <div class="ll-pingjia-manyi">
            <div class="ll-pingjia-manyi-top">
              <button>全部 <span>57</span></button>
              <button @click="llgetgood">满意 <span>47</span></button>
              <button @click="llgetbad">不满意 <span>10</span></button>
            </div>
            <div class="ll-pingjia-manyi-bot">
              <img src="../../assets/star24_on@2x.png" alt="">
              <span>只看有内容的评价</span>
            </div>
          </div>
          <!--评价数据区域-->
          <div class="ll-pingjia-list" >
            <!--*** 循环铺数据区域 ***-->
            <div class="ll-pingjia-list-every" v-for="item in llpingjiaarr" :key="item.ratingId">
              <div :style="{backgroundImage: 'url(' + item.avatar + ')' }"></div>

              <div class="ll-pingjia-list-evt">
                <div>
                  <span>{{item.username}}</span>
                  <span>{{item.rateTime|formatDate}}</span>
                </div>
                <div>
                  <starcomponent :llscoress="item.score"></starcomponent>
                  <span>{{item.deliveryTime}}分钟送达</span>
                </div>
                <p>{{item.text}}</p>
                <div>
                  <img src="../../assets/star24_on@2x.png" alt="">
                  <span v-for="ite in item.recommend">{{ite}}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  import starcomponent from "../public/star";

  export default {
    name:"ll-cont-pingjia",
    components:{
      starcomponent,
    },
    data () {
      return {
        selected:"",
        llpingjiaarr:[],
        llpingjiabg:"",
      }
    },
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    },
    created(){
      var _llthis = this;
      this.$axios.get("/api/sell/rating/list")
        .then(function (res) {
          _llthis.llpingjiaarr = res.data.data;
          console.log(_llthis.llpingjiaarr);
        })
    },
    methods:{
      llgetgood(){
        console.log("good");
      },
      llgetbad(){
        console.log("bad");
      }
    }
  }
</script>
