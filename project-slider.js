const swiper = new Swiper('.project-swiper', {
  loop: true,
  speed: 900,
  effect: 'fade',
  fadeEffect: { crossFade: false },
  autoplay: { delay: 4500, disableOnInteraction: false },
  pagination: {
    el: '.project-pagination',
    clickable: true,
  },
});