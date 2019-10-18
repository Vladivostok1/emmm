<template>
  <div>
    <ul class="musiclist">
      <li v-for="(obj,index) in musicList" :key="index" @click="goDetail(obj.id)">
        <img :src="obj.bg" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      musicList: []
    };
  },
  methods: {
    goDetail(id){
       this.$router.push({ path: "/music/music_Details", query: { id: id } }); 
    }
    
  },
  created() {
    axios
      .get("data/musiclist.json")
      .then(res => {
        this.musicList = res.data.albums;
        console.log(this.musicList);
      })
      .catch(res => {
        alert("服务器错误");
      });
  }
};
</script>

<style lang="scss" scoped>
.musiclist {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>