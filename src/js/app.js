import * as header from './modules/header.js';
import * as modal from './modules/modal.js';
import * as webp from './modules/webp.js';
import Swiper, { Navigation} from 'swiper';

let aside = document.querySelector('.aside');
let btnAside = document.querySelector('.plus__inner');
let content = document.querySelector('.content');

btnAside.addEventListener('click', () =>{
    aside.classList.toggle('disp-none');
    btnAside.classList.toggle('rotate');
    content.classList.toggle('w100');

});

new Swiper('.slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    mousewheel:{
        sensitivity: 1,
    },
});

let acc = document.getElementsByClassName("delivery__btn");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}