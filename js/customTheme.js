"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const customBtn = document.querySelector('.custom__bg-btn'),
        pageHeader = document.querySelector('.page__header'),
        viewBtn = document.querySelectorAll('.view__btn'),
        phoneIcon = document.querySelectorAll('.specialist__phone'),
        position = document.querySelectorAll('.position'),
        newsCardBtn = document.querySelector('.news__card-btn'),
        upBtn = document.querySelector('.up__btn'),
        priceBar = document.querySelectorAll('.price__bar'),
        cardTitle = document.querySelector('.card__title');
  customBtn.addEventListener('click', () => {
    let value = prompt('Enter your custom color')
    pageHeader.style.setProperty(`--header__bg`, `${value}`)
    viewBtn.forEach(item => {
      item.style.setProperty(`--yellow`, `${value}`)
    })
    phoneIcon.forEach(item => {
      item.style.setProperty(`--yellow`, `${value}`)
    })
    position.forEach(item => {
      item.style.setProperty(`--yellow`, `${value}`)
    })
    newsCardBtn.style.setProperty(`--yellow`, `${value}`)
    upBtn.style.setProperty(`--yellow`, `${value}`)
    priceBar.forEach(item => {
      item.style.setProperty(`--yellow`, `${value}`)
    })
    cardTitle.forEach(item => {
      item.style.setProperty(`-yellow`, `${value}`)
    })
  })
})