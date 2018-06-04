import kris01 from './kris01.jpg';
import kris02 from './kris02.jpg';

let imgs = {
    kris01,
    kris02
};

let getImage = (key) => imgs[key];

export default getImage;
