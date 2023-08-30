import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initInstructorsSlider = () => {

  const instructorsContainer = document.querySelector('.instructors__slider');
  const instructorsControl = document.querySelector('.instructors__arrows');

  instructorsControl.removeAttribute('data-nojs');

  const instructorsSlider = new Swiper(instructorsContainer, {
    allowTouchMove: isMobile(),
    initialslide: 0,
    speed: 300,
    loop: false,
    simulateTouch: true,

    breakpoints: {

      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: '.instructors__arrows-next',
      prevEl: '.instructors__arrows-prev',
    },
  });

  return instructorsSlider;
};

export {initInstructorsSlider};
