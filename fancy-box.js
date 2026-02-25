$(document).ready(function() {
  $('[data-fancybox="projects"]').fancybox({
    buttons: ['zoom','slideShow','fullScreen','close'],
    loop: true,
    transitionEffect: 'fade',
    thumbs: { autoStart: true }
  });
});