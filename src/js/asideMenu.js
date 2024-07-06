let menuBtn = document.querySelector('.header__button');
let asideOpen = document.querySelector('.aside');
let asideClose = asideOpen.querySelector('.button_position1');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
  overlay.classList.add('overlay_open');
  asideOpen.classList.add('aside_open'); 
  body.classList.add('scroll-none');
});


asideClose.addEventListener('click', function() {
  overlay.classList.remove('overlay_open');
  asideOpen.classList.remove('aside_open');
  body.classList.remove('scroll-none');
});

overlay.addEventListener('click', function() {
  overlay.classList.remove('overlay_open');
  asideOpen.classList.remove('aside_open');
  body.classList.remove('scroll-none');
});
