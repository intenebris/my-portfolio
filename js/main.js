$(document).ready(function(){
    $('.slider-wrapper').slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    // Modal windows

    $('#submit').on("click", function () {
        $('#modal').addClass("modal-active");
        $('body').css('overflow', 'hidden');
        $('body').css('padding-right', '17px');
        $('#btn-up').css('margin-right','17px');
    });
    $('#modal__bg').on("click", function (e) {
        $('#modal').removeClass("modal-active");
        e.preventDefault();
        $('body').css('overflow', 'auto');
        $('body').css('padding-right', 0);
        $('#btn-up').css('margin-right', 0);
    });
    $('#close').on("click", function (e) {
        $('#modal').removeClass("modal-active");
        e.preventDefault();
        $('body').css('overflow', 'auto');
        $('body').css('padding-right', 0);
        $('#btn-up').css('margin-right', 0);
    });
    
    // Mobile menu

    $('.header__menu-btn').on("click", function() {
        $('.header__menu-btn').toggleClass("header__menu-btn_active");
        $('.header__menu-list').toggleClass("header__menu-list_active");
        $('#menu-mobile__closer').toggleClass("menu-mobile__closer_active");
    });
    activeMenu = $('.header__menu-list_actve');
    $('.header__menu-link').on("click", function(){
        if(activeMenu = true) {
            $('.header__menu-list').removeClass("header__menu-list_active");
            $('.header__menu-btn').removeClass("header__menu-btn_active");
            $('#menu-mobile__closer').removeClass("menu-mobile__closer_active");
        };
    });
    $('#menu-mobile__closer').on("click", function(e) {
        $('#menu-mobile__closer').removeClass("menu-mobile__closer_active");
        $('.header__menu-btn').removeClass("header__menu-btn_active");
        $('.header__menu-list').removeClass("header__menu-list_active");
        e.preventDefault();
    });

    // Button UP

    let btn = $('#btn-up');
    $(window).scroll(function (){
        if($(this).scrollTop() > 800) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });
    btn.on("click", function(){
        $('body, html').animate ({
            scrollTop: 0
        }, 400);
        return false;
    });
});