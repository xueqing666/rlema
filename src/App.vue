<template>
  <div id="app">
    <Headers></Headers>
    <div class="div2"></div>

    <!--大姐书写评价区域-->
    <llcontpingjia></llcontpingjia>


  </div>
</template>


<!--    <mt-header fixed title="固定在顶部"></mt-header>-->
<!--    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">-->
<!--      <router-link to="/" slot="left">-->
<!--        <mt-button icon="back">返回</mt-button>-->
<!--      </router-link>-->
<!--      <mt-button icon="more" slot="right"></mt-button>-->
<!--    </mt-header>-->
<!--    <mt-header title="多个按钮">-->
<!--      <router-link to="/" slot="left">-->
<!--        <mt-button icon="back">返回</mt-button>-->
<!--        <mt-button @click="handleClose">关闭</mt-button>-->
<!--      </router-link>-->
<!--      <mt-button icon="more" slot="right"></mt-button>-->
<!--    </mt-header>-->

<!--    <mt-navbar v-model="selected">-->
<!--      <mt-tab-item id="1">选项一</mt-tab-item>-->
<!--      <mt-tab-item id="2">选项二</mt-tab-item>-->
<!--      <mt-tab-item id="3">选项三</mt-tab-item>-->
<!--    </mt-navbar>-->

<!--    &lt;!&ndash; tab-container &ndash;&gt;-->
<!--    <mt-tab-container v-model="selected">-->
<!--      <mt-tab-container-item id="1">-->
<!--        <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />-->
<!--      </mt-tab-container-item>-->
<!--      <mt-tab-container-item id="2">-->
<!--        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />-->
<!--      </mt-tab-container-item>-->
<!--      <mt-tab-container-item id="3">-->
<!--        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />-->
<!--      </mt-tab-container-item>-->
<!--    </mt-tab-container>-->


<script>
  import Headers from "./components/Headers"

  import llcontpingjia from "./components/ll-cont-pingjia.vue";


  export default {
    name: 'App',
    components:{
      Headers,llcontpingjia,
    },
    data(){
      return{
        // active:'1',
      }
    },
    methods:{

    }
  }
</script>

<style lang="less">
  .div2{
    width: 100%;
    height: 100px;
    .bg-image("./assets/brand")
  }

<style>
  *{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
