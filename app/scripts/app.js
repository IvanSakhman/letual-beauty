import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'swiper';
import 'style!css!swiper/dist/css/swiper.css';

$(() => {
	svg4everybody();

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 50,
        slidesPerView: 4,
        autoplay: 3000,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});
