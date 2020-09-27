$(document).ready ( function(){
    $('.header__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    }); 
    $('.team2__slider').slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000
    }); 
    $(".menu__category").click(function(){
        let value = $(this).attr("data-filter");
        let element = $(".porfolio__img");
        if(value == "all"){
            $(element).show("500");
        }
        else{
            $(element).not("."+value).hide("500");
            $(element).filter("."+value).show("500");
        }
    });
    $('.menu__btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('menu__btn_active');
        $('.header__mainmenu-list').toggleClass('menu__mobile');
    });
});