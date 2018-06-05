import kris01 from './images/kris01.jpg';
import kris02 from './images/kris02.jpg';
import kris03 from './images/kris03.jpg';
import paleoServicesWhiteSans from './images/paleoservices_white_sans.png';
let imgs = {
    kris01,
    kris02,
    kris03,
    paleoServicesWhiteSans
};

let getImage = (key) => imgs[key];

export default getImage;
