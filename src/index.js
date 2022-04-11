"use strict";
import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cardsMenu';
import timer from './modules/timer';
import form from './modules/form';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

document.addEventListener("DOMContentLoaded", () => {
  const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 50000);
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerID);
  timer(".timer", '2022-05-20');
  cards();
  form('form', modalTimerID);
  slider({
    container : '.offer__slider',
    nextAr : '.offer__slider-next',
    slide :'.offer__slide',
    prevAr : '.offer__slider-prev',
    totalCount : '#total',
    currentCount : '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  calc();
});

   /*
 fetch('http://localhost:3000/menu'
   ).then(data => data.json()
   ).then(res => console.log(res));

  Resources
  http://localhost:3000/menu
  http://localhost:3000/requests

  Home
  http://localhost:3000
  */
  