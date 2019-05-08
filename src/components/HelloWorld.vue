<template>
  <div class="hello">
    <h1>这是饿了吗主页面</h1>
    <h2>{{msg}}</h2>
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
  import {MessageBox} from "mint-ui";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello'
    }
  },
  methods:{
    handleClick(){
      MessageBox.confirm('确定执行此操作?')
        .then(action => {
        console.log("chenggong");
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
