import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initHeroSlider = () => {

  const heroContainer = document.querySelector('.hero__slider');
  const heroControl = document.querySelector('.hero__control');

  heroControl.removeAttribute('data-nojs');

  const heroSlider = new Swiper(heroContainer, {
    allowTouchMove: isMobile(),
    slidesPerView: 1,
    initialSlide: 0,
    speed: 300,
    loop: true,
    autoHeight: true,
    simulateTouch: true,
    censeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  return heroSlider;
};

export {initHeroSlider};