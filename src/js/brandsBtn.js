const button = document.querySelector('.brands-button');
const buttonBrend = document.querySelector('.brands__swiper');
const span = document.querySelector('.brands-button__text');

let spanText = 'Показать все';
span.textContent = spanText;

button.addEventListener('click', function() {
  if (spanText === 'Показать все') {
      spanText = 'Скрыть';
      span.classList.toggle('brands-button__text_open');
      buttonBrend.classList.toggle('swiper_open');
  } else {
      spanText = 'Показать все';
      span.classList.toggle('brands-button__text_open');
      buttonBrend.classList.toggle('swiper_open');
};

  span.textContent = spanText;
 
});