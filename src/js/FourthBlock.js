export default class FourthBlock {
  constructor(block, sliders) {
    this.body = block;
    this.sliders = sliders;
    this.currentSlider = 1;
    this.sliderWrapper = block.querySelector(".sliderBlock__fourth");
    //this.next = this.next.bind(this);
  }

  init() {
    this.bindImages();
    //this.bindButtons();
  }

  bindImages() {
    const sliderCounter = this.body.querySelector(".sliderNumbers__fourth");

    this.sliders.forEach(element => {
      const newSlider = document.createElement("li");
      const newCount = document.createElement("li");
      newSlider.className = "slider__fourth";
      newSlider.id = this.sliders.indexOf(element) + 1 > 10 ? (this.sliders.indexOf(element) + 1) : '0' + (this.sliders.indexOf(element) + 1);
      newSlider.style.backgroundImage = `url(${element})`;
      newCount.innerText = newSlider.id;
      this.sliderWrapper.appendChild(newSlider);
      sliderCounter.appendChild(newCount);
    });
  }

  // bindButtons() {
  //   const rollForward = this.body.querySelector(".logo__fourth");
  //   rollForward.addEventListener("click", this.next);
  // }

  // next() {
  //   const width = this.currentSlider * 430;
  //   this.sliderWrapper.style.transform = `translateX(${0 - width}px)`;
  //   this.currentSlider += 1;
  //   if (this.currentSlider === this.sliders.length) this.currentSlider = 0;
  // }
}