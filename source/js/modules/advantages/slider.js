import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initAdvantagesSlider = () => {
  const advantagesContainer = document.querySelector('.advantages__slider');
  const advantagesControl = document.querySelector('.advantages__arrows');
  const desktopWidth = window.matchMedia('(min-width: 1200px)');

  advantagesControl.removeAttribute('data-nojs');

  const createSlider = () => {
    if (advantagesContainer) {
      return new Swiper(advantagesContainer, {
        allowTouchMove: isMobile(),
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 300,
        loop: true,
        navigation: {
          nextEl: '.advantages__arrows-next',
          prevEl: '.advantages__arrows-prev',
        },
      });
    }

    return null;
  };

  const advantagesCreateSlider = () => {
    let swiper = null;

    const isValid = () => {
      return desktopWidth.matches;
    };

    if (isValid()) {
      swiper = createSlider();
    }

    window.addEventListener('resize', () => {
      if (isValid()) {
        if (!swiper) {
          swiper = createSlider();
        }
      } else {
        if (swiper) {
          swiper.destroy();
          swiper = null;
        }
      }
    });
  };

  return advantagesCreateSlider(createSlider);
};

export {initAdvantagesSlider};
