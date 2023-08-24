import {isMobile} from '../utils/is-mobile';

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

const initToursSlider = () => {

  const toursContainer = document.querySelector('.tours__slider');
  const toursControl = document.querySelector('.tours__arrows');

  toursControl.removeAttribute('data-nojs');

  const tourslider = new Swiper(toursContainer, {
    allowTouchMove: isMobile(),
    initialslide: 0,
    speed: 300,
    loop: false,
    autoHeight: true,
    simulateTouch: true,

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

const initInstructorsSlider = () => {

  const instructorsContainer = document.querySelector('.instructors__slider');
  const instructorsControl = document.querySelector('.instructors__arrows');

  instructorsControl.removeAttribute('data-nojs');

  const instructorsSlider = new Swiper(instructorsContainer, {
    allowTouchMove: isMobile(),
    initialslide: 0,
    speed: 300,
    loop: false,
    autoHeight: true,
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

export { initHeroSlider, initToursSlider, initInstructorsSlider };
