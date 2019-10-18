<template>
  <div class="swipe-box">
    <transition-group :name="mode" tag="ul">
      <li v-for="(obj,index) in imgList" :key="index" v-show="index == nowIndex">
        <img :src="obj" alt />
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowIndex: 0
    };
  },
  props: ["imgList", "mode"],
  created() {
    setInterval(obj => {
      this.nowIndex++;
      if (this.nowIndex == this.imgList.length) {
        this.nowIndex = 0;
      }
    }, 1000);   
  }
};
</script>

<style lang="scss" scoped>
// .swipe-box{
//     .list{
//          width: 100%;
//         position: relative;
//         li{
//            width:100%;
//            position: absolute;
//            top:0;
//            left:0;
//            img{
//                width: 100%;
//            }
//         }
//     }
// }
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-leave-to {
  opacity: 0;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: transform 1s ease;
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave {
  transform: translateX(0%);
}
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-leave-to {
  transform: translateX(100%);
}
.swipe-box{
    width:100%;
    overflow: hidden;
}
ul {
  position: relative;
  height: 5rem;
  li {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
      height: 5rem;
    }
  }
}
</style>