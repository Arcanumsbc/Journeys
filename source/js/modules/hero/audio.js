const initAudioPlayer = () => {
  if (document.querySelector('.audio')) {
    const wrapper = document.querySelector('.audio');
    const button = wrapper.querySelector('.audio__play');
    const iframe = `
    <iframe frameborder="0" style="border:none;width:100%;height:100%;" width="100%" height="100%" src="https://music.yandex.ru/iframe/#track/112912322/25474374">Слушайте <a href='https://music.yandex.ru/album/25474374/track/112912322'>001. Конец фронтенда, одинаковые фреймворки и логические свойства</a> на Яндекс Музыке</iframe>
  `;

    button.addEventListener('click', () => {
      wrapper.innerHTML = iframe;
    }, {once: true});
  }
  return null;
};

export {initAudioPlayer};
