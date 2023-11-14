//// ================================ Imports ======================================
//scss
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'nouislider/dist/nouislider.css';
import '../scss/index.scss';

//js
import $ from 'jquery';
import Swiper,{ Navigation, Pagination } from 'swiper';
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


const swiperLogo = new Swiper('.swiper__up-inner',  {
    modules: [Navigation],
    spaceBetween: 64,
    slidesPerView: 6,
    navigation:{
        nextEl:'.swiper__up-botton-next',
        prevEl:'.swiper__up-botton-prev',
    },
    
  });
const swiperNews = new Swiper('.swiper__down-inner',  {
    modules: [Navigation],
    // spaceBetween: 30,
    // slidesPerView: 6,
    navigation:{
        nextEl:'.swiper__down-botton-next',
        prevEl:'.swiper__down-botton-prev',
    },
    
  });