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

export {initVideoPlayer};
