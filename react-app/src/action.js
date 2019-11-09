export let Add = (count)=>{
    // console.log("add action");
    return{
        type:"ADD",
        count
    }
}
export let Reduce = ()=>{
    // console.log("reduce action");
    return{
        type:"REDUCE"
    }
}
