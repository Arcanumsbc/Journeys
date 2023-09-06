import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initRewiewsSlider = () => {
  const rewiewsContainer = document.querySelector('.rewiews__slider');
  const rewiewsControl = document.querySelector('.rewiews__arrows');

  rewiewsControl.removeAttribute('data-nojs');

  const rewiewsSlider = new Swiper(rewiewsContainer, {
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    // autoHeight: true,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    speed: 300,

    breakpoints: {
      1200: {
        autoHeight: false,
      },

      768: {
        autoHeight: false,
      },

      320: {
        autoHeight: true,
      },
    },

    navigation: {
      nextEl: '.rewiews__arrows-next',
      prevEl: '.rewiews__arrows-prev',
    },
  });

  return rewiewsSlider;
};

export {initRewiewsSlider};
