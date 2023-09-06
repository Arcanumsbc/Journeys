const wrapper = document.querySelector('.video');
const heroMediaPrew = document.querySelector('[data-prew]');
const button = document.querySelector('.video__button');
const iframe = document.createElement('iframe');

const initVideoPlayer = () => {
  button.addEventListener('click', () => {
    heroMediaPrew.classList.add('is-hidden');
    button.classList.add('is-hidden');
    iframe.setAttribute('tabindex', '-1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('style', 'border:none');
    iframe.setAttribute('width', '482');
    iframe.setAttribute('heigth', '317');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?controls=0&autoplay=1');
    wrapper.append(iframe);
  });
};

const stopVideoPlayer = () => {
  heroMediaPrew.classList.remove('is-hidden');
  button.classList.remove('is-hidden');
  iframe.setAttribute('src', '');
};

export {initVideoPlayer, stopVideoPlayer};
