export default class Sliders {
  constructor(root) {
    this.bindToDOM(root);
  }

  bindToDOM() {
    if (!(root instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
  }

  init() {

  }
}