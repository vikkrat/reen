import $ from "jquery";
import ScrollReveal from 'scrollreveal'
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import './sass/small_carousel/slick_theme_dots.css';
import './sass/input.sass';

import './css/fontawesome.all.min.css';


const menu = $('.wrapper a');

menu.on('click', function () {
    const menuNum = $(this).data('menu');
    $(this).toggleClass('menu-' + menuNum + '-active');
});

$(document).ready(function () {
    $('#menu-1').click(function () {
        $('#menu__button_onclick').toggleClass('show');
    });
});


$('.small_carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows: false,
    responsive: [{

        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {

        breakpoint: 1060,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }

    }, {

        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }

    }]
});

$('.big_carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: '<span class="slick-next"><i class="fas fa-angle-right"></i></span>',
    prevArrow: '<span class="slick-prev"><i class="fas fa-angle-left"></i></span>',
    responsive: [{

        breakpoint: 560,
        settings: {
            arrows: false,
        }
    }]
});

ScrollReveal().reveal('.hidden-show-element', {
    delay: 500,
    duration: 800,
    reset: true
});
