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
        simulateTouch: true,
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


export { initHeroSlider, initToursSlider, initInstructorsSlider, initRewiewsSlider, initAdvantagesSlider, initGallerySlider };
