$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});
var slider;

$(document).ready(function () {
    sliderInit();
    // Call the function on document ready and on window resize
    sliderUpdate();
    $(window).resize(sliderUpdate);

    navInit();

});

function sliderInit() {
    $('.common-banner-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 500000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    slider = $('.packages-list').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 50000,
        slidesToShow: 3,
        slidesToScroll: 1
    });
}

// Function to update slidesToShow based on screen size
function sliderUpdate() {
    var screenWidth = $(window).width();
    if (screenWidth < 767) {
        slider.slick('slickSetOption', 'slidesToShow', 1);
    }
    else if (screenWidth < 991) {
        slider.slick('slickSetOption', 'slidesToShow', 2);
    } else {
        slider.slick('slickSetOption', 'slidesToShow', 3);
    }
}

function navInit() {
    $('.nav-toggle').click(function(){
       $('.travel-navigation-wrapper').toggleClass('open');
    });

    $('.travel-navigation-wrapper > nav > ul > li > ul').parent('li').addClass('hasChildren');

    $('.travel-navigation-wrapper > nav > ul >  li > a').on('click', function (e) {
        e.stopPropagation();
        if($(this).parents('li').hasClass('open')){
            $('.travel-navigation-wrapper > nav > ul >  li').removeClass('open');
            $(this).parents('li').removeClass('open');
        }else{
            $('.travel-navigation-wrapper > nav > ul >  li').removeClass('open');
            $(this).parents('li').addClass('open');
        }
    });

    $('.navigation-container > ul >  li > ul > li').on('click', function () {
        if($(this).hasClass('open-three')){
            $(this).removeClass('open-three');
        }else{
            $(this).parents('ul').parents('li').addClass('open');
            $('.navigation-container > ul >  li > ul > li').removeClass('open-three');
            $(this).addClass('open-three');
        }
    });

/*    $('.has-submenu > a').click(function (e) {
        event.preventDefault();
    })*/

    /*$('.menu-item-has-children').click(function () {
        $(this).parent('li').children('ul').addClass('open');
    })*/
}