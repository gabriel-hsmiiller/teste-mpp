import Promo1 from '../assets/promo-1.png';
import Promo2 from '../assets/promo-2.png';

interface Frame {
    page: number;
    image: any;
}

const Carousel: Frame[] = [
    { page: 1, image: Promo1 },
    { page: 2, image: Promo2 },
]

export default Carousel;