"use strict";

window.addEventListener('DOMContentLoaded', () => {
  class Slider {
    constructor(el) {
      this.slider = document.querySelector(el.slider);
      this.sliderLine = document.querySelector(el.sliderLine);
      this.next = document.querySelector(el.next);
      this.prev = document.querySelector(el.prev);
      this.slides = this.sliderLine.children
      this.dir = el.direction.toUpperCase() == "Y" ? "Y" : "X"
      this.autoPlay = el.autoPlay
      this.interval = el.autoPlayInterval

      this.width = this.sliderLine.clientWidth
      this.height = this.sliderLine.clientHeight
      this.sliderLine.style = `position:relative;    
                                height:${this.height}px;
                                width:${this.width}px;
                                overflow:hidden`

      this.active = 0
      this.moveSize = this.dir == "X" ? this.width : this.height
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i];
        slide.style = `position:absolute;
                          width:${this.width}px;
                          height:${this.height}px`
        if (i != this.active) {
          slide.style.transform = `translate${this.dir}(${this.moveSize}px)`
        }
        if (i == this.slides.length - 1) {
          slide.style.transform = `translate${this.dir}(${-this.moveSize}px)`
        }
      }
      this.next.addEventListener('click', () => this.move(this.next))
      this.prev.addEventListener('click', () => this.move(this.prev))

      if (this.autoPlay) {
        this.play = setInterval(() => {
          this.move(this.next)
        }, this.interval);
        this.slider.onmouseover = () => clearInterval(this.play)
        this.slider.onmouseout = () =>
          this.play = setInterval(() => {
            this.move(this.next)
          }, this.interval);
      }

    }
    disableBtn() {
      this.next.disabled = true
      this.prev.disabled = true
      setTimeout(() => {
        this.next.disabled = false
        this.prev.disabled = false
      }, 1200);
    }
    move(btn) {
      this.disableBtn()
      let leftOrRight = btn == this.next ? -this.moveSize : this.moveSize
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i];
        if (i != this.active) {
          slide.style.transform = `translate${this.dir}(${-leftOrRight}px)`
          slide.style.transition = `0s`
        }
      }
      this.slides[this.active].style.transform = `translate${this.dir}(${leftOrRight}px)`
      this.slides[this.active].style.transition = `1s`
      this.changeActive(btn)
      this.slides[this.active].style.transform = `translate${this.dir}(0px)`
      this.slides[this.active].style.transition = `1s`
    }
    changeActive(btn) {
      if (btn == this.next) {
        this.active++
        if (this.active == this.slides.length) {
          this.active = 0
        }
      } else if (btn == this.prev) {
        this.active--
        if (this.active < 0) {
          this.active = this.slides.length - 1
        }
      }
    }

  }
  new Slider({
    slider: '.slider',
    sliderLine: ".slider__line",
    direction: "X",
    next: '.slider__next',
    prev: '.slider__prev',
    autoPlay: true,
    autoPlayInterval: 8000
  })
})