import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initRewiewsSlider = () => {
  const rewiewsContainer = document.querySelector('.rewiews__slider');
  const rewiewsControl = document.querySelector('.rewiews__arrows');

  rewiewsControl.removeAttribute('data-nojs');

  const rewiewsSlider = new Swiper(rewiewsContainer, {
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 30,
    speed: 300,

    navigation: {
      nextEl: '.rewiews__arrows-next',
      prevEl: '.rewiews__arrows-prev',
    },
  });

  return rewiewsSlider;
};

export {initRewiewsSlider};
