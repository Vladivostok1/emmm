<template>
  <div>
    {{$route.query.id}}
         hahahahahaha
     
      <!-- <ul>
          <li v-for="(obj,index) in movieDetailsList" :key="index">
              if({{obj.id}} == {{$route.query.id}}){
                  hahaaha
              }
          </li>
      </ul> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        num:0,
        movieDetail: {},
    };
  },
  methods: {
    getMovie(num) {
      axios
        .get(
          // "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=" +
          //   num +
          //   "&count=10"
          "./../data/moviedetail.json"
        )
        .then(res => {
            console.log("success");
            this.movieDetail = res.data;
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  created() {
    this.getMovie(0);
    console.log("haha");
  }
};
</script>

<style lang="scss" scoped>
</style>