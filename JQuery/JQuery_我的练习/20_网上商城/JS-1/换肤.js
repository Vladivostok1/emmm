$(function () {
    $('#skin li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $(this).index();
        $('#nav').attr('class', 'new new_skin_' + index + ' mainNav');
        $('#jnCatalog h2').attr('class', 'new new_skin_' + index);
        $('#jnCatalog h2').css('opacity', '0.5');
        setCookie('skin', index, 10);
    });
    var index = getCookie('skin');
    $('#skin li').eq(index).triggerHandler('click');

    function setCookie(attr, value, day) {
        var str = "";
        str += attr + '=' + value + ';';
        if (day) {
            var date = new Date();
            var today = date.getDate();
            date.setDate(today + day);
            str += "expires=" + date;
        }
        document.cookie = str;
    }
    function getCookie(key) {
        var str = document.cookie;
        var arr1 = str.split('; ');
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split('=');
            if (arr2[0] == key) {
                return arr2[1];
            }
        }
        return "";
    }
});