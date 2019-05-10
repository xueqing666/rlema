<template>
  <!--评价区域的页面-->
  <div class="ll-pingjia-style">
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
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_off@2x.png" alt="">
            <span>3.9</span>
          </div>
          <div>
            <span>服务态度</span>
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_on@2x.png" alt="">
            <img src="../assets/star24_off@2x.png" alt="">
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
          <button>满意 <span>47</span></button>
          <button>不满意 <span>10</span></button>
        </div>
        <div class="ll-pingjia-manyi-bot">
          <img src="../assets/star24_on@2x.png" alt="">
          <span>只看有内容的评价</span>
        </div>
      </div>
      <!--数据区域-->
      <div class="ll-pingjia-list">
        <!--*** 循环铺数据区域 ***-->
        <div class="ll-pingjia-list-every">
          <div></div>
          <div class="ll-pingjia-list-evt">
            <div>
              <span>聚***家</span>
              <span>2019-2-2</span>
            </div>
            <div>
              <img src="../assets/star24_on@2x.png" alt="">
              <img src="../assets/star24_on@2x.png" alt="">
              <img src="../assets/star24_on@2x.png" alt="">
              <img src="../assets/star24_on@2x.png" alt="">
              <img src="../assets/star24_off@2x.png" alt="">
              <span>80分钟送达</span>
            </div>
            <p>
              油条凉了，而且没有酱。75分钟才到，很慢，送餐员态度不错，但毕竟好晚了啊。
            </p>
            <div>
              <img src="../assets/star24_on@2x.png" alt="">
              <span>大王香菇卤肉超级好吃饭</span>
              <span>大王香菇卤肉超级好吃饭</span>
              <span>大王香菇卤肉超级好吃饭</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'll-cont-pingjia',
    data() {
      return {
        selected: "",
      }
    }
  }
</script>
