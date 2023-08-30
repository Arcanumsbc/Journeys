import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initRewiewsSlider = () => {
  const rewiewsContainer = document.querySelector('.rewiews__slider');
  const rewiewsControl = document.querySelector('.rewiews__arrows');

  rewiewsControl.removeAttribute('data-nojs');

  const rewiewsSlider = new Swiper(rewiewsContainer, {
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    initialslide: 2,
    autoHeight: true,
    spaceBetween: 30,
    speed: 300,
    simulateTouch: true,

    navigation: {
      nextEl: '.rewiews__arrows-next',
      prevEl: '.rewiews__arrows-prev',
    },
  });

  return rewiewsSlider;
};

export {initRewiewsSlider};
