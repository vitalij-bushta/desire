$(function() {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
    $('.contact-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 10,
        slidesToScroll: 10

    });
    $('.article-slider__box').slick({
        prevArrow: '<button type = "button" class = "slick-prev"></ button>',
        nextArrow: '<button type = "button" class = "slick-next"></ button>'
    });
    $('.recommendation').slick({
        prevArrow: '<button type = "button" class = "recommendation-prev"></ button>',
        nextArrow: '<button type = "button" class = "recommendation-next"></ button>',
        slidesToShow: 2,
        slidesToScroll: 2
    });



    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        },
        animation: {
            effects: 'fade translateZ(-100px)'
        }
    });
})