const technic = document.querySelector('.technic');

const button = technic.querySelector('.brands-button');
const buttonTech = technic.querySelector('.technic__swiper');
const span = technic.querySelector('.brands-button__text');

let spanText = 'Показать все';
span.textContent = spanText;

button.addEventListener('click', function() {
  if (spanText === 'Показать все') {
      spanText = 'Скрыть';
      span.classList.toggle('brands-button__text_open');
      buttonTech.classList.toggle('technic__swiper_open');
  } else {
      spanText = 'Показать все';
      span.classList.toggle('brands-button__text_open');
      buttonTech.classList.toggle('technic__swiper_open');
};

  span.textContent = spanText;
 
});