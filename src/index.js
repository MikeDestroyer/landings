import * as bootstrap from 'bootstrap';
import * as jquery from 'jquery';

import './scss/main.scss';
import './modules/ymap';


const $ = require( "jquery" );

ymaps.ready(init);
function init(){
    let pos = [53.911747, 27.540074];
    let myMap = new ymaps.Map("map", {
        center: pos,
        zoom: 10,
        controls: ['fullscreenControl']
    });
    let myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: pos // координаты точки
        }
    }, {
        preset: "islands#redIcon",
        cursor: "pointer",
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
}



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

0
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

