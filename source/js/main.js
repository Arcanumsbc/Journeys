import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './utils/scroll-lock';

import {Burger} from './modules/menu/burger';
import {initHeroSlider} from './modules/hero/slider';
import {initVideoPlayer} from './modules/hero/video';
import {initAudioPlayer} from './modules/hero/audio';
import {initToursSlider} from './modules/tours/slider';
import {initInstructorsSlider} from './modules/instructors/slider';
import {initRewiewsSlider} from './modules/rewiews/slider';
import {initAdvantagesSlider} from './modules/advantages/slider';
import {initGallerySlider} from './modules/gallery/slider';
import {initContactsMap} from './modules/map/map';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    const burger = new Burger();
    window.burger = burger;
    burger.init();
    initHeroSlider();
    initVideoPlayer();
    initAudioPlayer();
    initToursSlider();
    initInstructorsSlider();
    initRewiewsSlider();
    initAdvantagesSlider();
    initGallerySlider();
    initContactsMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
