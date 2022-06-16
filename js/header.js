'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const headerLinks = document.querySelectorAll('.nav__link'),
    category = document.querySelector('.category'),
    headerTop = document.querySelector('.header__top'),
    specialist = document.querySelector('#specialist'),
    footer = document.querySelector('#page__footer'),
    product = document.querySelector('#product');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      headerTop.style.background = "rgba(253, 251, 251, 0.814)"
    } else {
      headerTop.style.background = 'transparent'
    }
    for (let i = 0; i < headerLinks.length; i++) {
      headerLinks[i].classList.remove('active')
      if (window.scrollY >= category.offsetTop && window.scrollY <= product.offsetTop) {
        headerLinks[0].classList.remove('active')
        headerLinks[1].classList.add('active')
      } else if (window.scrollY >= (product.offsetTop + 100) && window.scrollY <= specialist.offsetTop - footer.clientHeight / 2) {
        headerLinks[0].classList.remove('active')
        headerLinks[1].classList.add('active')
      } else if (window.scrollY >= specialist.offsetTop && window.scrollY <= footer.offsetTop - footer.clientHeight / 2) {
        headerLinks[1].classList.remove('active')
        headerLinks[2].classList.add('active')
      } else if (window.scrollY > 3000) {
        headerLinks[3].classList.add('active')
      }
    }
  })
})