

//mapbox initialize
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [174.7762, -41.2865],
    zoom: 13
});






//initialize swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});