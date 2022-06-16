'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const upBtn = document.querySelector('.up__btn'),
    body = document.querySelector('body');


  //  Scroll-up functions
  window.addEventListener('scroll', () => {
    upBtn.classList.toggle('active', window.scrollY > 300)
  })
  upBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  })

  //  Scroll-down animations

  const title = document.querySelector('.category__title'),
    category = document.querySelector('.category'),
    categoryCards = document.querySelectorAll('.category__card'),
    product = document.querySelector('.product'),
    productCards = document.querySelectorAll('.product__card'),
    productTitle = document.querySelector('.product__title'),
    proDesc = document.querySelector('.pro__desc'),
    specialPro = document.querySelector('.special__product'),
    specialProTitle = document.querySelector('.special__product-title'),
    specialProDesc = document.querySelector('.spec__pro-desc'),
    specialCards = document.querySelectorAll('.special__card'),
    specialistSection = document.querySelector('.specialist__section'),
    specTitle = document.querySelector('.spec__title'),
    specDesc = document.querySelector('.spec__desc'),
    specialistCards = document.querySelectorAll('.specialist__card'),
    newsSection = document.querySelector('.news__section'),
    newsCard = document.querySelector('.news__card'),
    newsBoxItems = document.querySelectorAll('.gallery__box-item'),
    pageFooter = document.querySelector('.page__footer'),
    footerContentItems = document.querySelectorAll('.footer__content-item'),
    zero = 0;

  window.addEventListener('scroll', () => {
    if (scrollY > category.offsetTop - category.clientHeight / 2) {
      title.style = 'transform:scale(1)'
      categoryCards.forEach(item => {
        item.style = `transform:translateX(${zero});
                                opacity:${1};
                                z-index:${1}`
      })
    } if (window.scrollY > product.offsetTop - product.clientHeight / 2) {
      productTitle.style = `transform:translateY(${zero});
                            opacity: 1;
                            z-index: 1`
      proDesc.style = `transform:translateY(${zero});
                       opacity: 1;
                       z-index: 1`
      productCards.forEach(item => {
        item.style = `transform:translateY(${zero});
                       opacity: 1;
                       z-index: 1;`
      })
    } if (window.scrollY > specialPro.offsetTop - specialPro.clientHeight / 2) {
      specialProTitle.style = `transform:scale(1);
                               transform: rotateY(1080deg);
                              opacity: 1;,
                              z-index: 1;`
      specialProDesc.style = `transform:scale(1);
                              opacity: 1;`
      specialCards.forEach(item => {
        item.style = `transform:translateX(${zero}) rotateY(360deg);
                      opacity: 1;
                      transition: 1.5s`
      })
    } if (window.scrollY > specialistSection.offsetTop - specialistSection.clientHeight / 2) {
      specTitle.style = `transform: translateY(${zero}) scale(1);
                        opacity: 1;`
      specDesc.style = `transform: translateY(${zero}) scale(1);
                        opacity: 1;`
      specialistCards.forEach(item => {
        item.style = ` transform: translateY(${zero}) translateX(${zero});
                       opacity: 1;
                       transition: 1.5s`
      })
    } if (scrollY > newsSection.offsetTop - newsSection.clientHeight / 2) {
      newsCard.style = `transform: scale(1); opacity: 1`
      newsBoxItems.forEach(item => {
        item.style = `transform:scale(1);
                      opacity: 1`
      })
    } if(scrollY > pageFooter.offsetTop - pageFooter.clientHeight / 2) {
      footerContentItems.forEach(item => {
        item.style = `transform:translateX(${zero}); opacity: 1`
      })
    }

  })

})