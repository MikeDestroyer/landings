"use strict"

import * as bootstrap from 'bootstrap';
import Swiper from './modules/swiper';


import 'swiper/css/bundle';
import './scss/main.scss';
import {scrollTo} from "./modules/scrolling";




if (document.getElementById('video')) {
    const video = document.getElementById('video')
    if (window.screen.width > 576) {
        document.getElementById('video').play();
    } else {
        video.remove()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('#to-top') && document.querySelector('#to-down')) {
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
    }
});