
  const roohinClientsSlider = new Swiper(".roohin-clients__slider", {
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 40,
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  });
