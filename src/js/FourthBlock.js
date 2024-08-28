export default class FourthBlock {
  constructor(block, sliders) {
    this.body = block;
    this.sliders = sliders;
    this.up = 0;
    this.currentSlider = 1;
    this.wrapper = block.querySelector('.sliderBlock__fourth');
    this.counter = block.querySelector('.sliderNumbers__fourth');
    this.change = this.change.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  init() {
    this.bindImages();
    this.bindButtons();
    this.setCounter();
  }

  bindImages() {
    this.sliders.forEach((element) => {
      const newSlider = this.newSlider(element);
      const newCount = document.createElement('li');
      newCount.id = this.sliders.indexOf(element) + 1;
      newCount.innerText = this.sliders.indexOf(element) + 1 > 10 ? (this.sliders.indexOf(element) + 1) : `0${this.sliders.indexOf(element) + 1}`;
      newCount.addEventListener('click', this.change);
      newSlider.id = newCount.id;
      this.wrapper.appendChild(newSlider);
      this.counter.appendChild(newCount);
    });

    this.wrapper.appendChild(this.newSlider(this.sliders[0]));
    this.wrapper.appendChild(this.newSlider(this.sliders[1]));

    this.wrapper.parentElement.style.height = `${(this.wrapper.firstElementChild.offsetHeight + 30) * this.sliders.length}px`;
  }

  newSlider(url) {
    const newSlider = document.createElement('li');
    newSlider.className = 'slider__fourth';
    newSlider.style.backgroundImage = `url(${url})`;
    return newSlider;
  }

  bindButtons() {
    const buttons = Array.from(this.body.querySelectorAll('.navButton__fourth'));
    buttons.forEach((button) => {
      button.addEventListener('click', this.change);
    });
  }

  change(e) {
    const height = this.wrapper.firstElementChild.offsetHeight + 30;
    switch (e.target.id) {
      case 'next': this.next(height);
        break;
      case 'back': this.back(height);
        break;
      default: this.getToSlide(e.target.id, height);
    }
    if (screen.width > 640 || (screen.width < 640 && screen.height < screen.width)) { 
      this.wrapper.style.transform = `translateY(${this.up}px)`; 
    } else if (screen.width < 640 && screen.height > screen.width) { 
      this.wrapper.style.transform = `translateX(${this.up}px)`; 
    }
    this.setCounter();
  }

  next(height) {
    this.up -= height;
    this.currentSlider += 1;
    if (this.currentSlider > this.sliders.length) this.currentSlider = 1;
    if (this.up < -(height * (this.sliders.length - 1))) this.up = 0;
  }

  back(height) {
    if (this.up === 0) {
      this.up = -(height * (this.sliders.length - 1));
      this.currentSlider = this.sliders.length;
      return;
    }
    this.up += height;
    this.currentSlider -= 1;
  }

  getToSlide(id, height) {
    this.up = 0 - (height * (id - 1));
    this.currentSlider = parseInt(id);
  }

  setCounter() {
    this.counter.childNodes.forEach((element) => {
      parseInt(element.id) === this.currentSlider ? element.className = 'selected__fourth' : element.classList = '';
    });
  }
}
