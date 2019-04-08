$('div').addClass('box');
//jQuery('div').addClass('box');
console.log(jQuery('div'));


//下面代码表示HTML的document加载完成，就可以执行以下代码了
//第一种
$(document).ready(function(){
    $('div').addClass('box2');
})
//第二种
$().ready(function () {
    $('div').addClass('box3');
})
//第三种
$(function () {
    $('div').addClass('box4');
})
//原生JavaScript格式
window.onload=function () {
    
}

