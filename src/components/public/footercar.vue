<template>
    <div class="xq-foot">
      <div class="photo">
        <icon name="shopping_cart" :w="50"></icon>
      </div>

    </div>
</template>

<script>
    export default {
        name: "footercar"
    }
</script>

<style scoped lang="less">
.xq-foot{
  width: 100%;
  height: 100px;
  background-color: black;
  padding-left: 36px;
}
  .xq-foot .photo{
    width: 116px;
    height: 116px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.2);
  }
</style>
