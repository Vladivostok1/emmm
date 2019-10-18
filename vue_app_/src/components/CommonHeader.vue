<template>
  <div class="header" :style="{background: $store.state.color}">
    <div class="first">首页</div>
    <div class = "second">{{$store.state.title}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"; 
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  background: #ff0000;
  width: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  .first{
      width: 20%;
  }
  .second{
      margin-right:20%;
      flex: 1;
  }
}
</style>