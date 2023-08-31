import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initToursSlider = () => {

  const toursContainer = document.querySelector('.tours__slider');
  const toursControl = document.querySelector('.tours__arrows');

  toursControl.removeAttribute('data-nojs');

  const tourslider = new Swiper(toursContainer, {
    allowTouchMove: isMobile(),
    speed: 300,

    breakpoints: {

      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: '.tours__arrows-next',
      prevEl: '.tours__arrows-prev',
    },
  });

  return tourslider;
};

export {initToursSlider};
