const wrapper = document.querySelector('.audio');
const button = wrapper.querySelector('.audio__play');
const audioPrew = wrapper.querySelector('[data-audio-prew]');
const iframe = document.createElement('iframe');

const initAudioPlayer = () => {
  button.addEventListener('click', () => {
    audioPrew.classList.add('is-hidden');
    button.classList.add('is-hidden');
    iframe.setAttribute('tabindex', '-1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('style', 'border:none');
    iframe.setAttribute('width', '340');
    iframe.setAttribute('heigth', '220');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374?controls=0&autoplay=1');
    iframe.innerHTML = 'Слушайте 001. Конец фронтенда, одинаковые фреймворки и логические свойства на Яндекс Музыке';
    wrapper.append(iframe);
  });
};

const stopAudioPlayer = () => {
  audioPrew.classList.remove('is-hidden');
  button.classList.remove('is-hidden');
  iframe.setAttribute('src', '');
};

export {initAudioPlayer, stopAudioPlayer};
