import * as bootstrap from 'bootstrap';

import './scss/main.scss';
import './modules/ymap';



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
        preset: "islands#redDotIcon",
        cursor: "pointer",
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
}

