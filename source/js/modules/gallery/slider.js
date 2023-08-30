import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initGallerySlider = () => {
  const galleryContainer = document.querySelector('.gallery__slider');
  const galleryControl = document.querySelector('.gallery__arrows');

  galleryControl.removeAttribute('data-nojs');

  const gallerySlider = new Swiper(galleryContainer, {
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 5,
    speed: 300,
    simulateTouch: true,

    navigation: {
      nextEl: '.gallery__arrows-next',
      prevEl: '.gallery__arrows-prev',
    },
  });

  return gallerySlider;
};

export {initGallerySlider};
