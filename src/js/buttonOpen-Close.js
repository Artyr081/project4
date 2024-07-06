const info = document.querySelector('.info');
const infoHeight = info.querySelector('.info_height');
const infoBtn = info.querySelector('.info__button');
const btnSpan = info.querySelector('.info__next');
const text = info.querySelector('.info__text-mobile_adition');

let btnspanText = 'Читать далее';
btnSpan.textContent = btnspanText;

infoBtn.addEventListener('click', function () {
  if (btnspanText === 'Читать далее') {
    btnspanText = 'Скрыть';
    infoHeight.classList.toggle('info_overflow');
    btnSpan.classList.toggle('info__next_open');

    text.classList.toggle('info__text-mobile_adition_open');


  } else {
    btnspanText = 'Читать далее';
    infoHeight.classList.toggle('info_overflow');
    btnSpan.classList.toggle('info__next_open');


    text.classList.toggle('info__text-mobile_adition_open');
  }

  btnSpan.textContent = btnspanText;
})