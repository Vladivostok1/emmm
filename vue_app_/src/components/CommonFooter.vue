<template>
  <div class="footer" :style="{background: $store.state.color}">
    <router-link
      v-for="(obj,index) in Menu"
      :key="index"
      @click.native="change([obj.color,obj.title])"
      class="router_link"
      :to="obj.path"
    >{{obj.title}}</router-link>
    <!--native 给组件绑定事件  -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      Menu: [
        {
          title: "电影",
          path: "/movie",
          color: "red"
        },
        {
          title: "音乐",
          path: "/music",
          color: "yellow"
        },
        {
          title: "书籍",
          path: "/book",
          color: "green"
        },
        {
          title: "图片",
          path: "/picture",
          color: "pink"
        }
      ]
    };
  },
  computed: {
  },
  methods: {
    ...mapMutations(["change"])
  },
  created() {
    this.Menu.forEach((obj, index) => {
      if (obj.path == this.$route.path) this.change([obj.color, obj.title]);
    });
  }
};
</script>
<style lang="scss" scoped>
.footer {
  height: 1rem;
  line-height: 1rem;
  background: yellow;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  .router_link {
    flex: 1;
    text-align: center;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>