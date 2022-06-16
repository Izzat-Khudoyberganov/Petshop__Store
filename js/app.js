"use strict";

window.addEventListener('DOMContentLoaded', () => {

  // Variables

  const burgerMenu = document.querySelector('.burger__menu'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body'),
    view = document.querySelector('.view');


  burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
    burgerMenu.classList.toggle('active')
  })
})