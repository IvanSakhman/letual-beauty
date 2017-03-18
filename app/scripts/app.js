import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'swiper';
import 'style!css!swiper/dist/css/swiper.css';

$(() => {
	svg4everybody();

    let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 50,
        slidesPerView: 4,
        autoplay: 1000,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            425: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    let cross = $( ".cross" );
    let menu = $( ".menu" );
    let hamburger = $( ".hamburger" );

    cross.hide();
    menu.hide();
    hamburger.click(function() {
        menu.slideToggle( 100, function() {
            hamburger.hide();
            cross.show();
        });
    });

    cross.click(function() {
        menu.slideToggle( 100, function() {
            cross.hide();
            hamburger.show();
        });
    });
});
