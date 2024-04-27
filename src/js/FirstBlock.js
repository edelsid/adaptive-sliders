export default class FirstBlock {
  constructor(block, sliders) {
    this.body = block;
    this.sliders = sliders;
    this.left = 0;
    this.currentSlider = 1;
    this.wrapper = block.querySelector(".sliderBlock__first");
    this.counter = block.querySelector(".sliderNumbers__first");
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
    this.wrapper.parentElement.style.width = `${430 * this.sliders.length}px`;

    this.sliders.forEach(element => {
      const newSlider = document.createElement("li");
      const newCount = document.createElement("li");
      newSlider.className = "slider__first";
      newSlider.style.backgroundImage = `url(${element})`;
      newCount.id = this.sliders.indexOf(element) + 1;
      newCount.innerText = this.sliders.indexOf(element) + 1 > 10 ? (this.sliders.indexOf(element) + 1) : '0' + (this.sliders.indexOf(element) + 1);
      newCount.addEventListener("click", this.change);
      newSlider.id = newCount.id;
      this.wrapper.appendChild(newSlider);
      this.counter.appendChild(newCount);
    });
  }

  bindButtons() {
    const buttons = Array.from(this.body.querySelectorAll(".navButton__first"));
    buttons.forEach((button) => {
      button.addEventListener("click", this.change);
    });
  }

  change(e) {
    const width = this.wrapper.firstChild.offsetWidth + 30;
    switch (e.target.id) {
      case "next": this.next(width);
        break;
      case "back": this.back(width);
        break;
      default: this.getToSlide(e.target.id, width);
    };
    this.wrapper.style.transform = `translateX(${this.left}px)`;
    this.setCounter();
  }

  next(width) {
    this.left = this.left - width;
    this.currentSlider += 1;
    if (this.currentSlider > this.sliders.length) this.currentSlider = 1;
    if (this.left < -(width * (this.sliders.length - 1))) this.left = 0;
  }

  back(width) {
    if (this.left === 0) {
      this.left = -(width * (this.sliders.length - 1));
      this.currentSlider = this.sliders.length;
      return;
    };
    this.left = this.left + width;
    this.currentSlider -= 1;
  }

  getToSlide(id, width) {
    this.left = 0 - (width * (id - 1));
    this.currentSlider = parseInt(id);
  }

  setCounter() {
    this.counter.childNodes.forEach((element) => {
      parseInt(element.id) === this.currentSlider ? element.className = "selected" : element.classList = "";
    });
  }
}