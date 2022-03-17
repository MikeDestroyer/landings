import {Autoplay, Keyboard, Navigation, Pagination, Swiper} from "swiper";

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

export {Swiper};