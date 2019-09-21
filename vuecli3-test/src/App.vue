<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to = "/mine">我的</router-link>
      <!-- params 式传参 刷新会消失，地址栏没有，使用route.params.调用  -->
      <!-- <router-link :to ="{name:'mine',params:{id:666,name:'zhangsan'}}">我的</router-link> -->
      <!-- query 式传参  刷新不消失，地址栏有，使用route.query.调用 -->
      <!-- <router-link :to ="{path:'/mine',query:{id:666,name:'zhangsan'}}">我的</router-link> -->
      <!-- URL 式传参    刷新不消失，地址栏有，使用route.params.调用 -->
      <!-- <router-link to="/mine/5/lisi">我的</router-link>| -->|
      <router-link to="/aaa">重定向</router-link>
      <transition name = "action"> <router-view /></transition>
    </div>
   
    <test></test>
  </div>
</template>


<script>
// import Test from './views/Test';
export default {
  components: {
    // Test
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.action-enter{
    opacity: 0;
}
.action-enter-active{
  transition: opacity 1s ease;
}
.action-enter-to{
  opacity: 1;
}
.action-leave{
  transform: translateX(0);
}
.action-leave-active{
  transition: transform 1s ease;
}
.action-leave-to{
  transform: translateX(100%);
}
</style>
