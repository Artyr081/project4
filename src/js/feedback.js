let aside = document.querySelector('.aside');
let asideTel = aside.querySelector('.item-bottom__list_img2');
let feedback = document.querySelector('.feedback');
let feedbackClose = feedback.querySelector('.feedback__button');
let overlay = document.querySelector('.overlay');
let headerTel = document.querySelector('.floy-5');
let body = document.querySelector('body');

asideTel.addEventListener('click', function() {
  feedback.classList.add('feedback_open');
  overlay.classList.add('overlay__feedback');
  body.classList.add('scroll-none');
});

feedbackClose.addEventListener('click', function() {
  feedback.classList.remove('feedback_open');
  overlay.classList.remove('overlay__feedback');
  body.classList.remove('scroll-none');
});

overlay.addEventListener('click', function() {
  feedback.classList.remove('feedback_open');
  overlay.classList.remove('overlay__feedback');
  body.classList.remove('scroll-none');
});

headerTel.addEventListener('click', function() {
  feedback.classList.add('feedback_open');
  overlay.classList.add('overlay__feedback');
  body.classList.add('scroll-none');
});


