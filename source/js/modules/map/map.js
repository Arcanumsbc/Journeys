const ymaps = window.ymaps;

function initMap() {
  const coordinate = [55.774836, 37.632664];
  let createMap = new ymaps.Map('map', {
    center: coordinate,
    zoom: 16});

  let createPlacemark = new ymaps.Placemark(coordinate, {}, {
    hintContent: 'Собственный значок метки',
    iconLayout: 'default#image',
    iconImageHref: './img/svg/map-pin.svg',
    iconImageSize: [48, 48],
    iconImageOffset: [-20, -15]});

  createMap.controls.remove('geolocationControl');
  createMap.controls.remove('searchControl');
  createMap.controls.remove('trafficControl');
  createMap.controls.remove('fullscreenControl');
  createMap.controls.remove('rulerControl');
  createMap.behaviors.disable(['scrollZoom']);

  createMap.geoObjects.add(createPlacemark);
}

const initContactsMap = () => {
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();
    ymaps.ready(initMap);
  }
};

export {initContactsMap};
