$(document).ready(function(){
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active'),
        $('.menu__btn').toggleClass('menu__btn--active')
    });


    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 0
        },
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        responsive: [
            {
                breakpoint: 440,
                settings: {
                    arrows: false,
                    dots: true,
                }, 
            },
        ]
    });
});