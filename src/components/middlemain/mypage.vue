<template>
    <div class="mypage">
      <div class="mytit">
        <div></div>
        <div>
          <p>九亿少男的梦</p>
          <span>个人信息</span>
          <icon class="myka" name="keyboard_arrow_right"></icon>
        </div>
      </div>
      <div class="mycont">
        <div class="hb">
          <div>
            <icon class="myka" name="keyboard_arrow_right"></icon>
            <p>红包</p>
            <span>无</span>
          </div>
          <div>
            <icon class="myka" name="keyboard_arrow_right"></icon>
            <p>代金券</p>
            <span>无</span>
          </div>
          <div>
            <icon class="myka" name="keyboard_arrow_right"></icon>
            <p>我的钱包</p>
            <span>签到赢现金</span>
          </div>
          <div>
            <icon class="myka" name="keyboard_arrow_right"></icon>
            <p>借钱</p>
            <span>最高5万</span>
          </div>
        </div>
        <div class="gongneng">
          <p>我的功能</p>
          <div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mypage"
    }
</script>

<style scoped>
  .mypage{
    background-color:white;
  }
  .mypage .mytit{
    height: 300px;
    width: 100%;
    background-color:yellow;
    box-sizing:border-box;
    padding-top:100px;
    padding-left:30px;
  }
  .mypage .mytit>div:first-child{
    height: 150px;
    width:150px;
    border-radius:50%;
    background-color: red;
    float:left;
  }
  .mypage .mytit>div:last-child{
    float:left;
    margin-left:40px;
  }
  .mypage .mytit>div:last-child p{
    margin-top:40px;
    font-weight:bold;
  }
  .mypage .myka{
    width: 30px;
    height: 30px;
  }
  .mypage .hb>div{
    display:inline-block;
    width:calc(96% /4);
  }
</style>
