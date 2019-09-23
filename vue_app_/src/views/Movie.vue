<template>
  <div class="Movie">
    <ul class="movie_box">
      <li class="movie_list" v-for="(obj,index) in movieList" :key="index">
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
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      num: 0,
      movieList: []
    };
  },
  methods: {
    getMovie(num) {
      axios
        .get(
          "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=" +
            num +
            "&count=10"
        )
        .then(res => {
          var movieList2 = new Array();
          movieList2 = res.data.subjects;
          this.movieList = [...this.movieList, ...movieList2];
          console.log(this.movieList);
          this.num+=10;
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  created() {
    this.getMovie(0);
    console.log("haha");
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;//滚动条距离顶部的高度
      var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;//页面可视高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;//文档总高度
      if (scrollHeight == Math.ceil(scrollTop) + clientHeight) {
        console.log("判断了！");
        this.getMovie(this.num);
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.movie_box {
  padding: 0.2rem;
  .movie_list {
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
</style>