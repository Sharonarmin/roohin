const swiper = new Swiper('.project-swiper', {
  loop: true,
  speed: 800,
  effect: 'fade',
  fadeEffect: { crossFade: false },
  autoplay: { delay: 1000, disableOnInteraction: false },
  pagination: {
    el: '.project-pagination',
    clickable: true,
  },
});