$(function(){
    $(":input").focus(function(){
        $(this).addClass("focus");
        if($(this).val() == this.defaultValue)
        this.value = "";
    }).blur(function(){
        $(this).removeClass("focus").val(this.value==""?this.defaultValue:this.value);
    })
})