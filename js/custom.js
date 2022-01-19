$(function(){
    new WOW().init();
});

//animation scroll js
var html_body = $('html, body');
$('nav a section').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500,);
            return false;
        }
    }
});
$(window).scroll(function(){
    var scrolling=$(this).scrollTop();

    if(scrolling > 50){
        $(".back_to_top i").fadeIn(100)
    }else{
        $(".back_to_top i").fadeOut(100)
    }
    if(scrolling > 100){
        $(".menu").addClass("menu_bg")
    }else{
        $(".menu").removeClass("menu_bg")
    }
    });