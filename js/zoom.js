'use strict';
window.addEventListener('DOMContentLoaded', () => {
  class Img {
    constructor(el) {
      this.cards = document.querySelectorAll(el.cards)
      this.view = document.querySelector(el.view)
      this.closeBtn = document.querySelector(el.closeBtn)
      this.viewImg = document.querySelector(el.viewImg)
      this.body = document.querySelector(el.body);


      const mainViewImg = this.viewImg
      const viewArea = this.view
      const closeViewBtn = this.closeBtn

      closeViewBtn.addEventListener('click', () => {
        viewArea.classList.toggle('active')
      })
      for (let i = 0; i < this.cards.length; i++) {
        const element = this.cards[i];
        element.addEventListener('dblclick', function () {
          select(this)
          viewArea.classList.add('active')
        })
      }
      function select(img) {
        let parentDiv = img.closest('.card');
        let mainImg = parentDiv.querySelector('img');
        let imgAtt = mainImg.getAttribute('src');
        mainViewImg.setAttribute('src', `${imgAtt}`)
      }
    }
  }

  new Img({
    cards: '.card',
    view: '.view',
    viewImg: '.view__img',
    closeBtn: '.view__close',
    body: 'body'
  })

})