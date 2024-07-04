let menuBtn = document.querySelector('.header__button');
let asideOpen = document.querySelector('.aside');
let asideClose = asideOpen.querySelector('.button_position1');
let overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function() {
  overlay.classList.toggle('overlay_open');
  asideOpen.classList.toggle('aside_open'); 
});


asideClose.addEventListener('click', function() {
  overlay.classList.toggle('overlay_open');
  asideOpen.classList.toggle('aside_open');
});

overlay.addEventListener('click', function() {
  overlay.classList.toggle('overlay_open');
  asideOpen.classList.toggle('aside_open');
});
