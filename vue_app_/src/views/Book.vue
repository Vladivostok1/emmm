<template>
  <div>都是知识
      <!-- <swipe class="my-swipe">
  <swipe-item class="slide1"></swipe-item>
  <swipe-item class="slide2"></swipe-item>
  <swipe-item class="slide3"></swipe-item>
</swipe> -->
    <my-swipe :imgList="imgList" mode = "slide"></my-swipe>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from "vue-swipe";
import mySwipe from "@/components/mySwipe.vue";
export default {
  components: {
    Swipe,
    SwipeItem,
    mySwipe
  },
  data(){
    return {
       imgList: ["img/01.jpg", "img/02.jpg", "img/03.jpg"]
    }
  }
};
</script>

<style lang="scss" scoped>
// .my-swipe {
//   height: 200px;
//   color: #fff;
//   font-size: 30px;
//   text-align: center;
// }

// .slide1 {

//   background-color: #0089dc;
//   color: #fff;
// }

// .slide2 {
//   background-color: #ffd705;
//   color: #000;
// }

// .slide3 {
//   background-color: #ff2d4b;
//   color: #fff;
// }
</style>