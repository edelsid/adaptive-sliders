import Sliders from './Sliders';

const blockOne = document.getElementById('first');
const blockTwo = document.getElementById('second');
const blockThree = document.getElementById('third');
const blockFour = document.getElementById('fourth');

const app = new Sliders(blockOne, blockTwo, blockThree, blockFour);
app.init();
