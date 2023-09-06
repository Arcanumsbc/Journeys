import {initAudioPlayer, stopAudioPlayer} from './audio.js';
import {initVideoPlayer, stopVideoPlayer} from './video.js';

const heroSliderPagination = document.querySelector('.hero__control');

const initHero = () => {
  initAudioPlayer();
  initVideoPlayer();
  heroSliderPagination.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('swiper-pagination-bullet')) {
      stopVideoPlayer();
      stopAudioPlayer();
    }
  });
};

export {initHero};
