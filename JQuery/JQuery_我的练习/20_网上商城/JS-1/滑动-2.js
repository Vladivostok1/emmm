$(function(){
    $("#jnBrandTab li").on('click',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        var index = $(this).index();
        var width = $('#jnBrandList li').outerWidth(true)*4;
        $("#jnBrandList").animate({
            left:-index*width,
        },800)
    })
})