<template>
  <div>
    <div v-for="item in llscorestar" :llscorestar="llscoress">
       <img v-bind:src="item" />
    </div>
  </div>
</template>

<script>
  export default {
    name:"star",
    props:["llscoress"],
    computed:{
      llscorestar(){
        var stararr = [];
        var onstar = Math.floor(this.llscoress);
        var halfstar = this.llscoress - onstar;
        for(var i=0;i<onstar;i++){
          stararr.push(require("../../assets/star24_on@2x.png"))
        }
        if(halfstar != 0){
          stararr.push(require("../../assets/star24_half@2x.png"))
        }
        while(stararr.length < 5){
          stararr.push(require("../../assets/star24_off@2x.png"))
        }
        return stararr;
      }
    },
  }
</script>
