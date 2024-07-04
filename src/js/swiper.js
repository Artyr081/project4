import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


let swiperConfig = {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  modules: [Navigation, Pagination],
    
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: { 320: { enabled: true, }, 768: { enabled: false, } } 
}

let swiper = new Swiper('.swiper', swiperConfig);

function checkScreenWidth() {
  if (window.innerWidth > 767) {
    swiper.delete;
  } else {
    swiper = new Swiper('.swiper', swiperConfig);
  }
}
window.addEventListener('resize', checkScreenWidth);
checkScreenWidth();