import * as bootstrap from 'bootstrap';
import {Swiper, Pagination, Scrollbar, Keyboard, Navigation, Autoplay} from 'swiper';


import 'swiper/css/bundle';
import './scss/main.scss';







// функция скроллинга
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    const btnUp = document.querySelector('#to-top');
    const btnDown = document.querySelector('#to-down');

    window.addEventListener('scroll', function () {
        if (scrollY > 798) {
            btnUp.classList.add('show');
        } else {
            btnUp.classList.remove('show');
        }
    });

    btnUp.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 200);
    }

    btnDown.onclick = function (click) {
        click.preventDefault();
        scrollTo(790, 300);
    }
});



Swiper.use([Pagination, Keyboard, Navigation, Autoplay]);
const swiper = new Swiper(".mySwiper", {
    // slidesPerView: "auto",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        768:{
        slidesPerView: 2,
        spaceBetween: 30
        }
    },
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});