let aside = document.querySelector('.aside');
let asideTel = aside.querySelector('.item-bottom__list_img1');
let call = document.querySelector('.call');
let callClose = call.querySelector('.call__button');
let overlay = document.querySelector('.overlay');

asideTel.addEventListener('click', function() {
  call.classList.add('call_open');
  overlay.classList.add('overlay__call');
});

callClose.addEventListener('click', function() {
  call.classList.remove('call_open');
  overlay.classList.remove('overlay__call');
});

overlay.addEventListener('click', function() {
  call.classList.remove('call_open');
  overlay.classList.remove('overlay__call');
});