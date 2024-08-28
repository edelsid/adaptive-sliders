import FirstBlock from './FirstBlock';
import FourthBlock from './FourthBlock';
import ThirdBlock from './ThirdBlock';
import SecondBlock from './SecondBlock';
import fash1 from '../img/1/ian-dooley-TT-ROxWj9nA-unsplash.jpg';
import fash2 from '../img/1/reza-delkhosh-1h4SHm3SZ0c-unsplash.jpg';
import fash3 from '../img/1/ulla-shinami-iMvS-ft_xK4-unsplash.jpg';
import fash4 from '../img/1/omid-armin-PmB5Uo9dUk4-unsplash.jpg';
import trv1 from '../img/2/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg';
import trv2 from '../img/2/h-fall-JWGm_wkbL2o-unsplash.jpg';
import trv3 from '../img/2/jack-anstey-XVoyX7l9ocY-unsplash.jpg';
import trv4 from '../img/2/jakob-owens-5F_c9i3JP0I-unsplash.jpg';
import tech1 from '../img/3/chris-murray-SQL6cO9D9lU-unsplash.png';
import tech2 from '../img/3/christopher-gower-m_HRfLhgABo-unsplash.png';
import tech3 from '../img/3/florian-klauer-mk7D-4UCfmg-unsplash.png';
import tech4 from '../img/3/jezael-melgoza-wCAa_rIG-Dc-unsplash.png';
import art1 from '../img/4/arham-jain-OkiDTYxLo34-unsplash.jpg';
import art2 from '../img/4/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg';
import art3 from '../img/4/europeana-LY2u-E3bNaY-unsplash.jpg';
import art4 from '../img/4/europeana-MvR30qxn-MM-unsplash.jpg';
import art5 from '../img/4/mcgill-library-COphCQKS660-unsplash.jpg';

export default class Sliders {
  constructor(blockOne, blockTwo, blockThree, blockFour) {
    this.bindToDOM([blockOne, blockTwo, blockThree, blockFour]);
    this.firstBlock = new FirstBlock(blockOne, [fash1, fash2, fash3, fash4]);
    this.secondBlock = new SecondBlock(blockTwo, [trv1, trv2, trv3, trv4]);
    this.thirdBlock = new ThirdBlock(blockThree, [tech1, tech2, tech3, tech4]);
    this.fourthBlock = new FourthBlock(blockFour, [art1, art2, art3, art4, art5]);
  }

  bindToDOM(arr) {
    arr.forEach((element) => {
      if (!(element instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }
    });
  }

  init() {
    this.firstBlock.init();
    this.secondBlock.init();
    this.thirdBlock.init();
    this.fourthBlock.init();
  }
}
