<template>
  <div>
    this is hahahahah
    <router-link to="/mine/test1">test1</router-link>
    <router-link to="/mine/test2">test2</router-link>
    {{$route.params.id}}
    {{$route.params.name}}
    <router-view></router-view>
    {{$store.state.count}}
    <button @click="$store.commit('add',5)">add</button>
    <button @click="$store.commit('reduce',3)">reduce</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>