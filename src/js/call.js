let aside = document.querySelector('.aside');
let asideTel = aside.querySelector('.item-bottom__list_img1');
let call = document.querySelector('.call');
let callClose = call.querySelector('.call__button');
let overlay = document.querySelector('.overlay');
let headerCall = document.querySelector('.floy-6');
let body = document.querySelector('body');


asideTel.addEventListener('click', function() {
  call.classList.add('call_open');
  overlay.classList.add('overlay__call');
  body.classList.add('scroll-none');
});

callClose.addEventListener('click', function() {
  call.classList.remove('call_open');
  overlay.classList.remove('overlay__call');
  body.classList.remove('scroll-none');
});

overlay.addEventListener('click', function() {
  call.classList.remove('call_open');
  overlay.classList.remove('overlay__call');
  body.classList.remove('scroll-none');
});

headerCall.addEventListener('click', function() {
  call.classList.add('call_open');
  overlay.classList.add('overlay__call');
  body.classList.add('scroll-none');
});