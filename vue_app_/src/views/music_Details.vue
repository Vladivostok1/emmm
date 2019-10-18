<template>
  <div>
    {{$route.query.id}}
    <aplayer
      autoplay
      :music="musicList[0]"
      :showLrc = "true"
      :list="musicList"
      v-if = "flag"
    />
  </div>
</template>

<script>
import axios from "axios";
import Aplayer from "vue-aplayer";
export default {
  components: {
    aplayer: Aplayer
  },
  data() {
    return {
      musicList: [],
      flag: false
    };
  },
  created() {
    axios
      .get(
        //   "https://bird.ioliu.cn/netease"
        "/data/musicdata.json"
      )
      .then(res => {
        // this.musicList = res.data.musicData;
        console.log(this.musicList);
        res.data.musicData.forEach(obj => {
          let music = {
            src: obj.src,
            title: obj.title,
            artist: obj.author,
            pic: obj.musicImgSrc,
            lrc: "http://localhost:8080/"+obj.lrc
          };
          this.musicList.push(music);
        });
        this.flag = true;
      })
      .catch(res => {});
  }
};
</script>

<style lang="scss" scoped>
</style>