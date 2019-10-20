<template>
  <div class="photo-box">
    <ul class="photo-ul">
      <li v-for="(obj,index) in photoList" :key="index" @click="goDetails(index)" v-show="isShow">
        <img :src="obj" alt />
      </li>
    </ul>
    <div class="detail" v-show="!isShow">
      <v-touch tap = "ul" v-on:swipeleft="next()"  v-on:swiperight="prev()" class="detail-ul">
        <li @click="goAll()">
          <img :src="photoList[nowIndex]" alt />
        </li>
      </v-touch>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Vue from 'vue';
var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});
// import vueTouch from "vue-touch";
export default {
  components: {
    // vueTouch: vueTouch
  },
  data() {
    return {
      name: "touch",
      nowIndex: 0,
      isShow: true,
      photoList: [
        "img/photo/1.jpg",
        "img/photo/2.jpg",
        "img/photo/3.jpg",
        "img/photo/4.jpg",
        "img/photo/5.jpg",
        "img/photo/6.jpg",
        "img/photo/7.jpg",
        "img/photo/8.jpg",
        "img/photo/9.jpg",
        "img/photo/10.jpg",
        "img/photo/11.jpg",
        "img/photo/12.jpg",
        "img/photo/13.jpg",
        "img/photo/14.jpg",
        "img/photo/15.jpg",
        "img/photo/16.jpg",
        "img/photo/17.jpg",
        "img/photo/18.jpg",
        "img/photo/19.jpg",
        "img/photo/20.jpg",
        "img/photo/21.jpg",
        "img/photo/22.jpg",
        "img/photo/23.jpg",
        "img/photo/24.jpg"
      ]
    };
  },
  methods: {
    goDetails(index, e) {
      this.nowIndex = index;
      this.isShow = !this.isShow;
    },
    goAll() {
      this.isShow = !this.isShow;
    },
    next(){
      this.nowIndex++;
      if(this.nowIndex == this.photoList.length)
      this.nowIndex = 0;
    },
    prev(){
      this.nowIndex--;
      if(this.nowIndex == -1){
        this.nowIndex = 23;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-box {
  overflow: hidden;
  .photo-ul {
    display: flex;
    width: 375px;
    flex-wrap: wrap;

    li {
      width: 50%;
      img {
        width: 100%;
        // height: 100px;
        display: block;
      }
    }
  }
  .detail {
    margin-top: 50px;
    background: #000;
    // height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
.detail-ul {
  padding-top: 2.5rem;
  li {
    width: 100%;
    img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>