<template>
    <div class = "detail">
        {{$route.query.index}}
        {{$store.state.nowIndex}}
        <img src="img/photo/" + {{$route.query.index}} + ".jpg" alt="">
       
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
    export default {
        data(){
            return{
               ...mapState(["nowIndex"]),
            }
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>
.detail{
    margin-top:150px; 
    background: #eee;
    height: 300px;
}
</style>