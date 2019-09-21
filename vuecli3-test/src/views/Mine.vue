<template>
   
    <div>
        this is hahahahah
        <router-link to = "/mine/test1">test1</router-link>
        <router-link to = "/mine/test2">test2</router-link>
        {{$route.params.id}}
        {{$route.params.name}}
         <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>