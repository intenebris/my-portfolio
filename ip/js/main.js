$(document).ready(function(){
    $('#team__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('#special-slider').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
    });
    $('#galery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#galery-slider-nav'
    });
    $('#galery-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#galery-slider',
        dots: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        focusOnSelect: true
    });

    var activeMenu = $('.side-menu__btn-active');
    var menuButton = $('#menu-btn');
    var menuButtonSp = $('#menu-btn-sp');
    var menuList = $('#menu-list');
    function clickMenu () {
        menuButton.toggleClass("side-menu__btn-active");
        menuList.toggleClass("side-menu__list-active");
    };
    menuButton.on("click", clickMenu);
    menuButtonSp.on("click", clickMenu);

    menuButtonSp.on("click", function() {
        menuButton.toggleClass("side-menu__btn-active");
        menuList.toggleClass("side-menu__list-active");
        console.log("arbeiten")
    });
    $('.menu-anchor').on("click", function(){
        if (activeMenu = true) {
            menuList.removeClass("side-menu__list-active");
            menuButton.removeClass("side-menu__btn-active");
        };
    });
    $(document).click(function (e) {
        if ( !menuButton.is(e.target) && !menuButtonSp.is(e.target) && !menuList.is(e.target) && menuList.has(e.target).length === 0) {
            menuList.removeClass("side-menu__list-active");
            menuButton.removeClass("side-menu__btn-active");
        };
    });



    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $.timepicker.regional['ru'] = {
        timeOnlyTitle: 'Выберите время',
        timeText: 'Время',
        hourText: 'Часы',
        minuteText: 'Минуты',
        secondText: 'Секунды',
        millisecText: 'Миллисекунды',
        timezoneText: 'Часовой пояс',
        currentText: 'Сейчас',
        closeText: 'Закрыть',
        timeFormat: 'HH:mm',
        amNames: ['AM', 'A'],
        pmNames: ['PM', 'P'],
        isRTL: false
    };
    $.timepicker.setDefaults($.timepicker.regional['ru']);
    $(function(){
        $("#datepicker").datepicker({
            showOn: "focus",
            minDate: 0,
            maxDate: "+60D",
            defaultDate: null,
            dateFormat: 'dd-mm-yy',
        });
    });
    $(function(){
        $("#timepicker").timepicker({
            minHours: 8,
            maxHours: 21,
        });

    });

})