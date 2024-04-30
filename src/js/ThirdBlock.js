export default class ThirdBlock {
  constructor(block, sliders) {
    this.body = block;
    this.sliders = sliders;
    this.currentSlider = 0;
    this.sliderWindow = block.querySelector(".sliderImage");
    this.counter = block.querySelector(".sliderCounter__third");
    this.change = this.change.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  init() {
    this.bindImage();
    this.bindButtons();
  }

  bindImage() {
    this.sliderWindow.style.backgroundImage = `url(${this.sliders[this.currentSlider]})`;
    this.counter.innerText = this.currentSlider + 1 > 10 ? (this.currentSlider + 1) : '0' + (this.currentSlider + 1);
  }

  bindButtons() {
    const buttons = Array.from(this.body.querySelectorAll(".navArrows__third"));
    buttons.forEach((button) => {
      button.addEventListener("click", this.change);
    });
  }

  change(e) {
    e.target.id === "next" ? this.next() : this.back();
    this.bindImage();
  }

  next() {
    this.currentSlider += 1;
    if (this.currentSlider === this.sliders.length) this.currentSlider = 0;
  }

  back() {
    this.currentSlider -= 1;
    if (this.currentSlider < 0) this.currentSlider = this.sliders.length - 1;
  }
}