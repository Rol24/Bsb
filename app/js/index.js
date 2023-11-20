//// ================================ Imports ======================================
//scss
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'nouislider/dist/nouislider.css';
import '../scss/index.scss';

//js
import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import IMask from 'imask';
import Choices from 'choices.js';
import autoComplete from '@tarekraafat/autocomplete.js';
import validate from 'validate.js';
import ApexCharts from 'apexcharts';
import { rippleEffect, Ripple } from 'data-ripple';
import noUiSlider from 'nouislider';
import Scrollbar from 'smooth-scrollbar';

//// ================================ Code ======================================


const swiperLogo = new Swiper('.swiper__up-inner', {
  modules: [Navigation],
  spaceBetween: 45,
  slidesPerView: 3.5,
  navigation: {
    nextEl: '.swiper__up-button-next',
    prevEl: '.swiper__up-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 75
    },
    920: {
      slidesPerView: 5,
      spaceBetween: 64
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 64
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 64
    },
  }

});
const swiperNews = new Swiper('.swiper__down-inner', {
  modules: [Navigation],
  spaceBetween: 40,
  slidesPerView: 1.5,
  navigation: {
    nextEl: '.swiper__down-button-next',
    prevEl: '.swiper__down-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }

});

const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
  console.log("box");
});


function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest('.box');
  let currentContent = e.target.nextElementSiblng;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")){
    // currentContent.style.maxHeight = currentContent.scrollHeight + "150px";
  } else {
    // currentContent.style.maxHeight = 0
  }
};

