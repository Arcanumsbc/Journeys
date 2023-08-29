// iframe
// iframe video

const initVideoPlayer = () => {
  if (document.querySelector('.video')) {
    const wrapper = document.querySelector('.video');
    const button = wrapper.querySelector('button');
    const iframe = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

    button.addEventListener('click', () => {
      wrapper.innerHTML = iframe;
    }, {once: true});
  }
  return null;
};

// iframe audio
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

export {initVideoPlayer, initAudioPlayer};
