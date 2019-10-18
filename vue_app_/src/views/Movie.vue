<template>
  <div class="Movie">
    <ul class="movie_box">
      <li class="movie_list" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
        <!-- <router-link class="router_link" :to="{path:'/movie/movie_Details',query:{id:obj.id}}"> -->
          <img :src="obj.images.medium" alt />
          <div>
            <h2>{{obj.original_title}}</h2>
            <p>{{obj.collect_count}}已收藏</p>
            <p>
              演员:
              <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span>
            </p>
            <p>上映时间：{{obj.mainland_pubdate}}</p>
            <p>
              导演:
              <span v-for="(director,index) in obj.directors" :key="index">{{director.name}}</span>
            </p>
          </div>
        <!-- </router-link> -->
      </li>
    </ul>
    <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      num: 0,
      movieList: [],
      isShow: false, //true 显示loading   false不显示loading
      flag: true //是否可以再请求数据  true可以请求  false 不可以请求
    };
  },
  methods: {
    getMovie(num) {
      this.isShow = true;
      if (this.flag) {
        this.flag = false;
        axios
          .get(
            "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=" +
              num +
              "&count=10"
            // "/data/movie" + num + ".json"
          )
          .then(res => {
            this.isShow = false;
            this.flag = true;
            var movieList2 = new Array();
            console.log(res.data);
            movieList2 = res.data.subjects;
            this.movieList = [...this.movieList, ...movieList2];
            console.log(this.movieList);
            this.num += 10;
          })
          .catch(res => {
            console.log(res);
          });
      }
    },
    goDetail(id){
      this.$router.push({path:'/music/music_Details',query:{id:id}});
    }
  },
  created() {
    this.getMovie(0);
    console.log("haha");
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部的高度
      var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //页面可视高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //文档总高度
      if (scrollHeight == Math.ceil(scrollTop) + clientHeight) {
        console.log("判断了！");
        setTimeout(() => {
          this.getMovie(this.num);
        }, 2000);
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.movie_box {
  padding: 0.2rem;
  .movie_list {
    // .router_link {
    //   display: block;
    // }
    display: flex;
    img {
      width: 2.5rem;
      margin-right: 0.2rem;
      margin-bottom: 0.05rem;
    }
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #000;
  }
}
.loading {
  width: 1.5rem;
  // height:3rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>